import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Gauge, Phone, ShieldCheck, FileCheck2, Wrench, Mail, User } from "lucide-react";

export const Route = createFileRoute("/ispitivanje-plinskih-instalacija")({
  head: () => ({
    meta: [
      { title: "Ispitivanje plinskih instalacija - ARKS" },
      { name: "description", content: "ARKS je ovlašteni ispitivač ispravnosti i nepropusnosti plinskih instalacija na distribucijskom području HEP-PLIN-a d.o.o." },
      { property: "og:title", content: "Ispitivanje plinskih instalacija - ARKS" },
      { property: "og:description", content: "ARKS je ovlašteni ispitivač ispravnosti i nepropusnosti plinskih instalacija na distribucijskom području HEP-PLIN-a d.o.o." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/ispitivanje-plinskih-instalacija" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/ispitivanje-plinskih-instalacija" }],
  }),
  component: Page,
});

const features = [
  { icon: ShieldCheck, title: "Ovlašteni ispitivač", desc: "Ovlaštenje za ispitivanje ispravnosti i nepropusnosti plinskih instalacija na distribucijskom području HEP-PLIN-a d.o.o." },
  { icon: Gauge, title: "Stručne razine I. – IV.", desc: "Provodimo ispitivanja na svim razinama složenosti plinskih instalacija - od jednostavnih do najsloženijih sustava." },
  { icon: FileCheck2, title: "Propisana dokumentacija", desc: "Izdajemo zapisnike i potvrde o ispravnosti i nepropusnosti sukladno važećim tehničkim propisima i normama." },
  { icon: Wrench, title: "Terenski rad", desc: "Ispitivanja izvodimo na lokaciji objekta, uz koordinaciju s izvođačem radova i distributerom plina." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Posebna djelatnost"
        title="Ispitivanje nepropusnosti plinskih instalacija"
        lead="Agencija za razvoj i kontrolu sigurnosti d.o.o. je ovlašteni ispitivač ispravnosti i nepropusnosti plinskih instalacija na distribucijskom području HEP-PLIN-a d.o.o. stručne razine I., II., III. i IV."
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Vrsta ispitivanja</p>
          <h2 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
            Tlačna proba i ispitivanje nepropusnosti plinskih instalacija
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Tlačna proba plinske instalacije",
              "Ispitivanje nepropusnosti plinskih instalacija",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-sm border border-border bg-background p-4 text-[15px] leading-snug text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-safety" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">O usluzi</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Sigurnost plinskih instalacija - stručno i u skladu s propisima.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/70">
              Ispitivanje ispravnosti i nepropusnosti plinskih instalacija obavljamo sukladno
              čl. 9. st. 3. Zakona o zapaljivim tekućinama i plinovima (NN 108/95, 56/10) te
              pripadajućim tehničkim propisima.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
              Usluga je namijenjena investitorima, izvođačima radova i vlasnicima poslovnih te
              stambenih objekata na distribucijskom području HEP-PLIN-a d.o.o.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {features.map((f, i) => (
                <div key={f.title} className="flex flex-col bg-background p-7">
                  <div className="flex items-center justify-between">
                    <span className="num text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <f.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="mt-5 font-display text-lg leading-tight tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground/70">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Što obuhvaća</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight">Opseg ispitivanja</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Ispitivanje ispravnosti novih plinskih instalacija",
              "Ispitivanje nepropusnosti plinskih instalacija",
              "Redovna i izvanredna kontrolna ispitivanja",
              "Ispitivanja nakon rekonstrukcije ili proširenja",
              "Izdavanje zapisnika i potvrda o ispitivanju",
              "Konzultacije s izvođačima i distributerom plina",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2.5 rounded-sm border border-border bg-background p-4 text-[14px] leading-snug text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Ovlašteni ispitivač</p>
          <h2 className="mt-4 text-center font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
            Kontakt osoba za ispitivanje plinskih instalacija
          </h2>

          <div className="mt-8 rounded-sm border border-border bg-cream p-8 sm:p-10">
            <div className="text-center">
              <p className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">Mario A. Benc</p>
              <p className="mx-auto mt-2 max-w-lg text-[14px] text-foreground/70">
                Stručne razine I., II., III. i IV. - distribucijsko područje HEP-PLIN-a d.o.o.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 border-t border-border pt-6 sm:flex-row sm:justify-center">
              <a
                href="tel:+385986666936"
                className="inline-flex items-center gap-2 font-display text-lg tracking-tight text-foreground hover:text-brand"
              >
                <Phone className="h-5 w-5 text-brand" /> +385 98 666 6936
              </a>
              <span className="hidden text-muted-foreground sm:inline">|</span>
              <a
                href="mailto:mario.benc@arks.hr"
                className="inline-flex items-center gap-2 font-display text-lg tracking-tight text-foreground hover:text-brand"
              >
                <Mail className="h-5 w-5 text-brand" /> mario.benc@arks.hr
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:mario.benc@arks.hr"
                className="inline-flex items-center gap-2 rounded-sm bg-safety px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-safety-foreground hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Pošaljite upit
              </a>
              <a
                href="tel:+385986666936"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Nazovite Marija
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-deep/40 bg-brand-deep text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Zatražite ponudu</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl">
              Trebate ispitivanje plinskih instalacija?
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/80">
              Javite nam se s osnovnim podacima o objektu i vrsti instalacije - dostavit ćemo
              ponudu i dogovoriti termin izlaska na teren.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-sm bg-safety px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-safety-foreground hover:opacity-90"
            >
              Zatražite ponudu
            </Link>
            <a
              href="tel:+38531275257"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-transparent px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Nazovite nas
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
