import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Flame, Leaf, HardHat } from "lucide-react";

export const Route = createFileRoute("/propisi")({
  head: () => ({
    meta: [
      { title: "Propisi - ARKS" },
      { name: "description", content: "Pregled zakona, pravilnika, tehničkih propisa i normi iz područja zaštite na radu, zaštite od požara i zaštite okoliša." },
      { property: "og:title", content: "Propisi - ARKS" },
      { property: "og:description", content: "Pregled zakona, pravilnika, tehničkih propisa i normi iz područja zaštite na radu, zaštite od požara i zaštite okoliša." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/propisi" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/propisi" }],
  }),
  component: Page,
});

type Subsection = { title: string; items: string[] };
type Section = { id: string; title: string; icon: typeof BookOpen; subsections: Subsection[] };

const znrLaws = [
  "Zakon o zaštiti na radu (NN 71/14, 118/14, 94/18, 96/18)",
  "Zakon o listi profesionalnih bolesti (NN 48/26)",
  "Zakon o radu (NN 93/14, 127/17, 98/19, 151/22)",
  "Zakon o Državnom inspektoratu (NN 115/18, 117/21)",
];

const znrRegulations = [
  "Pravilnik o zaštiti na radu pri uporabi radne opreme (NN 18/17)",
  "Pravilnik o ispitivanju radnog okoliša (NN 16/16, 120/22)",
  "Pravilnik o pregledu i ispitivanju radne opreme (NN 16/16, 120/22)",
  "Pravilnik o sadržaju i načinu vođenja evidencije o radnicima (NN 73/17)",
  "Pravilnik o sigurnosnim znakovima (NN 91/15, 102/15, 61/16)",
  "Pravilnik o zaštiti radnika od izloženosti opasnim kemikalijama na radu, graničnim vrijednostima izloženosti i biološkim graničnim vrijednostima (NN 91/18, 1/21)",
  "Pravilnik o poslovima na kojima se ne smije zaposliti maloljetnik (NN 89/15, 94/16, 109/19)",
  "Pravilnik o sadržaju, načinu i rokovima zdravstvenog pregleda noćnih radnika (NN 32/15)",
  "Pravilnik o izradi procjene rizika (NN 112/14, 129/19)",
  "Pravilnik o ovlaštenjima za poslove zaštite na radu (NN 58/22)",
  "Pravilnik o obavljanju poslova zaštite na radu (NN 126/19, 154/22)",
  "Pravilnik o osposobljavanju i usavršavanju iz zaštite na radu te polaganju stručnog ispita (NN 142/21)",
  "Pravilnik o pravima, uvjetima i načinu ostvarivanja prava iz obveznog zdravstvenog osiguranja u slučaju ozljede na radu i profesionalne bolesti (NN 75/14, 154/14, 79/15, 139/15, 105/16, 40/17, 66/17, 109/17, 132/17, 119/18, 41/19, 22/20, 39/20, 2/22)",
  "Pravilnik o zaštiti na radu za mjesta rada (NN 105/20)",
  "Pravilnik o sigurnosti i zdravlju pri radu s električnom energijom (NN 88/12)",
  "Pravilnik o poslovima upravljanja i rukovanja energetskim postrojenjima i uređajima (NN 88/14, 20/15)",
  "Pravilnik o poslovima na kojima radnik može raditi samo nakon prethodnog i redovnog utvrđivanja zdravstvene sposobnosti (NN 70/10)",
  "Pravilnik o poslovima na kojima maloljetnik može raditi i o aktivnostima u kojima smije sudjelovati (NN 62/10)",
  "Pravilnik o zaštiti radnika od rizika zbog izloženosti vibracijama na radu (NN 155/08)",
  "Pravilnik o zaštiti radnika od rizika zbog izloženosti azbestu (NN 40/07)",
  "Pravilnik o zaštiti radnika od rizika zbog izloženosti biološkim štetnostima na radu (NN 129/20)",
  "Pravilnik o zaštiti na radu na privremenim gradilištima (NN 48/18)",
  "Pravilnik o zaštiti radnika od izloženosti buci na radu (NN 46/08)",
  "Pravilnik o najmanjim zahtjevima sigurnosti i zaštite zdravlja radnika te tehničkom nadgledanju postrojenja, opreme, instalacija i uređaja u prostorima ugroženim eksplozivnom atmosferom (NN 39/06, 106/07)",
  "Pravilnik o uporabi osobne zaštitne opreme (NN 5/21)",
  "Pravilnik o zaštiti na radu radnika izloženih statodinamičkim, psihofiziološkim i drugim naporima na radu (NN 73/21)",
  "Pravilnik o načinu obavljanja zdravstvenih pregleda osoba pod zdravstvenim nadzorom (NN 116/18)",
  "Pravilnik o zaštiti na radu pri utovaru i istovaru tereta (NN 49/86)",
  "Pravilnik o zaštiti na radu u šumarstvu (NN 10/86)",
  "Pravilnik o poslovima s posebnim uvjetima rada (NN 05/84)",
];

