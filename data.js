export const rawSections = [
  {
    label: "Interstellar Proxies",
    tags: ["Interstellar"],
    urls: [
      "https://ralphskipsmorningworkouts.opticalize.com/",
      "https://kleep.paulopedron.com/",
      "https://no.more.ck.express.for.now.azimei.cn/",
      "https://quick-spanish-lessons.knr.cl/",
      "https://quick-math-lessons.knr.cl/",
      "https://1-q-a-z-z-a-q-1-2-w-s-x-x-s-w-2.suaf.com.ve/",
      "https://icl-linewize-pmo.cinedemedianoche.cl/",
      "https://mathedu.loskks.org/",
      "https://aadm.polishmc.pl/",
      "https://ip-designers.ienai.co.uk/",
      "https://frogware.inoxferro.com/",
      "https://dealership.cheap-car-rental.com/",
      "https://honeybunel.gafton.eu/",
      "https://locations.earlyriserscoffeeshop.com/",
      "https://permits.potomacriversafetycommittee.org/",
      "https://ty-dangasa.esgemsedu.mx/",
      "https://mathhelpat.conexioncircular.cl/",
      "https://educationalebooksforfriendsandfamilywithschools-nationwide.potomacriversafetycommittee.org/",
      "https://gothasians.medscience.cl/",
      "https://www.khajujawegifwqaiugwa.tcp64.de/",
      "https://143.theartieschaffer.com/"
    ]
  },
  { label: "Utopia Proxies", tags: ["Utopia"], urls: [
      "https://hgkfkamidawaa.ddo.jp/",
      "https://hgkf01001noukami.ddo.jp/",
      "https://see.the.localchurch.co.za/",
      "https://whoputthelinkinbasketballslides.rossco.uk/"
  ]},
  { label: "Shadow Proxies", tags: ["Shadow"], urls: [
      "https://diy.vaporsnail.com/",
      "https://vingydoodle.my-ip6.de/"
  ]},
  { label: "Space Proxies", tags: ["Space"], urls: [
      "https://support.helping-hands.site/",
      "https://info.faizinternational.com.np/",
      "https://info.miceforlife.com/",
      "https://edu.info.north-kazakhstan.su/",
      "https://app.edu.iownyour.org/",
      "https://portal.sso.toythieves.com/",
      "https://member.electricpiano.xyz/",
      "https://use.bsfa.info/",
      "https://dash.moldeo.org/",
      "https://use.gurdit.com/",
      "https://amplifyz.cfd/",
      "https://search.agmlabs.com/",
      "https://dumb.frtala.sk/",
      "https://love.fugyou.com/",
      "https://bruh.j82.org/",
      "https://nice.noviolencia.ar/",
      "https://cool.symtek.cl/",
      "https://guh.uniall.tk/",
      "https://zuh.ndr.cl/",
      "https://luh.masgas.cl/",
      "https://suh.casucha.cl/",
      "https://cuh.altimiras.cl/",
      "https://prr.toma.cl/",
      "https://grr.smel.ls/",
      "https://srr.rhiz0.me/",
      "https://nrr.ne1.co/",
      "https://brr.cbase.ar/",
      "https://uh.ti-brin.com/",
      "https://smuh.ledsolarbarak.cl/",
      "https://twah.imdb.gq/",
      "https://fruh.h0rst.us/",
      "https://druh.blinklab.com/",
      "https://bruzz.relaxingco.cl/",
      "https://cluzz.prert.cl/",
      "https://huzz.ne1.co/",
      "https://muzz.ds6.pw/",
      "https://truzz.aszx.ru/",
      "https://ruff.svennis.ro/",
      "https://oogabooga.sh8.no/",
      "https://cockaldoodoo.puntobicycle.cl/",
      "https://meow.pits.cl/",
      "https://ringaringa.charbel.cl/",
      "https://buy.wine-software.com/"
  ]},
  { label: "DayDream X Proxies", tags: ["DayDream X"], urls: [
      "https://blog.electricpiano.xyz/",
      "https://donate.helping-hands.site/",
      "https://app.moldeo.org/",
      "https://edu.bsfa.info/",
      "https://edu.prostitutki-na-vyezd.com/",
      "https://app.tollgatevillagetn.com/",
      "https://study.info.north-kazakhstan.su/",
      "https://use.edu.iownyour.org/",
      "https://home.sso.toythieves.com/",
      "https://study.ajhurst.org/",
      "https://night.amplifyz.cfd/",
      "https://edu.gurdit.com/"
  ]},
  { label: "Lightspeed", tags: ["Lightspeed"], notes: {
      "https://app.edu.iownyour.org/": "⚠ stricter districts may block",
      "https://portal.sso.toythieves.com/": "⚠ stricter districts may block"
    },
    urls: [
      "https://amplifyz.cfd/",
      "https://member.electricpiano.xyz/",
      "https://buy.wine-software.com/",
      "https://search.agmlabs.com/",
      "https://app.edu.iownyour.org/",
      "https://portal.sso.toythieves.com/"
  ]},
  { label: "GoGuardian & Iboss (Space)", tags: ["GoGuardian & Iboss", "Space"], urls: [
      "https://dash.moldeo.org/",
      "https://use.bsfa.info/",
      "https://use.gurdit.com/"
  ]},
  { label: "GoGuardian & Iboss (DayDreamX)", tags: ["GoGuardian & Iboss", "DayDream X"], urls: [
      "https://app.moldeo.org/",
      "https://edu.bsfa.info/",
      "https://edu.gurdit.com/"
  ]},
  { label: "Linewize (Space)", tags: ["Linewize", "Space"], urls: [
      "https://use.bsfa.info/",
      "https://dash.moldeo.org/"
  ]},
  { label: "Linewize (DayDreamX)", tags: ["Linewize", "DayDream X"], urls: [
      "https://edu.bsfa.info/",
      "https://app.moldeo.org/"
  ]}
];

/**
 * Build a deduped list of links with merged categories and notes.
 * Each entry: { url, categories: string[], notes?: string[] }
 */
export function buildLinks() {
  const map = new Map();
  for (const section of rawSections) {
    for (const url of section.urls) {
      const key = url.trim();
      const existing = map.get(key) || { url: key, categories: new Set(), notes: new Set() };
      (section.tags || []).forEach(t => existing.categories.add(t));
      const n = section.notes?.[key];
      if (n) existing.notes.add(n);
      map.set(key, existing);
    }
  }
  // normalize to arrays and add a readable hostname label
  return Array.from(map.values()).map(e => ({
    url: e.url,
    host: e.url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    categories: Array.from(e.categories).sort(),
    notes: Array.from(e.notes)
  })).sort((a, b) => a.host.localeCompare(b.host));
}

