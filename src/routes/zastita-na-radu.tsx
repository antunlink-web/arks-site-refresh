import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, FileText, Gauge, Briefcase, HardHat } from "lucide-react";

export const Route = createFileRoute("/zastita-na-radu")({
  head: () => ({
    meta: [
      { title: "Zaštita na radu - ARKS" },
      { name: "description", content: "Stručna podrška za zaštitu na radu: osposobljavanja, procjene rizika, propisana dokumentacija, ispitivanja i stručni poslovi." },
      { property: "og:title", content: "Zaštita na radu - ARKS" },
      { property: "og:description", content: "Stručna podrška za zaštitu na radu: osposobljavanja, procjene rizika, propisana dokumentacija, ispitivanja i stručni poslovi." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/zastita-na-radu" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/zastita-na-radu" }],
  }),
  component: Page,
});

type Subsection = { title: string; icon: typeof GraduationCap; items: { title: string; ref?: string }[] };

const subsections: Subsection[] = [
  {
    title: "Osposobljavanja",
    icon: GraduationCap,
    items: [
      { title: "Osposobljavanje radnika za rad na siguran način", ref: "čl. 27. Zakona o zaštiti na radu (NN 71/14, 118/14, 94/18, 96/18)" },
      { title: "Osposobljavanje radnika za rad na siguran način kod rada s računalom", ref: "čl. 27. Zakona o zaštiti na radu; Pravilnik NN 73/21" },
      { title: "Osposobljavanje poslodavca iz zaštite na radu", ref: "čl. 29. Zakona o zaštiti na radu" },
      { title: "Osposobljavanje ovlaštenika poslodavca / povjerenika radnika iz zaštite na radu", ref: "čl. 29. Zakona o zaštiti na radu" },
      { title: "Osposobljavanje radnika za provođenje evakuacije i spašavanja", ref: "čl. 55. Zakona o zaštiti na radu" },
    ],
  },
  {
    title: "Dokumentacija i procjene",
    icon: FileText,
    items: [
      { title: "Izrada Procjene rizika", ref: "čl. 18. Zakona o zaštiti na radu" },
      { title: "Izrada Pravilnika zaštite na radu", ref: "čl. 19. Zakona o zaštiti na radu (NN 71/14)" },
      { title: "Izrada Plana evakuacije i spašavanja (tekstualni i grafički dio)", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Organizacija i provođenje vježbe evakuacije i spašavanja", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Izrada plana izvođenja radova" },
    ],
  },
  {
    title: "Ispitivanja",
    icon: Gauge,
    items: [
      { title: "Ispitivanje električnih instalacija", ref: "Tehnički propis za niskonaponske električne instalacije (NN 5/10)" },
      { title: "Ispitivanje i mjerenje sustava zaštite od djelovanja munje na građevinama", ref: "Tehnički propis (NN 87/08, 33/10)" },
      { title: "Vizualni pregled sustava zaštite od djelovanja munje na građevinama", ref: "Tehnički propis (NN 87/08, 33/10)" },
      { title: "Ispitivanje sigurnosne / protupanične rasvjete", ref: "Tehnički propis (NN 5/10)" },
      { title: "Ispitivanje radne opreme (viličari, dizalice, samohodni radni strojevi)", ref: "čl. 42. Zakona o zaštiti na radu" },
      { title: "Ispitivanje učinkovitosti ventilacije", ref: "čl. 45. Zakona o zaštiti na radu" },
      { title: "Ispitivanje ventilacije u prostorima za pušenje", ref: "čl. 45. Zakona o zaštiti na radu" },
      { title: "Ispitivanje radnog okoliša (mikroklima, buka, osvijetljenost)", ref: "Pravilnik NN 29/13" },
      { title: "Ispitivanje ispravnosti i nepropusnosti plinskih instalacija", ref: "čl. 9. st. 3. Zakona o zapaljivim tekućinama i plinovima (NN 108/95, 56/10)" },
    ],
  },
  {
    title: "Stručni poslovi",
    icon: Briefcase,
    items: [
      { title: "Usluge koordinatora za zaštitu na radu prilikom izvođenja radova", ref: "čl. 73. Zakona o zaštiti na radu (NN 71/14)" },
      { title: "Poslovi stručnjaka zaštite na radu (Ugovor)", ref: "čl. 82. Zakona o zaštiti na radu (NN 71/14)" },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Djelatnost"
        title="Zaštita na radu"
        lead="Pomažemo poslodavcima uspostaviti i održavati sustav zaštite na radu u skladu s važećim propisima - osposobljavanja, dokumentacija, ispitivanja i stručni poslovi."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <HardHat className="h-5 w-5 text-brand" />
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Usluge iz područja zaštite na radu</h2>
        </div>

        <Accordion
          type="multiple"
          defaultValue={subsections.map((_, i) => `znr-${i}`)}
          className="mt-6"
        >
          {subsections.map((sub, i) => (
            <AccordionItem key={sub.title} value={`znr-${i}`} className="border-border">
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

        <div className="mt-12 flex flex-wrap gap-3">
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