const znrTech = [
  "Pravilnik o sigurnosti strojeva (NN 28/11)",
  "Tehnički propis za sustave zaštite od djelovanja munje na građevinama (NN 87/08, 33/10)",
  "Tehnički propis za niskonaponske električne instalacije (NN 05/10)",
  "Popis hrvatskih normi za osobnu zaštitnu opremu (NN 110/09)",
  "Popis hrvatskih norma za plinske uređaje (NN 141/09)",
  "Popis hrvatskih norma u području sigurnosti strojeva (NN 122/14)",
  "Popis hrvatskih norma u području niskonaponske opreme (NN 17/13)",
];

const zopAll = [
  "Zakon o zaštiti od požara (NN 92/10)",
  "Zakon o vatrogastvu (NN 125/19, 114/22)",
  "Zakon o eksplozivnim tvarima te proizvodnji i prometu oružja (NN 70/17, 141/20, 114/22)",
  "Zakon o zapaljivim tekućinama i plinovima (NN 108/95, 56/10, 114/22)",
  "Zakon o gradnji (NN 153/13, 20/17, 39/19, 125/19)",
  "Zakon o prostornom uređenju (NN 153/13, 65/17, 114/18, 39/19, 98/19)",
  "Pravilnik o planu zaštite od požara (NN 51/12)",
  "Pravilnik o izradi procjene ugroženosti od požara i tehnološke eksplozije (NN 35/94, 110/05, 28/10)",
  "Pravilnik o provjeri ispravnosti stabilnih sustava zaštite od požara (NN 44/12, 98/21, 89/22)",
  "Pravilnik o programu i načinu osposobljavanja pučanstva za provedbu preventivnih mjera zaštite od požara, gašenje požara i spašavanje ljudi i imovine ugroženih požarom (NN 61/94)",
  "Pravilnik o temeljnim zahtjevima za zaštitu od požara elektroenergetskih postrojenja i uređaja (NN 146/05)",
  "Pravilnik o hidrantskoj mreži za gašenje požara (NN 08/06)",
  "Pravilnik o ukapljenom naftnom plinu (NN 117/07)",
  "Pravilnik o zaštiti od požara u skladištima (NN 93/08)",
  "Pravilnik o vatrogasnim aparatima (NN 101/11, 74/13)",
  "Pravilnik o zahvatima u prostoru u kojima nadležno tijelo za zaštitu od požara ne sudjeluje u postupku izdavanja rješenja o uvjetima građenja odnosno lokacijske dozvole (NN 115/11)",
  "Pravilnik o sadržaju općeg akta iz područja zaštite od požara (NN 116/11)",
  "Pravilnik o sadržaju i načinu vođenja evidencija iz područja zaštite od požara (NN 118/11, 141/11)",
  "Pravilnik o tehničkim i drugim uvjetima koje moraju ispunjavati pravne osobe ovlaštene za ocjenu ispravnosti i podobnosti proizvoda za zaštitu od požara (NN 119/11)",
  "Pravilnik o mjerama zaštite od požara kod građenja (NN 141/11)",
  "Pravilnik o minimalnoj osobnoj zaštitnoj i tehničkoj opremi inspektora zaštite od požara (NN 141/11)",
  "Pravilnik o ovlaštenjima za izradu elaborata zaštite od požara (NN 141/11)",
  "Pravilnik o stručnim ispitima u području zaštite od požara (NN 141/11, 82/22)",
  "Pravilnik o razvrstavanju građevina u skupine po zahtijevanosti mjera zaštite od požara (NN 56/12, 61/12)",
  "Pravilnik o zapaljivim tekućinama (NN 53/23)",
];

