export const WHATSAPP_URL = 'https://wa.me/373060742224'
export const WHATSAPP_LABEL = 'Comandă pe WhatsApp'

export const SOCIAL = {
  instagram: 'https://www.instagram.com/afostodata.md/',
  facebook: 'https://www.facebook.com/profile.php?id=61566851765049',
  tiktok: 'https://www.tiktok.com/@afostodata.md?_t=8rQLWZtFGBr&_r=1',
} as const

export const AGE_GATE_KEY = 'afostodata-age-ok'

export const LEGACY = {
  scriptLogo: '/img/legacy/albfont.png',
  scriptLogoAlt: '/img/legacy/afost2.png',
} as const

export const MEDIA = {
  harvest: '/img/story-bunicul.jpg',
  orchardWide: '/img/story-bunicul-2.jpg',
  orchardPath: '/img/story-portrait.jpg',
  festiveStill: '/img/gallery-1.jpg',
  festiveHands: '/img/gallery-2.jpg',
  festiveTilt: '/img/gallery-3.jpg',
} as const

export const GALLERY = [
  {
    src: MEDIA.festiveStill,
    alt: 'Vișinată A fost odată… într-un cadru festiv',
    title: 'Serile de sărbătoare',
    text: 'Un pahar mic, o poveste lungă. Licoarea care deschide amintirile la masa de sărbătoare.',
  },
  {
    src: MEDIA.festiveHands,
    alt: 'Sticlă de vișinată ținută în mâini — produs artizanal',
    title: 'Făcut de mână',
    text: 'Fiecare sticlă trece prin mâinile noastre: culesul, macerarea, îmbutelierea, eticheta.',
  },
  {
    src: MEDIA.harvest,
    alt: 'Culesul din livadă — începutul poveștii',
    title: 'Culesul din livadă',
    text: 'Vișine, zmeură și portocale — culese la coacere deplină, în zilele potrivite.',
  },
] as const

export const PRODUCTS = [
  {
    id: 'visina',
    name: 'Vișinată',
    subtitle: 'Licoare de vișină',
    alcohol: '24% vol.',
    volume: '0,5 L',
    image: '/img/Visina.png',
    scene: MEDIA.festiveTilt,
    accent: 'ruby' as const,
    notes: 'Vișină coaptă · sâmbure de migdală · vanilie',
    description:
      'O selecție dintre cele mai bune soiuri de vișină, macerate cu răbdare și atenție la fiecare detaliu. Un gust rotund, cu dulceață măsurată și acel final ușor amărui de sâmbure care o face de neconfundat — exact ca licoarea de altădată, din cămara bunicilor.',
  },
  {
    id: 'zmeura',
    name: 'Povești cu Zmeu',
    subtitle: 'Licoare de zmeură',
    alcohol: '20% vol.',
    volume: '0,5 L',
    image: '/img/Zmeura.png',
    scene: MEDIA.orchardPath,
    accent: 'forest' as const,
    notes: 'Zmeură proaspătă · flori de câmp · miere',
    description:
      'Zmeură culeasă la coacere deplină, transformată într-o licoare jucăușă și parfumată. Mai lejeră decât sora ei, vișinata, cu o aromă limpede de fruct proaspăt — pentru poveștile care se spun seara, până se face târziu.',
  },
  {
    id: 'portocala',
    name: 'Ala Bala Portocala',
    subtitle: 'Licoare de portocală',
    alcohol: '20% vol.',
    volume: '0,5 L',
    image: '/img/Portocala.png',
    scene: MEDIA.orchardWide,
    accent: 'citrus' as const,
    notes: 'Portocală coaptă · coajă uscată · soare moldovenesc',
    description:
      'Ca în cântecul din copilărie — Ala bala portocala — dar în pahar: portocale macerate în răbdare, cu dulceață solară și o notă amară de coajă care trezește pofta. O licoare jucăușă, caldă, perfectă pentru toasturi, deserturi și serile care cer un strop de lumină.',
  },
] as const
