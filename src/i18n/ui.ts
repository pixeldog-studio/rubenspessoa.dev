export type Locale = 'en' | 'pt-br' | 'de';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'pt-br': 'Português',
  de: 'Deutsch',
};

export const localeLangTags: Record<Locale, string> = {
  en: 'en-GB',
  'pt-br': 'pt-BR',
  de: 'de-AT',
};

export const localeOgTags: Record<Locale, string> = {
  en: 'en_GB',
  'pt-br': 'pt_BR',
  de: 'de_AT',
};

/** Path prefix for each locale ('' for the default). */
export const localePrefixes: Record<Locale, string> = {
  en: '',
  'pt-br': '/pt-br',
  de: '/de',
};

/** Base paths that exist in every locale; other paths fall back to the locale home. */
export const localizedPaths = ['/', '/about/'];

export const ui = {
  en: {
    nav: { apps: 'Apps', about: 'About' },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      imprint: 'Imprint',
      builtIn: 'Built in Graz, Austria.',
      themeLabels: { auto: 'Auto', light: 'Light', dark: 'Dark' },
      themeName: 'Theme',
      language: 'Language',
    },
    home: {
      title: 'Pixeldog | Apps for iPhone, iPad, and Mac by Rubens Pessoa',
      description:
        'Pixeldog is the app studio of Rubens Pessoa. Native apps for iPhone, iPad, and Mac: Save My Cactus, Hustlrr, and Giorni.',
      ogDescription:
        'Native apps for Apple devices from Pixeldog, the one-person studio of Rubens Pessoa.',
      heroTitle: 'Native apps for humans.',
      heroLede:
        'Pixeldog is the one-person app studio of Rubens Pessoa in Graz, Austria. Apps for iPhone, iPad, Mac, and Apple Watch, and the person who built them also answers the support email.',
      appsLabel: 'Apps by Pixeldog',
      comingSoon: 'Coming soon',
      learnMore: 'Learn more',
      smc: {
        tagline: 'AI plant care',
        summary:
          'Stop killing your plants. Point your camera at a struggling plant and the app tells you what it is and what’s wrong, then builds a watering schedule you’ll actually follow.',
        jsonDescription:
          'AI plant care: find out what your plant needs and keep a watering schedule.',
      },
      hustlrr: {
        tagline: 'AI chat for Apple devices',
        summary:
          'The big AI models in one native app for iPhone, iPad, and Mac. Ask a question once and compare the answers side by side. Chats stay on your device and sync over iCloud.',
        jsonDescription: 'The big AI models in one native app for iPhone, iPad, and Mac.',
        storeAria: 'Download Hustlrr on the App Store',
      },
      giorni: {
        tagline: 'Daily habit tracker',
        summary:
          'A habit tracker that doesn’t nag. Tick off your days, run a focus session when you need one, and pick the streak back up after a bad week.',
        jsonDescription: 'A daily habit tracker with focus sessions and iCloud sync.',
        storeAria: 'Download Giorni on the App Store',
      },
      provenanceFlagAlt: 'European Union',
      provenance:
        'Made in Europe. Built under European privacy law, with no trackers and no data resale.',
    },
    about: {
      title: 'About | Pixeldog',
      description:
        'Rubens Pessoa is an independent founder in Graz, Austria, making apps for iPhone, iPad, Mac, and Apple Watch.',
      kicker: 'About',
      heading: 'Hi, I’m Rubens.',
      p1: 'I’m a Brazilian founder living in Graz, Austria. I make apps for iOS, iPadOS, macOS, and watchOS, and I do everything myself: the design, the code, and the support inbox. Pixeldog is the name I put on all of it.',
      p2: 'Everything I ship is native, and I sweat the details: how an app feels on the platform it lives on, how it behaves offline, and what happens to your data. The short version is that it stays yours. Working alone also means there’s nobody else to blame when a detail is off, which turns out to be excellent motivation for getting the details right.',
      p3: 'Outside of work I’m usually on a bike, on skis I’m still learning to trust, or playing the guitar I never quite put down after years in a band. I’m married to a brilliant engineer, so home is basically a happy nerdy two-person lab.',
      grazHeading: 'Made in Graz.',
      grazText1:
        'Graz has been home for seven years now. I ride my bicycle basically everywhere, because here you can. Sundays are properly quiet: shops closed, streets slow, and I’ve grown to love that pace. For a city this size there is a stubborn amount of culture, from opera to street festivals, and it rubs off on you. I think you can see it in the apps. Quiet, unhurried software, made a short walk from the places in these photos.',
      grazText2:
        'And I’m not from here. I came from Brazil, chose this place, and I care about it the way you care about things you chose. Pixeldog is a small way of giving something back to the city and the continent that became home.',
      closing: 'If one of these apps ends up on your phone, now you know who made it and where.',
      grazAlts: {
        uhrturm: 'The Uhrturm clock tower on the Schlossberg, seen from the square below',
        murinsel: 'The Murinsel floating platform on the Mur river at dusk',
        hauptplatz:
          'The Hauptplatz in Graz on a wet evening, with the lit kiosk in the middle of the square',
      },
      contactPrefix: 'Questions about the apps, or just want to say hi? Write me at',
      portraitAlt: 'Portrait of Rubens Pessoa',
    },
  },
  'pt-br': {
    nav: { apps: 'Apps', about: 'Sobre' },
    footer: {
      privacy: 'Privacidade',
      terms: 'Termos',
      imprint: 'Aviso legal',
      builtIn: 'Feito em Graz, Áustria.',
      themeLabels: { auto: 'Automático', light: 'Claro', dark: 'Escuro' },
      themeName: 'Tema',
      language: 'Idioma',
    },
    home: {
      title: 'Pixeldog | Apps para iPhone, iPad e Mac por Rubens Pessoa',
      description:
        'A Pixeldog é o estúdio de apps de Rubens Pessoa. Apps nativos para iPhone, iPad e Mac: Save My Cactus, Hustlrr e Giorni.',
      ogDescription:
        'Apps nativos para dispositivos Apple da Pixeldog, o estúdio de uma pessoa só de Rubens Pessoa.',
      heroTitle: 'Apps nativos para gente de verdade.',
      heroLede:
        'A Pixeldog é o estúdio de apps de uma pessoa só: o de Rubens Pessoa, em Graz, na Áustria. Apps para iPhone, iPad, Mac e Apple Watch, e quem escreveu o código é quem responde o e-mail de suporte.',
      appsLabel: 'Apps da Pixeldog',
      comingSoon: 'Em breve',
      learnMore: 'Saiba mais',
      smc: {
        tagline: 'Cuidado de plantas com IA',
        summary:
          'Pare de matar suas plantas. Aponte a câmera para uma planta sofrendo e o app diz o que ela é e o que há de errado, e ainda monta um cronograma de rega que você vai conseguir seguir.',
        jsonDescription:
          'Cuidado de plantas com IA: descubra o que sua planta precisa e mantenha um cronograma de rega.',
      },
      hustlrr: {
        tagline: 'Chat de IA para dispositivos Apple',
        summary:
          'Os grandes modelos de IA em um app nativo para iPhone, iPad e Mac. Pergunte uma vez e compare as respostas lado a lado. As conversas ficam no seu aparelho e sincronizam pelo iCloud.',
        jsonDescription: 'Os grandes modelos de IA em um app nativo para iPhone, iPad e Mac.',
        storeAria: 'Baixar o Hustlrr na App Store',
      },
      giorni: {
        tagline: 'Hábitos diários',
        summary:
          'Um app de hábitos que não fica no seu pé. Marque seus dias, use uma sessão de foco quando precisar e retome a sequência depois de uma semana ruim.',
        jsonDescription:
          'Um rastreador de hábitos diários com sessões de foco e sincronização via iCloud.',
        storeAria: 'Baixar o Giorni na App Store',
      },
      provenanceFlagAlt: 'União Europeia',
      provenance:
        'Feito na Europa. Criado sob as leis europeias de privacidade, sem rastreadores e sem venda de dados.',
    },
    about: {
      title: 'Sobre | Pixeldog',
      description:
        'Rubens Pessoa mora em Graz, na Áustria, e cria seus próprios apps para iPhone, iPad, Mac e Apple Watch.',
      kicker: 'Sobre',
      heading: 'Oi, eu sou o Rubens.',
      p1: 'Sou brasileiro, moro em Graz, na Áustria, e crio meus próprios apps para iOS, iPadOS, macOS e watchOS. Faço tudo sozinho: o design, o código e a caixa de entrada do suporte. A Pixeldog é o nome que eu coloco em tudo isso.',
      p2: 'Tudo o que eu lanço é nativo, e me importo com os detalhes: como o app se sente na plataforma em que vive, como se comporta offline e o que acontece com os seus dados. A versão curta é que eles continuam seus. Trabalhar sozinho também significa que não tem mais ninguém para culpar quando um detalhe sai errado, o que acaba sendo uma ótima motivação para acertar os detalhes.',
      p3: 'Fora do trabalho, geralmente estou na bicicleta, nos esquis em que ainda estou aprendendo a confiar, ou tocando a guitarra que nunca larguei desde os tempos de banda. Sou casado com uma engenheira brilhante, então nossa casa é basicamente um laboratório nerd feliz de duas pessoas.',
      grazHeading: 'Feito em Graz.',
      grazText1:
        'Graz é a minha casa há sete anos. Ando de bicicleta para praticamente tudo, porque aqui dá. Os domingos são silenciosos de verdade: lojas fechadas, ruas lentas, e aprendi a gostar desse ritmo. Para uma cidade desse tamanho, tem uma quantidade teimosa de cultura, da ópera aos festivais de rua, e isso contagia. Acho que dá para ver isso nos apps. Software calmo, sem pressa, feito a poucos passos dos lugares dessas fotos.',
      grazText2:
        'E eu não sou daqui. Vim do Brasil, escolhi este lugar, e me importo com ele do jeito que a gente se importa com o que escolheu. A Pixeldog é um jeito pequeno de retribuir à cidade e ao continente que viraram casa.',
      closing: 'Se um desses apps acabar no seu celular, agora você sabe quem fez e onde.',
      grazAlts: {
        uhrturm: 'A torre do relógio Uhrturm no Schlossberg, vista da praça abaixo',
        murinsel: 'A plataforma flutuante Murinsel no rio Mur ao anoitecer',
        hauptplatz:
          'A Hauptplatz de Graz numa noite chuvosa, com o quiosque iluminado no meio da praça',
      },
      contactPrefix: 'Dúvidas sobre os apps, ou só quer dizer um oi? Me escreva em',
      portraitAlt: 'Retrato de Rubens Pessoa',
    },
  },
  de: {
    nav: { apps: 'Apps', about: 'Über mich' },
    footer: {
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      imprint: 'Impressum',
      builtIn: 'Gemacht in Graz, Österreich.',
      themeLabels: { auto: 'Automatisch', light: 'Hell', dark: 'Dunkel' },
      themeName: 'Design',
      language: 'Sprache',
    },
    home: {
      title: 'Pixeldog | Apps für iPhone, iPad und Mac von Rubens Pessoa',
      description:
        'Pixeldog ist das App-Studio von Rubens Pessoa. Native Apps für iPhone, iPad und Mac: Save My Cactus, Hustlrr und Giorni.',
      ogDescription:
        'Native Apps für Apple-Geräte von Pixeldog, dem Ein-Personen-Studio von Rubens Pessoa.',
      heroTitle: 'Native Apps für Menschen.',
      heroLede:
        'Pixeldog ist das Ein-Personen-App-Studio von Rubens Pessoa in Graz. Apps für iPhone, iPad, Mac und Apple Watch, und wer sie gebaut hat, beantwortet auch die Support-Mails.',
      appsLabel: 'Apps von Pixeldog',
      comingSoon: 'Demnächst',
      learnMore: 'Mehr erfahren',
      smc: {
        tagline: 'Pflanzenpflege mit KI',
        summary:
          'Schluss mit toten Pflanzen. Richte die Kamera auf eine kränkelnde Pflanze und die App sagt dir, was es für eine ist und was ihr fehlt. Dazu gibt es einen Gießplan, den du auch wirklich einhältst.',
        jsonDescription:
          'Pflanzenpflege mit KI: finde heraus, was deine Pflanze braucht, und halte einen Gießplan ein.',
      },
      hustlrr: {
        tagline: 'KI-Chat für Apple-Geräte',
        summary:
          'Die großen KI-Modelle in einer nativen App für iPhone, iPad und Mac. Stell eine Frage einmal und vergleiche die Antworten nebeneinander. Chats bleiben am Gerät und synchronisieren über iCloud.',
        jsonDescription: 'Die großen KI-Modelle in einer nativen App für iPhone, iPad und Mac.',
        storeAria: 'Hustlrr im App Store laden',
      },
      giorni: {
        tagline: 'Täglicher Habit-Tracker',
        summary:
          'Ein Habit-Tracker, der nicht nervt. Hak deine Tage ab, starte eine Fokus-Session, wenn du eine brauchst, und nimm die Serie nach einer schlechten Woche einfach wieder auf.',
        jsonDescription: 'Ein täglicher Habit-Tracker mit Fokus-Sessions und iCloud-Sync.',
        storeAria: 'Giorni im App Store laden',
      },
      provenanceFlagAlt: 'Europäische Union',
      provenance:
        'Made in Europe. Gebaut unter europäischem Datenschutzrecht, ohne Tracker und ohne Datenverkauf.',
    },
    about: {
      title: 'Über mich | Pixeldog',
      description:
        'Rubens Pessoa lebt in Graz und baut seine eigenen Apps für iPhone, iPad, Mac und Apple Watch.',
      kicker: 'Über mich',
      heading: 'Hallo, ich bin Rubens.',
      p1: 'Ich bin Brasilianer, lebe in Graz und baue meine eigenen Apps für iOS, iPadOS, macOS und watchOS. Alles selbst: das Design, den Code und das Support-Postfach. Pixeldog ist der Name, den ich draufschreibe.',
      p2: 'Alles, was ich veröffentliche, ist nativ, und ich achte auf die Details: wie sich eine App auf ihrer Plattform anfühlt, wie sie offline funktioniert und was mit deinen Daten passiert. Kurz gesagt: Sie bleiben deine. Allein zu arbeiten heißt auch: Wenn ein Detail nicht passt, ist niemand sonst schuld. Das ist erstaunlich gute Motivation, die Details richtig hinzubekommen.',
      p3: 'Abseits der Arbeit bin ich meistens am Rad, auf Skiern, denen ich noch nicht ganz traue, oder an der Gitarre, die ich seit meinen Bandjahren nie ganz weggelegt habe. Ich bin mit einer großartigen Ingenieurin verheiratet, unser Zuhause ist also im Grunde ein glückliches Nerd-Labor für zwei.',
      grazHeading: 'Gemacht in Graz.',
      grazText1:
        'Graz ist seit sieben Jahren mein Zuhause. Ich fahre praktisch überallhin mit dem Rad, weil das hier einfach geht. Sonntage sind hier wirklich still: Geschäfte zu, Straßen langsam, und ich habe diesen Rhythmus lieben gelernt. Für eine Stadt dieser Größe gibt es erstaunlich viel Kultur, von der Oper bis zu Straßenfestivals, und das färbt ab. Ich glaube, man sieht das den Apps an. Ruhige Software ohne Eile, entstanden ein paar Gehminuten von den Orten auf diesen Fotos.',
      grazText2:
        'Und ich bin nicht von hier. Ich kam aus Brasilien, habe mir diesen Ort ausgesucht, und er liegt mir so am Herzen, wie einem Dinge am Herzen liegen, die man selbst gewählt hat. Pixeldog ist mein kleiner Beitrag an die Stadt und den Kontinent, die mein Zuhause geworden sind.',
      closing:
        'Wenn eine dieser Apps auf deinem Handy landet, weißt du jetzt, wer sie gemacht hat und wo.',
      grazAlts: {
        uhrturm: 'Der Uhrturm am Schlossberg, vom Platz darunter gesehen',
        murinsel: 'Die Murinsel in der Mur in der Abenddämmerung',
        hauptplatz:
          'Der Grazer Hauptplatz an einem regnerischen Abend, mit dem beleuchteten Würstelstand',
      },
      contactPrefix: 'Fragen zu den Apps, oder einfach Hallo sagen? Schreib mir an',
      portraitAlt: 'Porträt von Rubens Pessoa',
    },
  },
} as const;

export function pathForLocale(currentPath: string, target: Locale): string {
  let base = currentPath;
  for (const prefix of Object.values(localePrefixes)) {
    if (prefix && base.startsWith(prefix + '/')) {
      base = base.slice(prefix.length);
      break;
    }
  }
  if (!localizedPaths.includes(base)) {
    base = '/';
  }
  const prefix = localePrefixes[target];
  return prefix ? prefix + base : base;
}

export function localeFromPath(currentPath: string): Locale {
  if (currentPath === '/pt-br' || currentPath.startsWith('/pt-br/')) return 'pt-br';
  if (currentPath === '/de' || currentPath.startsWith('/de/')) return 'de';
  return 'en';
}
