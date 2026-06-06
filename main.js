/* ═══════════════════════════════════════════════
   JUNGLE LODGE RÍO DULCE — main.js
═══════════════════════════════════════════════ */

/* ─── TRANSLATIONS ─── */
const translations = {
  en: {
    'nav.bungalows':      'Bungalows',
    'nav.activities':     'Activities',
    'nav.arrival':        'Getting Here',
    'nav.contact':        'Contact',
    'nav.book':           'Book Now',
    'nav.bookAirbnb':     'Book Now on Airbnb',

    'hero.headline':      'Where the jungle<br>meets the river.',
    'hero.headline.short':'Where the jungle meets the river.',
    'hero.sub':           'An off-grid eco lodge on the Río Dulce.<br>Real jungle. Real river sounds at night. Up to 14 guests.',
    'hero.explore':       'Explore the Lodge',
    'hero.book':          'Book on Airbnb',

    'intro.label':        'The Lodge',
    'intro.body':         'The Jungle Lodge sits on El Golfete, the lake-like stretch of the Río Dulce in Guatemala. Five bungalows, a main house with bar and lounge, kayaks included. The property borders primary rainforest and a private wetland — home to manatees, monkeys, and hundreds of bird species. Room for fourteen guests.',

    'pillars.kayak.title':   'Kayaks Included',
    'pillars.kayak.desc':    'Paddle into the mangroves at sunrise. No extra charge, no booking required.',
    'pillars.vaquero.title': 'Vaquero Experience',
    'pillars.vaquero.desc':  'A full day with a local cowboy — horses, cattle, and real Guatemalan countryside.',
    'pillars.nature.title':  'Private Nature Reserve',
    'pillars.nature.desc':   'The lodge borders a protected wetland. Herons, howler monkeys, and silence.',

    'bungalows.label':        'Where You Sleep',
    'bungalows.title':        'Five bungalows.<br>No two the same.',
    'bungalows.solo.price':   'From $35 / night',
    'bungalows.solo.target':  'For solo travelers & couples',
    'bungalows.solo.desc':    'Tucked into the treeline, close enough to hear the river at night. Simple, honest, and everything you actually need.',
    'bungalows.river.price':  'From $65 / night',
    'bungalows.river.target': 'For couples & digital nomads',
    'bungalows.river.desc':   'Direct river view from your terrace. Air conditioning, en-suite bathroom, and Starlink WiFi strong enough to work — or to forget you should.',
    'bungalows.family.price': 'From $120 / night',
    'bungalows.family.target':'For families & groups',
    'bungalows.family.desc':  'Sleeps six across two double and two single beds. A private dock access, kitchenette for early mornings, and the strongest A/C on the property.',
    'bungalows.cta':          'Check Availability',
    'bungalows.note':         'All bungalows include kayak access, welcome drink, and lodge WiFi. Breakfast available on request.',

    'tags.doublebed':    'Double bed',
    'tags.terrace':      'Private terrace',
    'tags.hammock':      'Hammock',
    'tags.mosquitonet':  'Mosquito net',
    'tags.riverview':    'River view',
    'tags.ensuite':      'En-suite bath',
    'tags.riverterrace': 'River terrace',
    'tags.6guests':      '6 guests',
    'tags.strongac':     'Strong A/C',
    'tags.kitchenette':  'Kitchenette',
    'tags.privatedock':  'Private dock',

    'activities.label':          'What to Do',
    'activities.title':          'The river is your<br>front yard.',
    'activities.included':       'Included',
    'activities.askus':          'Ask us',
    'activities.kayak.name':     'Kayak the Río Dulce',
    'activities.kayak.desc':     'Take a kayak out at dawn, when the mist sits low on the water. The mangrove channels go on for hours. You won\'t see another boat.',
    'activities.vaquero.name':   'Vaquero Experience',
    'activities.vaquero.price':  'From $50 / person',
    'activities.vaquero.desc':   'A full day with Don Carlos, a third-generation cowboy from the valley. Horses, cattle, a home-cooked lunch, and zero tourist filters.',
    'activities.boat.name':      'Boat Tours',
    'activities.boat.desc':      'Day trips to Livingston, the Biotopo Chocón Machacas, or the manatee zones of El Golfete. We arrange the boat, you bring sunscreen.',
    'activities.wildlife.name':  'Wildlife & Birding',
    'activities.wildlife.desc':  'The lodge borders a private wetland. Boat-billed herons, kingfishers, howler monkeys at 5am whether you want them or not. Binoculars available at the bar.',

    'atmosphere.label': 'The Main House',
    'atmosphere.title': 'Where the evenings happen.',
    'atmosphere.body1': 'The main house is open on all sides. A thatched roof, a bar stocked with Quetzal beer and Zacapa rum, and long wooden tables that end up covered in maps by midnight. Safari-style furniture, hammocks on the porch, and a fire pit for nights when the sky is clear enough to matter.',
    'atmosphere.body2': 'We keep it to 14 guests maximum. Not because we can\'t build more bungalows — because we won\'t. The silence is part of what you\'re paying for.',
    'atmosphere.quote': '"The adventure starts before you check in."',

    'arrival.label':        'Getting Here',
    'arrival.title':        '295 km from the capital.<br>A world away.',
    'arrival.step1.title':  'Guatemala City or Antigua',
    'arrival.step1.desc':   'Most guests fly into GUA. Antigua is a popular first stop — it\'s 45 km from the airport and worth a night or two.',
    'arrival.step2.title':  'Río Dulce Town',
    'arrival.step2.desc':   'Río Dulce is approx. 295 km from Guatemala City via the CA-9 highway — a straightforward drive or direct shuttle bus from Antigua or the capital.',
    'arrival.step3.title':  'Boat Pickup to the Lodge',
    'arrival.step3.desc':   'We collect you by boat from the Río Dulce dock. The 15-minute ride through the gorge and into El Golfete is the first thing guests talk about. Message us your arrival time and we handle the rest.',
    'arrival.whatsapp':     '📱 Request Boat Pickup via WhatsApp',

    'contact.review':   '"This is a real jungle. Real insects. Real river sounds at night. If you love that, you\'ll give this place five stars too."',
    'contact.ctalabel': 'Ready to book or have questions?',
    'contact.airbnb':   'View on Airbnb',
    'contact.whatsapp': 'WhatsApp Us',

    'footer.detail':    'Maximum 14 guests · Río Dulce, Guatemala',
    'footer.impressum': 'Legal Notice',
    'footer.privacy':   'Privacy Policy',
    'footer.copy':      '© 2025 Jungle Lodge Río Dulce. All rights reserved.',
  },

  de: {
    'nav.bungalows':      'Bungalows',
    'nav.activities':     'Aktivitäten',
    'nav.arrival':        'Anreise',
    'nav.contact':        'Kontakt',
    'nav.book':           'Jetzt buchen',
    'nav.bookAirbnb':     'Jetzt auf Airbnb buchen',

    'hero.headline':      'Wo der Dschungel<br>auf den Fluss trifft.',
    'hero.headline.short':'Wo der Dschungel auf den Fluss trifft.',
    'hero.sub':           'Eine Off-Grid Eco Lodge am Río Dulce.<br>Echter Dschungel. Echte Flussgeräusche in der Nacht. Maximal 14 Gäste.',
    'hero.explore':       'Die Lodge entdecken',
    'hero.book':          'Auf Airbnb buchen',

    'intro.label':        'Die Lodge',
    'intro.body':         'Die Jungle Lodge liegt am El Golfete, dem seeartigen Abschnitt des Río Dulce in Guatemala. Fünf Bungalows, ein Haupthaus mit Bar und Lounge, Kajaks inklusive. Das Grundstück grenzt direkt an den Primärregenwald und ein eigenes Feuchtgebiet — Heimat von Manatees, Affen und hunderten Vogelarten. Platz für vierzehn Gäste.',

    'pillars.kayak.title':   'Kajaks inklusive',
    'pillars.kayak.desc':    'Bei Sonnenaufgang in die Mangroven paddeln. Ohne Aufpreis, ohne Anmeldung.',
    'pillars.vaquero.title': 'Vaquero-Erlebnis',
    'pillars.vaquero.desc':  'Ein ganzer Tag mit einem einheimischen Cowboy — Pferde, Rinder und echtes guatemaltekisches Land.',
    'pillars.nature.title':  'Privates Naturreservat',
    'pillars.nature.desc':   'Die Lodge grenzt an ein geschütztes Feuchtgebiet. Reiher, Brüllaffen und Stille.',

    'bungalows.label':        'Wo du schläfst',
    'bungalows.title':        'Fünf Bungalows.<br>Keiner wie der andere.',
    'bungalows.solo.price':   'Ab $35 / Nacht',
    'bungalows.solo.target':  'Für Alleinreisende & Paare',
    'bungalows.solo.desc':    'Versteckt im Baumbestand, nah genug, um den Fluss in der Nacht zu hören. Einfach, ehrlich, alles was du wirklich brauchst.',
    'bungalows.river.price':  'Ab $65 / Nacht',
    'bungalows.river.target': 'Für Paare & digitale Nomaden',
    'bungalows.river.desc':   'Direkter Flussblick von deiner Terrasse. Klimaanlage, eigenes Bad und Starlink-WLAN — stark genug zum Arbeiten oder um zu vergessen, dass man sollte.',
    'bungalows.family.price': 'Ab $120 / Nacht',
    'bungalows.family.target':'Für Familien & Gruppen',
    'bungalows.family.desc':  'Schläft sechs Personen auf zwei Doppel- und zwei Einzelbetten. Privater Bootssteg-Zugang, Küchenecke für frühe Morgen und die stärkste Klimaanlage auf dem Gelände.',
    'bungalows.cta':          'Verfügbarkeit prüfen',
    'bungalows.note':         'Alle Bungalows beinhalten Kajak-Zugang, Begrüßungsgetränk und Lodge-WLAN. Frühstück auf Anfrage erhältlich.',

    'tags.doublebed':    'Doppelbett',
    'tags.terrace':      'Private Terrasse',
    'tags.hammock':      'Hängematte',
    'tags.mosquitonet':  'Moskitonetz',
    'tags.riverview':    'Flussblick',
    'tags.ensuite':      'Eigenes Bad',
    'tags.riverterrace': 'Flussterrasse',
    'tags.6guests':      '6 Personen',
    'tags.strongac':     'Starke Klimaanlage',
    'tags.kitchenette':  'Küchenecke',
    'tags.privatedock':  'Privater Steg',

    'activities.label':          'Aktivitäten',
    'activities.title':          'Der Fluss ist dein<br>Vorgarten.',
    'activities.included':       'Inklusive',
    'activities.askus':          'Auf Anfrage',
    'activities.kayak.name':     'Kajak am Río Dulce',
    'activities.kayak.desc':     'Mit dem Kajak bei Tagesanbruch hinausfahren, wenn der Morgennebel noch tief über dem Wasser liegt. Die Mangrovenkanäle ziehen sich stundenlang hin. Kein anderes Boot weit und breit.',
    'activities.vaquero.name':   'Vaquero-Erlebnis',
    'activities.vaquero.price':  'Ab $50 / Person',
    'activities.vaquero.desc':   'Ein ganzer Tag mit Don Carlos, einem Cowboy der dritten Generation aus dem Tal. Pferde, Rinder, ein selbst gekochtes Mittagessen — ohne Touristenfilter.',
    'activities.boat.name':      'Bootstouren',
    'activities.boat.desc':      'Tagesausflüge nach Livingston, ins Biotopo Chocón Machacas oder in die Manati-Gebiete von El Golfete. Wir organisieren das Boot, du bringst Sonnencreme.',
    'activities.wildlife.name':  'Natur & Vogelbeobachtung',
    'activities.wildlife.desc':  'Die Lodge grenzt an ein privates Feuchtgebiet. Kahnschnabelreiher, Eisvögel, Brüllaffen um 5 Uhr morgens — ob man will oder nicht. Ferngläser an der Bar.',

    'atmosphere.label': 'Das Haupthaus',
    'atmosphere.title': 'Wo die Abende entstehen.',
    'atmosphere.body1': 'Das Haupthaus ist auf allen Seiten offen. Ein Strohdach, eine Bar mit Quetzal-Bier und Zacapa-Rum und lange Holztische, die um Mitternacht mit Landkarten bedeckt sind. Safari-Möbel, Hängematten auf der Veranda und eine Feuerstelle für Nächte, wenn der Himmel klar genug ist.',
    'atmosphere.body2': 'Wir beschränken uns auf maximal 14 Gäste. Nicht weil wir keine weiteren Bungalows bauen könnten — sondern weil wir es nicht wollen. Die Stille ist Teil von dem, wofür du zahlst.',
    'atmosphere.quote': '„Das Abenteuer beginnt, bevor du eincheckst."',

    'arrival.label':        'Anreise',
    'arrival.title':        '295 km von der Hauptstadt.<br>Eine Welt entfernt.',
    'arrival.step1.title':  'Guatemala City oder Antigua',
    'arrival.step1.desc':   'Die meisten Gäste fliegen nach GUA ein. Antigua ist ein beliebter erster Stop — nur 45 km vom Flughafen entfernt und eine oder zwei Nächte wert.',
    'arrival.step2.title':  'Stadt Río Dulce',
    'arrival.step2.desc':   'Río Dulce liegt ca. 295 km von Guatemala City entfernt — über den gut ausgebauten CA-9 Highway. Direkte Shuttle-Busse fahren täglich von Antigua und der Hauptstadt.',
    'arrival.step3.title':  'Bootsabholung zur Lodge',
    'arrival.step3.desc':   'Wir holen euch per Boot vom Río-Dulce-Dock ab. Die 15-minütige Fahrt durch die Schlucht und in El Golfete hinein ist das Erste, worüber Gäste reden. Schreib uns deine Ankunftszeit — den Rest regeln wir.',
    'arrival.whatsapp':     '📱 Bootsabholung per WhatsApp anfragen',

    'contact.review':   '„Das ist echter Dschungel. Echte Insekten. Echte Flussgeräusche in der Nacht. Wer das liebt, gibt diesem Ort fünf Sterne."',
    'contact.ctalabel': 'Bereit zu buchen oder Fragen?',
    'contact.airbnb':   'Auf Airbnb ansehen',
    'contact.whatsapp': 'WhatsApp schreiben',

    'footer.detail':    'Maximal 14 Gäste · Río Dulce, Guatemala',
    'footer.impressum': 'Impressum',
    'footer.privacy':   'Datenschutz',
    'footer.copy':      '© 2025 Jungle Lodge Río Dulce. Alle Rechte vorbehalten.',
  }
};

