import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HardHat,
  Flame,
  Leaf,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  FileCheck2,
  Handshake,
  MessageSquare,
  Scale,
  Phone,
  Mail,
} from "lucide-react";
import heroImg from "@/assets/hero-safety.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARKS d.o.o. — Zaštita na radu, požara i okoliša | Osijek" },
      { name: "description", content: "Stručna podrška za zaštitu na radu, zaštitu od požara i zaštitu okoliša. Procjena rizika, dokumentacija, izobrazba i ispunjavanje zakonskih obveza." },
      { property: "og:title", content: "ARKS d.o.o. — Zaštita na radu, požara i okoliša" },
      { property: "og:description", content: "Pomažemo tvrtkama u sigurnijem poslovanju i ispunjavanju zakonskih obveza." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: HardHat,
    title: "Zaštita na radu",
    desc: "Procjena rizika, osposobljavanje radnika i izrada dokumentacije propisane zakonom.",
    to: "/zastita-na-radu",
  },
  {
    icon: Flame,
    title: "Zaštita od požara",
    desc: "Planovi zaštite od požara, izobrazba pučanstva i pregled mjera u poslovnim objektima.",
    to: "/zastita-od-pozara",
  },
  {
    icon: Leaf,
    title: "Zaštita okoliša",
    desc: "Savjetovanje, vođenje propisanih evidencija i podrška u ispunjavanju ekoloških obveza.",
    to: "/zastita-okolisa",
  },
] as const;

const help = [
  { icon: FileCheck2, title: "Zakonska usklađenost", desc: "Pratimo propise i pomažemo da poslovanje bude usklađeno s važećim zakonima." },
  { icon: ClipboardCheck, title: "Dokumentacija i evidencije", desc: "Izrada i održavanje propisane dokumentacije iz područja sigurnosti i zaštite." },
  { icon: GraduationCap, title: "Izobrazba i osposobljavanje", desc: "Osposobljavanje radnika za rad na siguran način i postupanje u slučaju opasnosti." },
  { icon: ClipboardCheck, title: "Pregledi i kontrole", desc: "Stručni pregledi, procjene rizika i savjetovanje na terenu." },
];

const why = [
  { icon: Scale, title: "Iskustvo u sigurnosti i zaštiti", desc: "Dugogodišnji rad s tvrtkama različitih veličina i djelatnosti." },
  { icon: Handshake, title: "Individualan pristup", desc: "Rješenja prilagođena specifičnostima i potrebama svakog klijenta." },
  { icon: MessageSquare, title: "Jasna komunikacija", desc: "Praktični savjeti bez nepotrebne komplikacije i pravne magle." },
  { icon: FileCheck2, title: "Podrška u zakonskim obvezama", desc: "Pomoć pri ispunjavanju obveza propisanih zakonima i pravilnicima." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-slate-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-safety" />
              Sigurnost · Zaštita · Usklađenost
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Stručna podrška za zaštitu na radu, zaštitu od požara i zaštitu okoliša.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pomažemo tvrtkama u ispunjavanju zakonskih obveza, procjeni rizika, izradi
              dokumentacije i sigurnijem poslovanju.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-safety px-5 py-3 text-sm font-semibold text-safety-foreground transition-colors hover:opacity-90"
              >
                Zatražite ponudu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/zastita-na-radu"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Pogledajte usluge
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Sjedište</dt>
                <dd className="mt-1 font-semibold text-foreground">Tenja, Osijek</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Područja</dt>
                <dd className="mt-1 font-semibold text-foreground">ZNR · ZOP · ZO</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Klijenti</dt>
                <dd className="mt-1 font-semibold text-foreground">Tvrtke i ustanove</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-brand/10 blur-xl" aria-hidden />
              <img
                src={heroImg}
                alt="Inspektor zaštite na radu u industrijskom okruženju"
                width={1600}
                height={1100}
                className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-xl ring-1 ring-border lg:aspect-[5/6]"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-xl bg-background p-4 shadow-lg ring-1 ring-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Direktna linija</p>
                <a href="tel:+38531275257" className="mt-1 flex items-center gap-2 text-lg font-bold text-brand">
                  <Phone className="h-4 w-4" /> +385 (0)31 275 257
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-safety">Naše usluge</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tri područja, jedan pouzdan partner.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand/10 text-brand">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Saznajte više <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="border-y border-border bg-slate-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-safety">Kako vam možemo pomoći</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Praktična podrška na svakom koraku.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Klijentima pružamo cjelovitu podršku u području sigurnosti i zaštite —
              od izrade dokumentacije i procjene rizika do osposobljavanja radnika i
              ispunjavanja zakonskih obveza.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {help.map((h) => (
              <div key={h.title} className="rounded-xl border border-border bg-card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-brand">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <ServicePreview
            icon={HardHat}
            title="Zaštita na radu"
            to="/zastita-na-radu"
            points={[
              "Procjena rizika na radnim mjestima",
              "Izrada propisane dokumentacije iz ZNR",
              "Osposobljavanje radnika za rad na siguran način",
              "Osposobljavanje poslodavaca i ovlaštenika",
              "Vođenje evidencija iz područja zaštite na radu",
              "Stručno savjetovanje i podrška na terenu",
            ]}
          />
          <ServicePreview
            icon={Flame}
            title="Zaštita od požara"
            to="/zastita-od-pozara"
            points={[
              "Izrada planova i procjena zaštite od požara",
              "Osposobljavanje pučanstva za provedbu mjera ZOP-a",
              "Pregledi i savjetovanje u poslovnim objektima",
              "Pomoć pri ispunjavanju zakonskih obveza ZOP-a",
              "Vođenje propisane dokumentacije i evidencija",
            ]}
          />
          <ServicePreview
            icon={Leaf}
            title="Zaštita okoliša"
            to="/zastita-okolisa"
            points={[
              "Savjetovanje iz područja zaštite okoliša",
              "Vođenje propisanih evidencija i očevidnika",
              "Podrška pri ispunjavanju ekoloških obveza",
              "Suradnja s nadležnim tijelima",
              "Praćenje propisa i obavještavanje klijenata",
            ]}
          />
        </div>
      </section>

      {/* WHY ARKS */}
      <section className="border-t border-border bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-safety">Zašto ARKS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Zašto odabrati ARKS?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-safety text-safety-foreground">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-slate-surface p-8 sm:p-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trebate stručnu podršku za sigurnost i zaštitu?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Javite nam se s opisom potreba. Dogovorit ćemo razgovor i predložiti
                konkretne korake za vašu tvrtku.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-safety px-5 py-3 text-sm font-semibold text-safety-foreground hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Pošaljite upit
              </Link>
              <a
                href="tel:+38531275257"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Nazovite nas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicePreview({
  icon: Icon, title, points, to,
}: { icon: typeof HardHat; title: string; points: string[]; to: string }) {
  return (
    <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand/10 text-brand">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight">{title}</h3>
        <Link to={to} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Detalji usluge <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <ul className="grid gap-3 lg:col-span-8 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