const zoLaws = [
  "Zakon o gospodarenju otpadom (NN 84/21)",
  "Zakon o zaštiti okoliša (NN 80/13, 153/13, 78/15, 12/18, 118/18, 114/22)",
  "Zakon o zaštiti prirode (NN 80/13, 15/18, 14/19, 127/19)",
  "Zakon o kemikalijama (NN 18/13, 115/18, 37/20)",
  "Zakon o zaštiti zraka (NN 127/19, 57/22)",
  "Zakon o prijevozu opasnih tvari (NN 79/07, 70/17, 39/19, 114/22)",
];

const zoRegulations = [
  "Pravilnik o registru onečišćavanja okoliša (NN 3/22)",
  "Pravilnik o gospodarenju otpadom (NN 106/22)",
  "Uredba o graničnim vrijednostima emisije onečišćujućih tvari u zrak iz nepokretnih izvora (NN 42/21)",
  "Pravilnik o praćenju emisija onečišćujućih tvari u zrak iz nepokretnih izvora (NN 47/21)",
  "Uredba o razinama onečišćujućih tvari u zraku (NN 77/20)",
  "Uredba o sprječavanju velikih nesreća koje uključuju opasne tvari (NN 88/23)",
];

const sections: Section[] = [
  {
    id: "znr",
    title: "Propisi iz područja sigurnosti i zaštite zdravlja na radu",
    icon: HardHat,
    subsections: [
      { title: "Zakoni", items: znrLaws },
      { title: "Pravilnici", items: znrRegulations },
      { title: "Tehnički propisi i norme", items: znrTech },
    ],
  },
  {
    id: "zop",
    title: "Propisi zaštite od požara",
    icon: Flame,
    subsections: [{ title: "Zakoni i pravilnici", items: zopAll }],
  },
  {
    id: "zo",
    title: "Propisi zaštite okoliša",
    icon: Leaf,
    subsections: [
      { title: "Zakoni", items: zoLaws },
      { title: "Pravilnici i uredbe", items: zoRegulations },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Propisi"
        title="Zakonski i tehnički propisi"
        lead="Pregled najvažnijih zakona, pravilnika, tehničkih propisa i normi iz područja zaštite na radu, zaštite od požara i zaštite okoliša. Popis se povremeno ažurira u skladu s izmjenama u Narodnim novinama."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Područja propisa" className="mb-12 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-cream px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:border-brand hover:text-brand"
            >
              <s.icon className="h-4 w-4 text-brand" /> {s.title}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-brand" />
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">{s.title}</h2>
              </div>

              <Accordion
                type="multiple"
                defaultValue={s.subsections.map((_, i) => `${s.id}-${i}`)}
                className="mt-6"
              >
                {s.subsections.map((sub, i) => (
                  <AccordionItem
                    key={sub.title}
                    value={`${s.id}-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-lg tracking-tight hover:no-underline">
                      <span className="flex items-center gap-3">
                        <span className="num text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {sub.title}
                        <span className="text-[11px] font-normal normal-case tracking-normal text-muted-foreground">
                          ({sub.items.length})
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="mt-1 space-y-2">
                        {sub.items.map((item, idx) => (
                          <li
                            key={item}
                            className="grid grid-cols-[2rem_1fr] gap-3 border-b border-dashed border-border py-2.5 text-[14px] leading-relaxed text-foreground/85 last:border-0"
                          >
                            <span className="num pt-0.5 text-[12px] font-semibold text-muted-foreground">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <p className="mt-16 text-[12.5px] leading-relaxed text-muted-foreground">
          Napomena: popis je informativne prirode. Za tumačenje pojedinih odredbi i primjenu na
          konkretnu situaciju obratite se stručnim službama ARKS-a.
        </p>
      </section>
    </>
  );
}
