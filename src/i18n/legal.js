export const legalMessages = {
  en: {
    mentions: {
      title: 'Legal notice',
      intro:
        'This page names the publisher of the University Surf Club Lausanne website. It uses only what is in the public statutes, the committee page, and the site itself.',
      gapsTitle: 'Identity still to be completed by the association',
      gaps: [
        'To be completed: postal address',
        'To be completed: email address',
        'To be completed: phone number',
        'To be completed: IDE number',
      ],
      gapsNote:
        'The statutes give the seat as Lausanne (VD). They do not give a street, an email, a phone number, or an IDE, and neither does the rest of the site.',
      sections: [
        {
          title: 'Publisher',
          paragraphs: [
            'University Surf Club Lausanne (USC Lausanne) is an association within the meaning of Article 60 et seq. of the Swiss Civil Code. Its seat is in Lausanne (VD). The site presents it as a non-profit association, founded in 2024 by surfers from EPFL and UNIL.',
            'The statutes published on this site (Status.pdf, titled Status 2025/2026) were adopted and confirmed by the General Assembly on 31 August 2025.',
          ],
          links: [{ label: 'Statutes (Status.pdf)', href: './Status.pdf', external: true }],
        },
        {
          title: 'Purpose',
          paragraphs: [
            'The association aims to foster community and integration among students by organizing activities and events related to surfing and related disciplines. It must primarily address the student community on campus. It is politically and confessionally neutral (statutes, Articles 2 and 3).',
          ],
        },
        {
          title: 'Representation',
          paragraphs: [
            'The board conducts day-to-day business and represents the association externally (statutes, Article 23). The statutes of 31 August 2025 are signed by Kilian Pouderoux, Anthony Verhoeven, Yona Farina, Léopold Popper, Jean-Sébastien Delineau, and Lina Sajid.',
            'The committee published on the site is listed on the Team page (roles such as VP Sport, sports leads, communication, IT, design, and community managers). No single publication officer, email, or phone number is given there.',
          ],
          links: [{ label: 'Team', to: '/team' }],
        },
        {
          title: 'This website',
          paragraphs: [
            'The site is a public static website. The project README states that it is available at https://usc-lausanne.github.io/Website/. It does not offer user accounts.',
            'Pages cover activities, events, history, the committee, documents, a contact form, and membership information. There is no online shop and no online payment.',
          ],
        },
        {
          title: 'Official documents on the site',
          paragraphs: [
            'The documents page offers the statutes (Status.pdf) and the USC Lausanne waiver (USCLausanneDecharge.pdf) for download.',
          ],
          links: [{ label: 'Documents', to: '/document' }],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      intro:
        'This page describes personal data in relation to this website, under the Swiss Federal Act on Data Protection (nLPD / FADP). It covers only processing that the repository and the public pages actually show.',
      gapsTitle: 'Controller contact still to be completed by the association',
      gaps: [
        'To be completed: postal address',
        'To be completed: email address',
        'To be completed: phone number',
        'To be completed: IDE number',
      ],
      gapsNote:
        'The controller is the association named below. No email, phone number, or street address is published, so a request cannot be addressed from the information on this site alone.',
      sections: [
        {
          title: 'Controller',
          paragraphs: [
            'The controller is University Surf Club Lausanne, an association under Article 60 et seq. of the Swiss Civil Code, with its seat in Lausanne (VD). The board represents the association externally (statutes, Article 23).',
          ],
          links: [{ label: 'Legal notice', to: '/mentions' }],
        },
        {
          title: 'Contact form',
          paragraphs: [
            'The contact page asks for three fields: name, email, and message. Those values stay in the browser while the form is being filled in.',
            'This site does not send them to a server, does not write them to localStorage, and does not pass them on to a third party. They are not kept after the fields are cleared on the page. The site therefore holds no file of contact messages.',
          ],
          links: [{ label: 'Contact', to: '/contact' }],
        },
        {
          title: 'Preferences stored on the device',
          paragraphs: [
            'The site writes three localStorage keys on the device only. They are not cookies, and they are not sent to the association.',
            'locale — the display language, fr or en. It is written when the language changes and read again when a page loads.',
            'darkMode — the string true or false. It is written by the dark-mode button in the header and read when the header loads.',
            'theme — the string dark or light. It is written when the theme is applied to the page.',
            'You can delete them in your browser’s site data. Details are on the cookies page.',
          ],
          links: [{ label: 'Cookies', to: '/cookies' }],
        },
        {
          title: 'Membership: external Google Form',
          paragraphs: [
            'The membership page links to an external Google Form (Google Forms, docs.google.com) at https://docs.google.com/forms/d/e/1FAIpQLSciu57BUXIPhuAFFxdfbBHsj4a_kJUY2bgOt8BcBQdLWB7L1Q/viewform?usp=dialog . The form loads only if you click that link. This website does not embed the form and does not receive a copy of what is typed into it. Data entered there is handled by Google, outside this site.',
            'The statutes (Article 9) say a membership application can be made using the designated forms or by email to the board, that the board reviews it and decides on admission, and that this decision is confirmed by the ordinary general assembly. No board email address is published on this site.',
          ],
          links: [{ label: 'Become a member', to: '/join' }],
        },
        {
          title: 'Waiver',
          paragraphs: [
            'The PDF USCLausanneDecharge.pdf, also referred to from the membership page, is a form to complete and sign. It asks for last name, first name, date of birth, email address, phone number, place, date, and signature. For a minor, it provides for the signature of a parent or legal guardian.',
            'It also records acceptance of the risks of the activities (including surfing, surfskate, pump foil, training, outings, trips, and any other related event), a release of the association, its committee, organizers, volunteers, and partners except in cases of gross negligence or intentional misconduct, and permission for organizers to contact medical services in an emergency.',
            'The website displays that PDF. It has no online form for those fields and does not state where the signed document should be sent.',
          ],
          links: [
            { label: 'Waiver (USCLausanneDecharge.pdf)', href: './USCLausanneDecharge.pdf', external: true },
            { label: 'Documents', to: '/document' },
          ],
        },
        {
          title: 'External services load only on click',
          paragraphs: [
            'Instagram: a link to https://www.instagram.com/usc_lausanne/ . There is no embedded feed and no pixel. Instagram loads only if you click the link.',
            'Lightroom / Adobe: the gallery shows photos that are files of this site. Two buttons open Lightroom folders only on click: “Dossier Hiver 2024” (https://adobe.ly/4868YUd) and “Dossier Printemps 2024” (https://adobe.ly/47Lbwaa).',
            'Google: the membership form described above, only on click.',
            'No audience-measurement script, no gtag, and no advertising pixel is loaded with the pages.',
          ],
          links: [
            { label: 'Gallery', to: '/gallery' },
            { label: 'Become a member', to: '/join' },
          ],
        },
        {
          title: 'Photos',
          paragraphs: [
            'The membership page states that photos and videos of participants may be taken during events. The gallery publishes a selection of club photos. No other image-permission process is described on this site.',
          ],
        },
        {
          title: 'Cookies and audience measurement',
          paragraphs: [
            'This site does not set cookies. It does not show a consent banner, because it does not load trackers.',
          ],
          links: [{ label: 'Cookies', to: '/cookies' }],
        },
        {
          title: 'How long data stays',
          paragraphs: [
            'The three localStorage keys remain until you clear site data in the browser. Contact-form fields are not stored by the site. How long membership records are kept outside this website is not stated in the documents published here.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'The nLPD provides in particular a right of access, rectification, and deletion, and the possibility to contact the Federal Data Protection and Information Commissioner (FDPIC). A channel to send a request to the association still has to be published (see the box at the top of this page).',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookies',
      intro:
        'This site does not set cookies. It does not use audience measurement, gtag, or an advertising pixel. It does not show a consent banner for trackers that are not there.',
      gapsTitle: '',
      gaps: [],
      gapsNote: '',
      sections: [
        {
          title: 'No cookies',
          paragraphs: [
            'No page writes a cookie. No third-party statistics or advertising script is loaded when the site opens.',
          ],
        },
        {
          title: 'What is stored locally',
          paragraphs: [
            'Three localStorage keys are written in the browser, on your device only. They remember the language and the theme. They are not sent to the association or to a third party.',
            'locale — site language, fr or en. Written when the language is chosen, and read when a page loads.',
            'darkMode — true or false. Written by the dark-mode button in the header, and read when the header loads.',
            'theme — dark or light. Written when the theme is applied to the page.',
          ],
        },
        {
          title: 'How to remove them',
          paragraphs: [
            'You can delete these keys in your browser settings (site data or local storage) for this site. The site will then show the default language and theme again.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of use',
      intro:
        'These terms describe the use of this site as it actually is: public pages of an association, with no user account and no online payment.',
      gapsTitle: '',
      gaps: [],
      gapsNote: '',
      sections: [
        {
          title: 'Purpose',
          paragraphs: [
            'The site presents University Surf Club Lausanne: activities, events, history, the committee, documents, and how to become a member. The publisher is the association described in the legal notice.',
          ],
          links: [{ label: 'Legal notice', to: '/mentions' }],
        },
        {
          title: 'No user account',
          paragraphs: [
            'The site does not create an account, a login, or a member area. Browsing the pages does not require registration.',
          ],
        },
        {
          title: 'Membership',
          paragraphs: [
            'Fees and the steps to join are described on the membership page. Registration goes to an external Google Form, which opens only if you click the link. The waiver is a PDF to download and sign. Neither step creates an account on this site.',
            'Article 8 says membership may be acquired by natural persons who are enrolled students or alumni of the universities of Lausanne, and in exceptional cases by students or alumni of other Swiss universities. Article 9 says an application can be made using the designated forms or by email to the board; the board reviews it and decides on admission, and that decision is confirmed by the ordinary general assembly. No board email is published here.',
          ],
          links: [
            { label: 'Become a member', to: '/join' },
            { label: 'Statutes (Status.pdf)', href: './Status.pdf', external: true },
          ],
        },
        {
          title: 'External links',
          paragraphs: [
            'Instagram, the Lightroom folders (Adobe), and the Google Form load only if you click the corresponding link. Their content is those services’ own.',
          ],
        },
        {
          title: 'Content',
          paragraphs: [
            'Texts, photos, and PDFs published here are published by the association. The statutes govern the association. This site does not sell that content.',
          ],
        },
        {
          title: 'Activities',
          paragraphs: [
            'The pages describe sports activities (winch surfing, pump foil, surfskate, and events). The waiver states that these activities involve risks. Information on the site does not replace instructions given on site.',
          ],
          links: [{ label: 'Waiver (USCLausanneDecharge.pdf)', href: './USCLausanneDecharge.pdf', external: true }],
        },
        {
          title: 'Availability',
          paragraphs: [
            'The site is provided as a public static website. No service level is promised here.',
          ],
        },
        {
          title: 'Applicable framework',
          paragraphs: [
            'The statutes are those of an association under Swiss law, with its seat in Lausanne (VD).',
          ],
        },
      ],
    },
    cgv: {
      title: 'Terms of sale',
      intro:
        'This site is not a shop. There is no customer account, no cart, and no online payment. The only amounts published are association membership fees.',
      gapsTitle: '',
      gaps: [],
      gapsNote: '',
      sections: [
        {
          title: 'No online sale',
          paragraphs: [
            'No page lets you order a product, book a paid service, or pay by card or any other means. There are no delivery terms, no online commercial warranty, and no customer account, because those mechanisms do not exist here.',
          ],
        },
        {
          title: 'Membership fees',
          paragraphs: [
            'Membership is a status in the association, not a purchase on this site. The statutes of 31 August 2025 (Article 11) set the fee at CHF 30 per semester or CHF 50 per year, and say that a different rate may apply for non-student members. For board and committee members, and for some people with a special status decided by the board, the contribution is voluntary.',
            'The membership page also publishes: full year (2 semesters), student 50.- / alumni 80.- ; half year (1 semester), student 30.- / alumni 50.- . Those amounts are not collected on this website.',
          ],
          links: [
            { label: 'Become a member', to: '/join' },
            { label: 'Statutes (Status.pdf)', href: './Status.pdf', external: true },
          ],
        },
        {
          title: 'How to join',
          paragraphs: [
            'The steps published on the site are: fill in the external Google Form, download and sign the waiver, then take part in USC activities. The form and the waiver are not a payment flow.',
          ],
          links: [{ label: 'Become a member', to: '/join' }],
        },
        {
          title: 'What these terms do not cover',
          paragraphs: [
            'They do not create a contract of sale, a software subscription, or a merchandise shop. Past events described on the history page included, for example, paid entries and items sold on site. Those are not offered for payment on this website and are not given online terms of sale here.',
          ],
          links: [{ label: 'History', to: '/history' }],
        },
      ],
    },
  },
  fr: {
    mentions: {
      title: 'Mentions légales',
      intro:
        'Cette page identifie l’éditeur du site de l’University Surf Club Lausanne. Elle reprend uniquement ce qui figure dans les statuts publics, la page du comité et le site.',
      gapsTitle: 'Identité encore à compléter par l’association',
      gaps: [
        'À compléter : adresse postale',
        'À compléter : adresse e-mail',
        'À compléter : téléphone',
        'À compléter : numéro IDE',
      ],
      gapsNote:
        'Les statuts indiquent le siège à Lausanne (VD). Ils ne donnent ni rue, ni e-mail, ni téléphone, ni numéro IDE, et le reste du site non plus.',
      sections: [
        {
          title: 'Éditeur',
          paragraphs: [
            'University Surf Club Lausanne (USC Lausanne) est une association au sens des articles 60 et suivants du Code civil suisse. Son siège est à Lausanne (VD). Le site la présente comme une association à but non lucratif, fondée en 2024 par des surfeurs de l’EPFL et de l’UNIL.',
            'Les statuts publiés sur ce site (Status.pdf, intitulés Status 2025/2026) ont été adoptés et confirmés par l’assemblée générale du 31 août 2025.',
          ],
          links: [{ label: 'Statuts (Status.pdf)', href: './Status.pdf', external: true }],
        },
        {
          title: 'But',
          paragraphs: [
            'L’association vise à favoriser la communauté et l’intégration des étudiant·e·s en organisant des activités et des événements liés au surf et aux disciplines associées. Elle s’adresse en priorité à la communauté étudiante du campus. Elle est politiquement et confessionnellement neutre (statuts, art. 2 et 3).',
          ],
        },
        {
          title: 'Représentation',
          paragraphs: [
            'Le comité (board) conduit les affaires courantes et représente l’association à l’extérieur (statuts, art. 23). Les statuts du 31 août 2025 sont signés par Kilian Pouderoux, Anthony Verhoeven, Yona Farina, Léopold Popper, Jean-Sébastien Delineau et Lina Sajid.',
            'Le comité publié sur le site est indiqué sur la page Équipe (rôles tels que VP Sport, responsables sports, communication, IT, design et community managers). Aucune personne unique chargée de la publication, ni e-mail, ni téléphone n’y est donné.',
          ],
          links: [{ label: 'Équipe', to: '/team' }],
        },
        {
          title: 'Ce site',
          paragraphs: [
            'Le site est un site statique public. Le README du projet indique qu’il est accessible à l’adresse https://usc-lausanne.github.io/Website/. Il ne propose pas de compte utilisateur.',
            'Les pages présentent les activités, les événements, l’histoire, le comité, les documents, un formulaire de contact et les modalités d’adhésion. Il n’y a ni boutique en ligne ni paiement en ligne.',
          ],
        },
        {
          title: 'Documents officiels sur le site',
          paragraphs: [
            'La page Documents propose le téléchargement des statuts (Status.pdf) et de la décharge USC Lausanne (USCLausanneDecharge.pdf).',
          ],
          links: [{ label: 'Documents', to: '/document' }],
        },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité',
      intro:
        'Cette page décrit les données personnelles en lien avec ce site, au regard de la loi fédérale sur la protection des données (nLPD). Elle ne couvre que les traitements que le dépôt et les pages publiques permettent d’établir.',
      gapsTitle: 'Contact du responsable — à compléter par l’association',
      gaps: [
        'À compléter : adresse postale',
        'À compléter : adresse e-mail',
        'À compléter : téléphone',
        'À compléter : numéro IDE',
      ],
      gapsNote:
        'Le responsable est l’association nommée ci-dessous. Aucun e-mail, téléphone ou rue n’est publié : une demande ne peut pas être adressée à partir des seules informations de ce site.',
      sections: [
        {
          title: 'Responsable',
          paragraphs: [
            'Le responsable du traitement est l’University Surf Club Lausanne, association au sens des articles 60 et suivants du Code civil suisse, siège à Lausanne (VD). Le comité représente l’association à l’extérieur (statuts, art. 23).',
          ],
          links: [{ label: 'Mentions légales', to: '/mentions' }],
        },
        {
          title: 'Formulaire de contact',
          paragraphs: [
            'La page Contact demande trois champs : le nom, l’adresse e-mail et le message. Ces valeurs restent dans le navigateur pendant la saisie.',
            'Ce site ne les envoie pas à un serveur, ne les écrit pas dans le localStorage et ne les transmet pas à un tiers. Elles ne sont pas conservées après l’effacement des champs sur la page. Le site ne détient donc pas de fichier de messages de contact.',
          ],
          links: [{ label: 'Contact', to: '/contact' }],
        },
        {
          title: 'Préférences enregistrées sur l’appareil',
          paragraphs: [
            'Le site écrit trois clés dans le localStorage, uniquement sur l’appareil. Ce ne sont pas des cookies, et elles ne sont pas envoyées à l’association.',
            'locale — langue affichée, fr ou en. Elle est écrite lorsque la langue change, et relue au chargement d’une page.',
            'darkMode — la chaîne true ou false. Elle est écrite par le bouton de mode sombre du bandeau, et relue au chargement du bandeau.',
            'theme — la chaîne dark ou light. Elle est écrite lorsque le thème est appliqué à la page.',
            'Vous pouvez les effacer dans les données de site du navigateur. Le détail est sur la page Cookies.',
          ],
          links: [{ label: 'Cookies', to: '/cookies' }],
        },
        {
          title: 'Adhésion : formulaire Google externe',
          paragraphs: [
            'La page d’adhésion pointe vers un formulaire Google externe (Google Forms, docs.google.com) : https://docs.google.com/forms/d/e/1FAIpQLSciu57BUXIPhuAFFxdfbBHsj4a_kJUY2bgOt8BcBQdLWB7L1Q/viewform?usp=dialog . Ce formulaire ne se charge que si vous cliquez sur le lien. Ce site ne l’intègre pas et ne reçoit pas de copie de ce qui y est saisi. Les données entrées là sont traitées par Google, en dehors de ce site.',
            'Les statuts (art. 9) indiquent qu’une demande d’adhésion peut se faire au moyen des formulaires prévus ou par e-mail au comité, que le comité l’examine et statue sur l’admission, et que cette décision est confirmée par l’assemblée générale ordinaire. Aucune adresse e-mail du comité n’est publiée sur ce site.',
          ],
          links: [{ label: 'Devenir membre', to: '/join' }],
        },
        {
          title: 'Décharge',
          paragraphs: [
            'Le PDF USCLausanneDecharge.pdf, également indiqué depuis la page d’adhésion, est un document à remplir et à signer. Il demande le nom, le prénom, la date de naissance, l’adresse e-mail, le téléphone, le lieu, la date et la signature. Pour une personne mineure, la signature du parent ou du tuteur légal est prévue.',
            'Il enregistre aussi l’acceptation des risques des activités (y compris surf, surfskate, pump foil, entraînements, sorties, voyages et tout autre événement lié), une décharge envers l’association, son comité, ses organisateurs, ses bénévoles et ses partenaires sauf faute grave ou intentionnelle, et l’autorisation de contacter les services médicaux en cas d’urgence.',
            'Le site affiche ce PDF. Il ne contient pas de formulaire en ligne pour ces champs et n’indique pas d’adresse où renvoyer le document signé.',
          ],
          links: [
            { label: 'Décharge (USCLausanneDecharge.pdf)', href: './USCLausanneDecharge.pdf', external: true },
            { label: 'Documents', to: '/document' },
          ],
        },
        {
          title: 'Services externes chargés uniquement au clic',
          paragraphs: [
            'Instagram : un lien vers https://www.instagram.com/usc_lausanne/ . Pas de fil intégré, pas de pixel. Instagram ne se charge que si vous cliquez sur le lien.',
            'Lightroom / Adobe : la photothèque affiche des photos qui sont des fichiers de ce site. Deux boutons ouvrent des dossiers Lightroom seulement au clic : « Dossier Hiver 2024 » (https://adobe.ly/4868YUd) et « Dossier Printemps 2024 » (https://adobe.ly/47Lbwaa).',
            'Google : le formulaire d’adhésion décrit ci-dessus, au clic uniquement.',
            'Aucun script de mesure d’audience, aucun gtag et aucun pixel publicitaire n’est chargé avec les pages.',
          ],
          links: [
            { label: 'Photothèque', to: '/gallery' },
            { label: 'Devenir membre', to: '/join' },
          ],
        },
        {
          title: 'Photos',
          paragraphs: [
            'La page d’adhésion indique que des photos et des vidéos des participant·e·s peuvent être prises pendant les événements. La photothèque publie une sélection de photos du club. Aucun autre régime d’autorisation d’image n’est décrit sur ce site.',
          ],
        },
        {
          title: 'Cookies et mesure d’audience',
          paragraphs: [
            'Ce site ne dépose pas de cookie. Il n’affiche pas de bandeau de consentement, parce qu’il ne charge pas de traceur.',
          ],
          links: [{ label: 'Cookies', to: '/cookies' }],
        },
        {
          title: 'Durée de conservation',
          paragraphs: [
            'Les trois clés localStorage restent jusqu’à leur effacement dans les données de site du navigateur. Les champs du formulaire de contact ne sont pas stockés par le site. La durée de conservation des dossiers d’adhésion en dehors de ce site n’est pas indiquée dans les documents publiés ici.',
          ],
        },
        {
          title: 'Vos droits',
          paragraphs: [
            'La nLPD prévoit notamment un droit d’accès, de rectification et de suppression, et la possibilité de saisir le Préposé fédéral à la protection des données et à la transparence (PFPDT). Un moyen de contact pour adresser une demande à l’association reste à publier (voir l’encadré en haut de cette page).',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookies',
      intro:
        'Ce site ne dépose pas de cookie. Il n’utilise pas de mesure d’audience, pas de gtag et pas de pixel publicitaire. Il n’affiche pas de bandeau de consentement pour des traceurs qui n’existent pas.',
      gapsTitle: '',
      gaps: [],
      gapsNote: '',
      sections: [
        {
          title: 'Pas de cookie',
          paragraphs: [
            'Aucune page n’écrit de cookie. Aucun script tiers de statistique ou de publicité n’est chargé à l’ouverture du site.',
          ],
        },
        {
          title: 'Ce qui est enregistré localement',
          paragraphs: [
            'Trois clés localStorage sont écrites dans le navigateur, sur votre appareil seulement. Elles servent à retrouver la langue et le thème. Elles ne sont pas envoyées à l’association ni à un tiers.',
            'locale — langue du site, fr ou en. Écrite lorsque la langue est choisie, et relue au chargement d’une page.',
            'darkMode — true ou false. Écrite par le bouton de mode sombre du bandeau, et relue au chargement du bandeau.',
            'theme — dark ou light. Écrite lorsque le thème est appliqué à la page.',
          ],
        },
        {
          title: 'Les effacer',
          paragraphs: [
            'Vous pouvez supprimer ces clés dans les paramètres du navigateur (données du site ou stockage local). Le site réaffiche alors la langue et le thème par défaut.',
          ],
        },
      ],
    },
    terms: {
      title: 'Conditions générales d’utilisation',
      intro:
        'Ces conditions décrivent l’usage de ce site tel qu’il existe : pages publiques d’une association, sans compte utilisateur et sans paiement en ligne.',
      gapsTitle: '',
      gaps: [],
      gapsNote: '',
      sections: [
        {
          title: 'Objet',
          paragraphs: [
            'Le site présente l’University Surf Club Lausanne : activités, événements, histoire, comité, documents et modalités d’adhésion. L’éditeur est l’association décrite dans les mentions légales.',
          ],
          links: [{ label: 'Mentions légales', to: '/mentions' }],
        },
        {
          title: 'Pas de compte',
          paragraphs: [
            'Le site ne crée pas de compte, d’identifiant ni d’espace membre. La consultation des pages ne demande pas d’inscription.',
          ],
        },
        {
          title: 'Adhésion',
          paragraphs: [
            'Les cotisations et les étapes pour devenir membre sont décrites sur la page d’adhésion. L’inscription passe par un formulaire Google externe, ouvert seulement au clic. La décharge est un PDF à télécharger et à signer. Aucune de ces étapes ne crée de compte sur ce site.',
            'L’article 8 indique que l’adhésion peut être acquise par des personnes physiques, étudiant·e·s ou ancien·ne·s des universités de Lausanne, et dans des cas exceptionnels d’autres universités suisses. L’article 9 indique qu’une demande peut se faire au moyen des formulaires prévus ou par e-mail au comité ; le comité l’examine et statue sur l’admission, et cette décision est confirmée par l’assemblée générale ordinaire. Aucun e-mail du comité n’est publié ici.',
          ],
          links: [
            { label: 'Devenir membre', to: '/join' },
            { label: 'Statuts (Status.pdf)', href: './Status.pdf', external: true },
          ],
        },
        {
          title: 'Liens externes',
          paragraphs: [
            'Instagram, les dossiers Lightroom (Adobe) et le formulaire Google ne se chargent que si vous cliquez sur le lien correspondant. Leur contenu relève de ces services.',
          ],
        },
        {
          title: 'Contenus',
          paragraphs: [
            'Les textes, photos et PDF publiés ici le sont par l’association. Les statuts régissent l’association. Ce site ne vend pas ces contenus.',
          ],
        },
        {
          title: 'Activités',
          paragraphs: [
            'Les pages décrivent des activités sportives (winch, pump foil, surfskate et événements). La décharge indique que ces activités comportent des risques. Les informations du site ne remplacent pas les consignes données sur place.',
          ],
          links: [{ label: 'Décharge (USCLausanneDecharge.pdf)', href: './USCLausanneDecharge.pdf', external: true }],
        },
        {
          title: 'Disponibilité',
          paragraphs: [
            'Le site est fourni comme site statique public. Aucun niveau de service n’est promis ici.',
          ],
        },
        {
          title: 'Cadre applicable',
          paragraphs: [
            'Les statuts sont ceux d’une association de droit suisse, dont le siège est à Lausanne (VD).',
          ],
        },
      ],
    },
    cgv: {
      title: 'Conditions générales de vente',
      intro:
        'Ce site n’est pas une boutique. Il n’y a ni compte client, ni panier, ni paiement en ligne. Les seuls montants publiés sont des cotisations d’association.',
      gapsTitle: '',
      gaps: [],
      gapsNote: '',
      sections: [
        {
          title: 'Pas de vente en ligne',
          paragraphs: [
            'Aucune page ne permet de commander un produit, de réserver une prestation payante ou de payer par carte ou un autre moyen. Il n’y a pas de conditions de livraison, pas de garantie commerciale en ligne et pas de compte client, parce que ces mécanismes n’existent pas ici.',
          ],
        },
        {
          title: 'Cotisations',
          paragraphs: [
            'L’adhésion est une qualité de membre, pas un achat sur ce site. Les statuts du 31 août 2025 (art. 11) fixent la cotisation à 30 CHF par semestre ou 50 CHF par an, et indiquent qu’un tarif différent peut s’appliquer aux membres non étudiants. Pour les membres du comité, et pour certaines personnes au statut spécial décidé par le comité, la cotisation est volontaire.',
            'La page Devenir membre publie en outre : année complète (2 semestres), étudiant 50.- / ancien élève 80.- ; demi-année (1 semestre), étudiant 30.- / ancien élève 50.- . Ces montants ne sont pas encaissés sur ce site.',
          ],
          links: [
            { label: 'Devenir membre', to: '/join' },
            { label: 'Statuts (Status.pdf)', href: './Status.pdf', external: true },
          ],
        },
        {
          title: 'Comment adhérer',
          paragraphs: [
            'Les étapes publiées sur le site sont : remplir le formulaire Google externe, télécharger et signer la décharge, puis participer aux activités de l’USC. Le formulaire et la décharge ne constituent pas un paiement.',
          ],
          links: [{ label: 'Devenir membre', to: '/join' }],
        },
        {
          title: 'Ce que ces conditions ne règlent pas',
          paragraphs: [
            'Elles ne créent pas de contrat de vente, d’abonnement logiciel ni de boutique de merchandising. Des événements passés décrits sur la page Histoire ont comporté, par exemple, des entrées payantes et des ventes sur place. Elles ne sont pas proposées au paiement sur ce site et ne font pas l’objet de conditions de vente en ligne ici.',
          ],
          links: [{ label: 'Histoire', to: '/history' }],
        },
      ],
    },
  },
}
