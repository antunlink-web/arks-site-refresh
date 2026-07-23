import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Leaf } from "lucide-react";

export const Route = createFileRoute("/zastita-okolisa")({
  head: () => ({
    meta: [
      { title: "Zaštita okoliša - ARKS" },
      { name: "description", content: "Izrada elaborata zaštite okoliša, operativni planovi, registar onečišćavanja okoliša i snimanje bespilotnom letjelicom (dronom)." },
      { property: "og:title", content: "Zaštita okoliša - ARKS" },
      { property: "og:description", content: "Izrada elaborata zaštite okoliša, operativni planovi, registar onečišćavanja okoliša i snimanje bespilotnom letjelicom (dronom)." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/zastita-okolisa" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/zastita-okolisa" }],
  }),
  component: Page,
});

type Subsection = { title: string; icon: typeof FileText; items: { title: string; ref?: string }[] };

const subsections: Subsection[] = [
  {
    title: "Dokumentacija i stručni poslovi",
    icon: FileText,
    items: [
      { title: "Izrada operativnog plana interventnih mjera u slučaju izvanrednog i iznenadnog onečišćenja voda" },
      { title: "Izrada elaborata zaštite okoliša" },
      { title: "Ispunjavanje obrazaca za registar onečišćavanja okoliša", ref: "Pravilnik o registru onečišćavanja okoliša (NN 3/22)" },
      { title: "Snimanje bespilotnom letjelicom (dronom)" },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Djelatnost"
        title="Zaštita okoliša"
        lead="Savjetujemo i pomažemo klijentima u ispunjavanju obveza iz područja zaštite okoliša."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Leaf className="h-5 w-5 text-brand" />
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Usluge iz područja zaštite okoliša</h2>
        </div>

        <Accordion
          type="multiple"
          defaultValue={subsections.map((_, i) => `zo-${i}`)}
          className="mt-6"
        >
          {subsections.map((sub, i) => (
            <AccordionItem key={sub.title} value={`zo-${i}`} className="border-border">
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
