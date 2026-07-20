import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, HardHat } from "lucide-react";

export const Route = createFileRoute("/zastita-na-radu")({
  head: () => ({
    meta: [
      { title: "Zaštita na radu — ARKS d.o.o." },
      { name: "description", content: "Usluge zaštite na radu: procjena rizika, osposobljavanje radnika i izrada propisane dokumentacije." },
      { property: "og:title", content: "Zaštita na radu — ARKS d.o.o." },
      { property: "og:description", content: "Procjena rizika, osposobljavanje i dokumentacija iz područja ZNR." },
      { property: "og:url", content: "/zastita-na-radu" },
    ],
    links: [{ rel: "canonical", href: "/zastita-na-radu" }],
  }),
  component: () => (
    <ServicePage
      icon={<HardHat className="h-6 w-6" />}
      eyebrow="Usluga"
      title="Zaštita na radu"
      lead="Pomažemo poslodavcima da uspostave i održavaju sustav zaštite na radu u skladu s važećim propisima."
      points={[
        "Procjena rizika na radnim mjestima",
        "Izrada propisane dokumentacije iz područja ZNR",
        "Osposobljavanje radnika za rad na siguran način",
        "Osposobljavanje poslodavaca i ovlaštenika",
        "Vođenje evidencija iz područja zaštite na radu",
        "Stručno savjetovanje i podrška na terenu",
      ]}
    />
  ),
});

export function ServicePage({
  icon, eyebrow, title, lead, points,
}: { icon: React.ReactNode; eyebrow: string; title: string; lead: string; points: string[] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand/10 text-brand">{icon}</span>
          <h2 className="text-xl font-bold">Što nudimo</h2>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4 text-[13.5px] leading-snug text-foreground/85">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
              <span className="whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap">{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-xl border border-border bg-slate-surface p-6">
          <p className="text-sm text-foreground/85">
            Trebate ponudu prilagođenu vašoj djelatnosti? Javite nam se s kratkim opisom potreba — predložit ćemo konkretne korake.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/kontakt" className="inline-flex items-center rounded-md bg-safety px-5 py-3 text-sm font-semibold text-safety-foreground hover:opacity-90">
              Zatražite ponudu
            </Link>
            <a href="tel:+38531275257" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
              Nazovite nas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
