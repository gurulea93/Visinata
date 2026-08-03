export const WHATSAPP_URL = 'https://wa.me/373060742224'
export const WHATSAPP_LABEL = 'Comandă pe WhatsApp'

export const SOCIAL = {
  instagram: 'https://www.instagram.com/era_odata_md',
  facebook: 'https://www.facebook.com/profile.php?id=61566851765049',
  tiktok: 'https://www.tiktok.com/@eraodata.md',
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
    name: 'Era odată Vișinată',
    subtitle: 'Licoare de vișină',
    alcohol: '24% vol.',
    volume: '0,5 L',
    image: '/img/Visina.png',
    scene: MEDIA.festiveTilt,
    accent: 'ruby' as const,
    notes: 'Vișină coaptă · sâmbure de migdală · vanilie',
    description:
      'Rețeta vișinatei noastre începe într-un sat din Moldova, unde livezile de vișin umpleau aerul cu arome dulci. După deportarea în Siberia, familia a păstrat vie dorința de a-și continua tradițiile, și, bineînțeles, rețeta acestei băuturi. Transmisă din generație în generație, rețeta se bazează pe două ingrediente secrete, transformând fiecare înghițitură într-un elixir al amintirilor. Astăzi, fiecare sticlă este o punte între generații, un simbol al rezistenței și al dragostei față de rădăcini.',
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
      'Rețeta noastră își are rădăcinile într-un sat din Moldova, unde zmeura din grădină dăruia arome dulci și parfumate. De-a lungul timpului, familia noastră a păstrat cu grijă dorința de a-și perpetua tradițiile și, desigur, rețeta acestei băuturi deosebite. Transmisă cu grijă din generație în generație, această băutură artizanală transformă fiecare înghițitură într-un elixir al amintirilor și al dragostei pentru tradiții.',
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
      'Rețeta licorii noastre se împletește cu magia unei tradiții vechi, îmbogățită de farmecul fructelor exotice. Însă aceasta a păstrat cu strictețe acele ingrediente secrete, transformând fiecare înghițitură într-un elixir al plăcerii supreme.',
  },
] as const
