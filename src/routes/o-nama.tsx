import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama — ARKS d.o.o." },
      { name: "description", content: "Agencija za razvoj i kontrolu sigurnosti d.o.o. — tvrtka specijalizirana za zaštitu na radu, zaštitu od požara i zaštitu okoliša." },
      { property: "og:title", content: "O nama — ARKS d.o.o." },
      { property: "og:description", content: "Saznajte više o tvrtki ARKS d.o.o. i području našeg djelovanja." },
      { property: "og:url", content: "/o-nama" },
    ],
    links: [{ rel: "canonical", href: "/o-nama" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="O nama"
        title="Agencija za razvoj i kontrolu sigurnosti d.o.o."
        lead="Tvrtka sa sjedištem u Tenji kraj Osijeka, specijalizirana za područja zaštite na radu, zaštite od požara i zaštite okoliša."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            ARKS d.o.o. pruža stručnu podršku tvrtkama i ustanovama u ispunjavanju
            zakonskih obveza iz područja sigurnosti i zaštite. Cilj nam je da naši
            klijenti posluju sigurno, usklađeno s propisima i bez nepotrebnih
            administrativnih opterećenja.
          </p>
          <p>
            Naš pristup temelji se na praktičnim rješenjima, jasnoj komunikaciji i
            dugoročnoj suradnji s klijentima različitih djelatnosti i veličina.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-slate-surface p-6">
          <h2 className="text-lg font-bold">Područja djelovanja</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {["Zaštita na radu", "Zaštita od požara", "Zaštita okoliša", "Savjetovanje i dokumentacija"].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="h-4 w-4 text-safety" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Link
            to="/kontakt"
            className="inline-flex items-center rounded-md bg-safety px-5 py-3 text-sm font-semibold text-safety-foreground hover:opacity-90"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  ),
});
