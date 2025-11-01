import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // --- HOME PAGE ---
    welcome: 'Welcome to University Surf Club Lausanne',
    intro: `Founded in 2024 by a group of passionate surfers from EPFL and UNIL, our non-profit
association is dedicated to promoting the surfing lifestyle within our university community.
We offer a diverse range of surf-related activities tailored for both beginners eager to
explore the world of surfing and experienced riders looking to enhance their skills.`,
    join: 'Join us to ride the waves!',
    activities: 'Our activities',
    calendar: 'Calendar 🗓️',
    "home": {
      "followUsOnInstagram": "Follow us on Instagram"
    },
    winch: {
      title: 'Winch Surfing',
      desc: 'Winch surfing is one of our favourite activities! It offers an exhilarating way to experience the thrill of riding a surfboard.'
    },
    pump: {
      title: 'Pump Foil',
      desc: 'Surfing above the water? You bet! Welcome to pump foil — glide like an airplane wing!'
    },
    skate: {
      title: 'Surf Skate',
      desc: 'Come surf on land! Surf skating lets you glide and carve just like you’re riding a wave.'
    },
    winchSurf: `Winch surfing is a surfing discipline that uses a winch system to pull the surfer through the water at high speed. This system generally consists of a motor, a rope and a winch mechanism that generates a fast, powerful pull. The surf winch is particularly popular in areas where natural wave conditions are less than optimal, or for surfers looking to perform spectacular aerial maneuvers. Using a winch, surfers can reach high speeds and perform acrobatic tricks that would be difficult to achieve with natural waves alone. This discipline is often practiced by professional surfers and extreme sports enthusiasts looking to push the limits of their performance. The winch surf also enables surfing in places where the waves are not powerful or regular enough to allow advanced maneuvers. In short, winch surfing is a form of winch-assisted surfing, offering unique possibilities for spectacular performance and aerial tricks.`,
    pumpFoil: `Pump foiling is a water sport discipline that combines surfing and foiling. The foil is a device consisting of a daggerboard with an underwater wing that allows the board to rise above the water. The term “pump” refers to the action of pumping, i.e. transferring one's weight from front to back to generate speed and keep the board in the air without the aid of waves or wind. In pump foil, riders use this pumping technique to keep the board in the air and on the water, even in the absence of waves or wind. It's a discipline that demands a great deal of technique and balance, and is often practiced by experienced surfers or water sports enthusiasts looking for new sensations. Pump foiling is a relatively new and fast-growing activity, attracting more and more water sports enthusiasts around the world.`,
    events: {
      title: 'Special Events',
      desc: 'We also organise a range of special events — from wake surfing to lively parties!'
    },

    // --- SURFSKATE PAGE ---
    surfskate: {
      switchLang: 'Français',
      paragraph1:
        "Surfskate is a variant of skateboarding that appeared at the end of the 1990s, featuring a double-jointed front truck that facilitates short, flat turns without loss of speed and alternating edges.",
      paragraph2:
        "A surfskate is a skateboard for street surfing! The special front axle enables surf-like movements. The axle dynamics on a surfskate allow short, easy-to-maneuver turns, just like on a surfboard. Even if you have absolutely nothing to do with surfing, it doesn't matter — the movements are absolutely intuitive and easy to learn. A surfskate can be “pumped up” all the way, i.e. driving and gaining speed without having to put your feet on the road. This feeling is unique, and these movements are not possible with traditional longboards. You can drive even around the tightest bends, slalom, around obstacles in your path — the moving axes allow it. You just need to shift your weight. If you can't wait for your next seaside vacation, or want to improve your surfing skills, or are looking for a new way to ride, surfskate is the right choice for you!",
      people: ['Enzo Pinat', 'Pedro Pino'],
    },
    history: {
      title: 'History',
      paragraph1: "The club was founded at the end of February 2024 with the aim of building a community united by a passion for surfing and, more broadly, water sports. Its main goal has always been to provide a space where students can unwind, stay active, and enjoy the beauty of the lake and the many activities it offers, all while connecting and bonding with one another.",
      paragraph2: "The club was established—and continues to thrive—thanks to the incredible dedication of its members and committee. It is their enthusiasm and support that have shaped the club into what it is today.",
      year2024_title: "Year 2024:",
      year2024_members: "Nino Berger, Paola Biocchi, Nouchine Bouchiat, Alban Bréart, Louma Cerutti, Jean-Sébastien Delineau, Victoria De Groote, Julien Drouet, Yona Farina, Kilian Pouderoux, Zoe Monnard, Enzo Pinat, Pedro Pinot, Jules Pirot, Leo Popper, Alice Potter, Victor Peucelle, Camille Velin and Paul Vannoye",
      history_events_title: "History Events",
      history_events_intro: "We strive to offer three sports activities per week from the end of March to the beginning of July, and then again from the beginning of September to mid-November. In addition to these regular sessions, we also aim to organize larger events. Some of these included:",
      events: [
        { date: '22 March 2024', title: 'Discovery Session - Esplanade (EPFL)', desc: 'To introduce ourselves, we organized a discovery session in the heart of campus, where people could try surfskating and enjoy delicious Tony Mate.' },
        { date: '12 April 2024', title: 'Apéro Bowl - Vidy', desc: 'This was our first major event, with over 100 participants. In the afternoon, attendees took surfskate lessons and shredded with Red Bulls, followed by an apéro with free beers and great music.' },
        { date: '20 April 2024', title: 'First Water Session - Vidy', desc: 'Our first-ever water activity! Despite the 12°C water, our members weren’t discouraged and spent more than four hours foil surfing.' },
        { date: '27 April 2024', title: 'First Winch Session - Discovery for All (Sports Center)', desc: 'We hosted our first winch session, open to everyone, and even had people outside the club trying it for the first time.' },
        { date: '31 May 2024', title: 'Wakesurf Session - St-Sulpice', desc: 'In collaboration with W School, we organized an afternoon of wakesurfing followed by an apéro. We also sold delicious homemade cookies by none other than our designer, Nouchine Bouchiat.' },
        { date: '11 December 2024', title: 'First Merch Drop', desc: 'Thanks to Paul Vannoye and CoastLine, we launched our first line of merchandise, t-shirts and tote bags for sale, and exclusive sweaters for the committee.' },
        { date: '27 March 2025', title: 'Sound & Swell - St-Sulpice', desc: 'We rented a venue and threw a party from 10 PM to 3 AM with over 100 paid entries. The night featured 4 DJs and non-stop food and drinks throughout the entire event.' },
        { date: '15 May 2025', title: 'ESN x USC - Vidy', desc: 'In collaboration with ESN Lausanne, we organized an afternoon (4 PM to 8 PM) of activities for 20–30 Erasmus students. They rotated through surfskating, pump foiling, and winch surfing sessions.' }
      ],
      noEvents: "No events available yet.",
    },
    contact: {
      title: "Contact Form",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      success: "Your message was sent successfully!",
    },
    documents: {      
      title: "Documents",      
      subtitle: "Download the association's official documents",
      status: "Association status",      
      disclaimer: "USC Lausanne disclaimer"    
    },
    team: {
      title: "Our Team",
      subtitle: "Meet the USC committee",
      board: "Board",
      sports: "Sports managers",
      communication: "Communication managers",
      association: "Association managers",
      community: "Community manager",
    },
    instagram: {
      join: "Join us on Instagram!"
    },
    becomeMember: {
      title: "Become a Member",
      description: "Hi there! If you're here, it means you'd like to become a member of USC Lausanne. Founded in 2024 by surf enthusiasts, USC Lausanne is a student association that shares the culture and spirit of surfing in Lausanne. We organize a wide range of activities — from beginner introductions to advanced sessions — always in a friendly and relaxed atmosphere.",
      benefitsTitle: "Membership benefits",
      benefits: [
        { title: "Join an active community of surfers", desc: "Join the vibrant USC community and meet people passionate about surfing!" },
        { title: "Free access to all USC activities!", desc: "You get access to all of our weekly activities and get deals for special events!" },
        { title: "Personalised photo and video content", desc: "During the events we will take pictures and videos of you!" },
        { title: "Share your surf stories in our USC Insta", desc: "Share your surf experiences with the rest of the community!" }
      ],
      feesTitle: "Membership fees",
      fees: {
        fullYear: { label: "Full year (2 Semesters)", price: "Student: 50.- / Alumni: 80.-" },
        halfYear: { label: "Half year (1 Semester)", price: "Student: 30.- / Alumni: 50.-" }
      },
      stepsTitle: "A few steps to become a member",
      steps: [
        { title: "Fill out the registration form", desc: 'Complete the form to start your membership: <a href="https://docs.google.com/forms/d/e/1FAIpQLSciu57BUXIPhuAFFxdfbBHsj4a_kJUY2bgOt8BcBQdLWB7L1Q/viewform?usp=dialog" target="_blank" style="text-decoration: underline;">Google Form</a>' },
        { title: "Download and sign the document", desc: 'Download, sign, and submit your membership document: <a href="../assets/USC_Lausanne_Decharge_EN.pdf" target="_blank" style="text-decoration: underline;">Membership Info (PDF)</a>' },
        { title: "Enjoy the USC activities", desc: "After completing the steps, enjoy all the USC activities available to members!" }
      ]
    },
    footer: {
      contact: "Contact",
      networks: "Networks",
      team: "Team",
      documents: "Documents",
      phototheque: "Gallery",
      history: "History"
    },
    eventsPage: {
      title: 'Events',
      intro: `The club organises special events throughout the year, offering unique moments to bring members together and share the spirit of surfing beyond regular activities.`,
    },

    // --- GALLERY PAGE ---
    gallery: {
      title: "Gallery",
      subtitle: "Dive into the highlights of our club's best moments!",
      empty: "No photos yet. Stay tuned for upcoming events and memories.",
      download: "Download",
      seeAll: "See all",
      close: "Close",
    }
  },

  fr: {
    // --- PAGE D’ACCUEIL ---
    welcome: 'Bienvenue à l’University Surf Club Lausanne',
    intro: `Fondée en 2024 par un groupe de surfeurs passionnés de l’EPFL et de l’UNIL, notre association à but non lucratif promeut le style de vie surf au sein de la communauté universitaire.`,
    join: 'Rejoignez-nous pour surfer sur les vagues !',
    activities: 'Nos activités',
    calendar: 'Calendrier 🗓️',
    "home": {
      "followUsOnInstagram": "Suivez-nous sur Instagram"
    },
    winch: {
      title: 'Winch Surfing',
      desc: 'Le winch surfing est l’une de nos activités préférées : sensations fortes garanties !'
    },
    pump: {
      title: 'Pump Foil',
      desc: 'Surfer au-dessus de l’eau ? Et comment ! Bienvenue dans le pump foil.'
    },
    skate: {
      title: 'Surf Skate',
      desc: 'Viens surfer sur la terre ferme : glisse et carves comme sur une vague !'
    },
    winchSurf: `Le winch surf est une discipline de surf qui utilise un système de treuil (winch) pour tirer le surfeur à grande vitesse sur l'eau. Ce système est généralement composé d'un moteur, d'une corde et d'un mécanisme de treuil qui permet de générer une traction rapide et puissante. Le winch surf est particulièrement populaire dans les zones où les conditions de vagues naturelles ne sont pas optimales ou pour les surfeurs qui cherchent à réaliser des manœuvres aériennes spectaculaires. En utilisant un treuil, les surfeurs peuvent atteindre des vitesses élevées et effectuer des figures acrobatiques qui seraient difficiles à réaliser avec des vagues naturelles seules. Cette discipline est souvent pratiquée par des surfeurs professionnels et des amateurs de sports extrêmes qui cherchent à repousser les limites de leurs performances. Le winch surf permet également de pratiquer le surf dans des endroits où les vagues ne sont pas suffisamment puissantes ou régulières pour permettre des manœuvres avancées. En résumé, le winch surf est une forme de surf assisté par un treuil, offrant des possibilités uniques pour des performances spectaculaires et des figures aériennes.`,
    pumpFoil: `Le 'pump foil' est une discipline de sport nautique qui combine le surf et le foil. Le foil est un dispositif composé d'une planche équipée d'une dérive avec une aile sous-marine qui permet à la planche de s'élever au-dessus de l'eau. Le terme 'pump' fait référence à l'action de pomper, c'est-à-dire de transférer son poids d'avant en arrière pour générer de la vitesse et maintenir la planche en l'air sans l'aide de vagues ou de vent. En pump foil, les pratiquants utilisent cette technique de pompage pour maintenir la planche en l'air et naviguer sur l'eau, même en l'absence de vagues ou de vent. C'est une discipline qui demande beaucoup de technique et d'équilibre, et elle est souvent pratiquée par des surfeurs expérimentés ou des amateurs de sports nautiques cherchant de nouvelles sensations. Le pump foil est une activité relativement récente et en pleine croissance, attirant de plus en plus de passionnés de sports nautiques à travers le monde.`,
    events: {
      title: 'Événements Spéciaux',
      desc: 'Nous organisons des événements : wake surf, apéros et soirées animées !'
    },

    // --- PAGE SURFSKATE ---
    surfskate: {
      switchLang: 'English',
      paragraph1:
        "Le surfskate est une variante de skateboard, apparue à la fin des années 1990, caractérisé par un truck avant à double articulation facilitant les virages courts à plat et sans perte de vitesse et les prises de carre alternées.",
      paragraph2:
        "Un surfskate c'est un skateboard pour surfer dans la rue ! L'axe avant spécial permet d'accomplir des mouvements similaires à ceux du surf. La dynamique des axes sur un surfskate permet des virages courts et faciles à manœuvrer, comme sur un surf. Même si vous n'avez absolument rien à voir avec le surf, cela n'a pas d'importance : les mouvements sont absolument intuitifs et faciles à apprendre. Un surfskate peut être « gonflé » tout au long de la route, c’est-à-dire conduire et gagner de la vitesse sans avoir à mettre les pieds sur la route. Ce sentiment est unique et ces mouvements ne sont pas possibles avec les longboards traditionnels. Vous pouvez conduire même dans les virages les plus étroits, en slalom, autour des obstacles de votre chemin : les axes en mouvement le permettent. Vous avez juste besoin de déplacer votre poids. Si vous ne pouvez pas attendre vos prochaines vacances au bord de la mer, si vous souhaitez améliorer vos compétences de surf ou que vous recherchez une nouvelle façon de rouler, le surfskate est le bon choix pour vous !",
      people: ['Enzo Pinat', 'Pedro Pino'],
    },
    history: {
      title: 'Histoire',
      paragraph1: "Le club a été fondé fin février 2024 dans le but de construire une communauté unie par la passion du surf et, plus largement, des sports nautiques. Son objectif principal a toujours été de fournir un espace où les étudiants peuvent se détendre, rester actifs et profiter de la beauté du lac et des nombreuses activités qu'il offre, tout en se connectant et en se rapprochant les uns des autres.",
      paragraph2: "Le club a été créé - et continue de prospérer - grâce à l'incroyable dévouement de ses membres et de son comité. C'est grâce à leur enthousiasme et à leur soutien que le club est devenu ce qu'il est aujourd'hui.",
      year2024_title: "L'année 2024 :",
      year2024_members: "Nino Berger, Paola Biocchi, Nouchine Bouchiat, Alban Bréart, Louma Cerutti, Jean-Sébastien Delineau, Victoria De Groote, Julien Drouet, Yona Farina, Kilian Pouderoux, Zoe Monnard, Enzo Pinat, Pedro Pinot, Jules Pirot, Leo Popper, Alice Potter, Victor Peucelle, Camille Velin et Paul Vannoye",
      history_events_title: "Événements passés",
      history_events_intro: "Nous nous efforçons de proposer trois activités sportives par semaine de fin mars à début juillet, puis de début septembre à mi-novembre. En plus de ces sessions régulières, nous visons également à organiser des événements plus importants. En voici quelques-uns :",
      events: [
        { date: '22 mars 2024', title: 'Séance découverte - Esplanade (EPFL)', desc: 'Pour se présenter, nous avons organisé une séance découverte au cœur du campus où les participants ont pu essayer le surfskate et savourer le délicieux Tony Mate.' },
        { date: '12 avril 2024', title: 'Apéro Bowl - Vidy', desc: 'Il s’agissait de notre premier grand événement avec plus de 100 participants. L’après-midi, les participants ont pris des cours de surfskate et ont profité des Red Bulls, suivis d’un apéro avec bières gratuites et de la bonne musique.' },
        { date: '20 avril 2024', title: 'Première session eau - Vidy', desc: 'Notre toute première activité aquatique ! Malgré l’eau à 12°C, nos membres n’ont pas été découragés et ont passé plus de quatre heures à foil surfer.' },
        { date: '27 avril 2024', title: 'Première session Winch - Découverte pour tous (Centre sportif)', desc: 'Nous avons organisé notre première session Winch, ouverte à tous, avec même des personnes extérieures au club essayant pour la première fois.' },
        { date: '31 mai 2024', title: 'Session Wakesurf - St-Sulpice', desc: 'En collaboration avec W School, nous avons organisé un après-midi de wakesurf suivi d’un apéro. Nous avons également vendu de délicieux cookies faits maison par notre designer, Nouchine Bouchiat.' },
        { date: '11 décembre 2024', title: 'Premier drop merchandising', desc: 'Grâce à Paul Vannoye et CoastLine, nous avons lancé notre première ligne de merchandising, t-shirts et tote bags à vendre, et des pulls exclusifs pour le comité.' },
        { date: '27 mars 2025', title: 'Sound & Swell - St-Sulpice', desc: 'Nous avons loué un lieu et organisé une soirée de 22h à 3h avec plus de 100 entrées payantes. La soirée a comporté 4 DJs et de la nourriture et des boissons non-stop.' },
        { date: '15 mai 2025', title: 'ESN x USC - Vidy', desc: 'En collaboration avec ESN Lausanne, nous avons organisé un après-midi (16h à 20h) d’activités pour 20–30 étudiants Erasmus. Ils ont alterné entre surfskate, pump foil et winch surfing.' }
      ],
      noEvents: "Aucun événement pour le moment.",
    },
    contact: {
      title: "Formulaire de contact",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      success: "Votre message a été envoyé avec succès !",
    },
    "documents": {
      "title": "Documents",
      "subtitle": "Téléchargez les documents officiels de l'association",
      "status": "Status de l'association",
      "disclaimer": "Décharge USC Lausanne"
    },
    team: {
      title: "Notre Équipe",
      subtitle: "Rencontrer le comité USC",
      board: "Présidence",
      sports: "Responsables sports",
      communication: "Responsables de la communication",
      association: "Responsables asso",
      community: "Gestionnaire de communauté",
    },
    instagram: {
      join: "Rejoignez-nous sur Instagram !"
    },
    becomeMember: {
      title: "Devenir membre",
      description: "Salut à toi ! Si tu es ici, c’est que tu aimerais devenir membre d’USC Lausanne. Fondée en 2024 par des passionné·e·s de surf, USC Lausanne est une association étudiante qui partage la culture et l’esprit du surf à Lausanne. Nous organisons des activités variées, allant des initiations pour débutant·e·s aux sessions pour surfeurs plus expérimentés, toujours dans une ambiance conviviale et détendue.",
      benefitsTitle: "Avantages pour les membres",
      benefits: [
        { title: "Rejoindre une communauté active de surfeurs", desc: "Rejoignez la communauté dynamique de l'USC et rencontrez des gens passionnés par le surf !" },
        { title: "Accès gratuit à toutes les activités de l'USC !", desc: "Vous avez accès à toutes nos activités hebdomadaires et bénéficiez d'offres pour des événements spéciaux !" },
        { title: "Contenu photo et vidéo personnalisé", desc: "Pendant les événements, nous prendrons des photos et des vidéos de vous !" },
        { title: "Partagez vos histoires de surf sur notre Insta USC", desc: "Partagez vos expériences de surf avec le reste de la communauté !" }
      ],
      feesTitle: "Cotisations des membres",
      fees: {
        fullYear: { label: "Année complète (2 semestres)", price: "Étudiant : 50.- / Anciens élèves : 80.-" },
        halfYear: { label: "Demi-année (1 semestre)", price: "Étudiant : 30.- / Ancien élève : 50.-" }
      },
      stepsTitle: "Quelques étapes pour devenir membre",
      steps: [
        { title: "Remplissez le formulaire d'inscription", desc: 'Remplissez le formulaire pour commencer votre adhésion : <a href="https://docs.google.com/forms/d/e/1FAIpQLSciu57BUXIPhuAFFxdfbBHsj4a_kJUY2bgOt8BcBQdLWB7L1Q/viewform?usp=dialog" target="_blank" style="text-decoration: underline;">Google Formulaire</a>' },
        { title: "Téléchargez et signez le document", desc: 'Téléchargez, signez et soumettez votre document d adhésion : <a href="../assets/USC_Lausanne_Decharge_FR.pdf" target="_blank" style="text-decoration: underline;">Informations sur l adhésion (PDF)</a>' },
        { title: "Profitez des activités USC", desc: "Après avoir complété les étapes, profitez de toutes les activités de l'USC accessibles aux membres !" }
      ]
    },
    footer: {
      contact: "Contact",
      networks: "Réseaux",
      team: "Équipe",
      documents: "Documents",
      phototheque: "Photothèque",
      history: "Histoire"
    },
    eventsPage: {
      title: 'Événements',
      intro: `Le club organise des événements spéciaux tout au long de l'année, offrant des moments uniques pour rassembler les membres et partager l'esprit du surf au-delà des activités régulières.`,
    },

    // --- PAGE GALERIE ---
    gallery: {
      title: "Photothèque",
      subtitle: "Plongez dans les meilleurs souvenirs du club !",
      empty: "Pas encore de photos. Restez à l'écoute pour les prochains événements et souvenirs.",
      download: "Télécharger",
      seeAll: "Tout voir",
      close: "Fermer",
    }
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})