/* ─── LANGUAGE SWITCHER ─── */
let currentLang = localStorage.getItem('jl-lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('jl-lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    /* Use innerHTML to support <br> tags */
    el.innerHTML = t[key];
  });

  /* Update toggle button labels */
  const nextLang = lang === 'en' ? 'DE' : 'EN';
  document.getElementById('langLabel').textContent        = nextLang;
  document.getElementById('langLabelMobile').textContent  = nextLang;
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'de' : 'en');
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);
document.getElementById('langToggleMobile').addEventListener('click', toggleLanguage);

/* Apply on load */
applyLanguage(currentLang);


/* ─── STICKY NAV ─── */
const nav = document.getElementById('nav');

const handleNavScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
};
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();


/* ─── HAMBURGER / MOBILE OVERLAY ─── */
const hamburger    = document.getElementById('hamburger');
const navOverlay   = document.getElementById('navOverlay');
const navClose     = document.getElementById('navClose');
const closeTargets = document.querySelectorAll('[data-close]');

const openMenu  = () => { navOverlay.classList.add('open');    document.body.style.overflow = 'hidden'; };
const closeMenu = () => { navOverlay.classList.remove('open'); document.body.style.overflow = '';       };

hamburger.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
closeTargets.forEach(el => el.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });


/* ─── SCROLL ANIMATIONS ─── */
const fadeEls = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in-up'));
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 80);
    observer.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

/* Hero elements trigger immediately */
document.querySelectorAll('.hero .fade-in-up').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 200 + i * 150);
});


/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
