#!/usr/bin/env node
// Vérifications rapides, avant le build. Chacune correspond à un défaut
// réellement rencontré sur ce dépôt, pas à une règle de style.

import { readFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { join, extname } from 'node:path'

const SRC = 'src'
const problemes = []

async function fichiers(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...(await fichiers(p)))
    else out.push(p)
  }
  return out
}

const TEXTE = new Set(['.vue', '.js', '.ts', '.css', '.html', '.json'])
const tous = (await fichiers(SRC)).filter((f) => TEXTE.has(extname(f)))

// 1. Chemins d'images bruts dans un attribut -------------------------------
// `src="/src/assets/x.jpeg"` marche en dev et casse en production : l'attribut
// statique part tel quel dans le HTML, vers un chemin qui n'existe plus une
// fois le site construit. Quatre images du site étaient invisibles en ligne.
// Un *import* à slash initial (`import logo from '/src/assets/…'`) est en
// revanche résolu par Vite et ne pose pas de problème : la règle ne vise que
// les attributs et les `url()` de CSS.
const ATTRIBUT_BRUT = /(?:\bsrc|\bhref|\bposter|\bsrcset)\s*=\s*["']\/src\/|url\(\s*["']?\/src\//
for (const f of tous) {
  const contenu = readFileSync(f, 'utf8')
  contenu.split('\n').forEach((ligne, i) => {
    if (ATTRIBUT_BRUT.test(ligne)) {
      problemes.push(
        `${f}:${i + 1} — chemin brut « /src/… » dans un attribut. ` +
          `Importer le fichier (import photo from '@/assets/…') et lier avec :src.`,
      )
    }
  })
}

// 2. Parité des clés de traduction -----------------------------------------
// Une clé présente dans une langue et absente de l'autre affiche le chemin de
// la clé à l'écran, sans erreur ni avertissement.
const { i18n } = await import('../src/i18n/index.js')
const chemins = (obj, prefixe = '') =>
  Object.entries(obj).flatMap(([k, v]) => {
    const chemin = prefixe ? `${prefixe}.${k}` : k
    return v && typeof v === 'object' && !Array.isArray(v) ? chemins(v, chemin) : [chemin]
  })

const en = new Set(chemins(i18n.global.getLocaleMessage('en')))
const fr = new Set(chemins(i18n.global.getLocaleMessage('fr')))
for (const cle of en) if (!fr.has(cle)) problemes.push(`i18n — « ${cle} » existe en anglais, pas en français.`)
for (const cle of fr) if (!en.has(cle)) problemes.push(`i18n — « ${cle} » existe en français, pas en anglais.`)

// 3. Marqueurs de conflit oubliés ------------------------------------------
for (const f of tous) {
  const contenu = readFileSync(f, 'utf8')
  contenu.split('\n').forEach((ligne, i) => {
    if (/^(<{7}|>{7}) /.test(ligne)) problemes.push(`${f}:${i + 1} — marqueur de conflit git oublié.`)
  })
}

if (problemes.length) {
  console.error(`\n${problemes.length} problème(s) :\n`)
  for (const p of problemes) console.error(`  • ${p}`)
  console.error('')
  process.exit(1)
}

console.log(`✓ ${tous.length} fichiers vérifiés, rien à signaler.`)
