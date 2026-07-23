import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, FileText, Gauge, Briefcase, Flame } from "lucide-react";

export const Route = createFileRoute("/zastita-od-pozara")({
  head: () => ({
    meta: [
      { title: "Zaštita od požara - ARKS" },
      { name: "description", content: "Izrada planova i procjena zaštite od požara, pregledi i ispitivanja protupožarnih sustava, osposobljavanja i stručni poslovi ovlaštenika ZOP-a." },
      { property: "og:title", content: "Zaštita od požara - ARKS" },
      { property: "og:description", content: "Izrada planova i procjena zaštite od požara, pregledi i ispitivanja protupožarnih sustava, osposobljavanja i stručni poslovi ovlaštenika ZOP-a." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/zastita-od-pozara" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/zastita-od-pozara" }],
  }),
  component: Page,
});

type Subsection = { title: string; icon: typeof GraduationCap; items: { title: string; ref?: string }[] };

const subsections: Subsection[] = [
  {
    title: "Osposobljavanja",
    icon: GraduationCap,
    items: [
      { title: "Osposobljavanje radnika iz zaštite od požara", ref: "Zakon o zaštiti od požara (NN 92/10); Pravilnik o programu i načinu osposobljavanja pučanstva (NN 61/94)" },
    ],
  },
  {
    title: "Dokumentacija i procjene",
    icon: FileText,
    items: [
      { title: "Izrada Pravilnika zaštite od požara", ref: "čl. 21. Zakona o zaštiti od požara (NN 92/10); Pravilnik NN 116/11" },
      { title: "Izrada Plana evakuacije i spašavanja (tekstualni i grafički dio)", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Organizacija i provođenje vježbe evakuacije i spašavanja", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Procjena ugroženosti od požara i revizija (svakih 5 godina)", ref: "čl. 13. st. 5. Zakona o zaštiti od požara; Pravilnik NN 35/94, 110/05, 28/10" },
      { title: "Izrada plana zaštite od požara", ref: "čl. 13. st. 5. Zakona o zaštiti od požara; Pravilnik NN 51/12" },
    ],
  },
  {
    title: "Ispitivanja i pregledi",
    icon: Gauge,
    items: [
      { title: "Ispitivanje električnih instalacija", ref: "Tehnički propis NN 5/10; čl. 38. Zakona o ZOP-u" },
      { title: "Ispitivanje i mjerenje sustava zaštite od djelovanja munje na građevinama", ref: "Tehnički propis (NN 87/08, 33/10)" },
      { title: "Vizualni pregled sustava zaštite od djelovanja munje na građevinama", ref: "Tehnički propis (NN 87/08, 33/10)" },
      { title: "Ispitivanje sigurnosne / protupanične rasvjete", ref: "čl. 40. Zakona o ZOP-u" },
      { title: "Ispitivanje funkcionalnosti uređaja (tipkala) za daljinsko isključivanje napajanja", ref: "čl. 40. Zakona o ZOP-u" },
      { title: "Ispitivanje elektromagnetnih ventila", ref: "čl. 38. Zakona o ZOP-u" },
      { title: "Pregled i ispitivanje hidrantske mreže", ref: "Pravilnik o hidrantskoj mreži (NN 8/06); Pravilnik NN 44/12" },
      { title: "Pregled i ispitivanje vatrodojavnog sustava", ref: "Pravilnik NN 44/12" },
      { title: "Pregled i ispitivanje sustava plinodetekcije", ref: "Pravilnik NN 44/12" },
      { title: "Pregled i ispitivanje sustava za odvođenje dima i topline", ref: "Zakon o zaštiti od požara (NN 92/10)" },
      { title: "Ispitivanje protupožarnih zaklopki", ref: "Zakon o zaštiti od požara (NN 92/10)" },
      { title: "Ispitivanje ispravnosti i nepropusnosti plinskih instalacija", ref: "čl. 9. st. 3. Zakona o zapaljivim tekućinama i plinovima (NN 108/95, 56/10)" },
      { title: "Pregled i ispitivanje sprinkler i drenčer sustava", ref: "Pravilnik NN 44/12" },
      { title: "Pregled i ispitivanje instalacija za odvođenje statičkog elektriciteta", ref: "Pravilnik (Sl. list 62/73)" },
    ],
  },
  {
    title: "Stručni poslovi",
    icon: Briefcase,
    items: [
      { title: "Poslovi ovlaštenika zaštite od požara (Ugovor)", ref: "Zakon o zaštiti od požara (NN 92/10)" },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Djelatnost"
        title="Zaštita od požara"
        lead="Podrška u izradi propisane dokumentacije, provođenju mjera ZOP-a te pregledi i ispitivanja protupožarnih sustava u poslovnim objektima."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Flame className="h-5 w-5 text-brand" />
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Usluge iz područja zaštite od požara</h2>
        </div>

        <Accordion
          type="multiple"
          defaultValue={subsections.map((_, i) => `zop-${i}`)}
          className="mt-6"
        >
          {subsections.map((sub, i) => (
            <AccordionItem key={sub.title} value={`zop-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg tracking-tight hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="num text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <sub.icon className="h-4 w-4 text-brand" />
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
                      key={item.title}
                      className="grid grid-cols-[2rem_1fr] gap-3 border-b border-dashed border-border py-2.5 text-[14px] leading-relaxed text-foreground/85 last:border-0"
                    >
                      <span className="num pt-0.5 text-[12px] font-semibold text-muted-foreground">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="text-foreground">{item.title}</span>
                        {item.ref && (
                          <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{item.ref}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 rounded-sm border border-border bg-cream p-6">
          <p className="text-[14px] leading-relaxed text-foreground/80">
            Za ispitivanje ispravnosti i nepropusnosti plinskih instalacija pogledajte i posebnu djelatnost:{" "}
            <Link to="/ispitivanje-plinskih-instalacija" className="font-semibold text-brand hover:underline">
              Ispitivanje plinskih instalacija
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/kontakt" className="inline-flex items-center rounded-sm bg-safety px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-safety-foreground hover:opacity-90">
            Zatražite ponudu
          </Link>
          <a href="tel:+38531275257" className="inline-flex items-center rounded-sm border border-border bg-background px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-secondary">
            Nazovite nas
          </a>
        </div>
      </section>
    </>
  );
}
