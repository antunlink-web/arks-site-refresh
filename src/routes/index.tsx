import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HardHat,
  Flame,
  Leaf,
  ArrowRight,
  Check,
  ClipboardCheck,
  GraduationCap,
  FileCheck2,
  Scale,
  Phone,
  Mail,
  ShieldCheck,
  BookOpen,
  Building2,
  Gauge,
} from "lucide-react";
import heroImg from "@/assets/hero-safety.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARKS - Zaštita na radu, zaštita od požara i zaštita okoliša" },
      { name: "description", content: "Agencija za razvoj i kontrolu sigurnosti d.o.o. pruža stručnu podršku iz područja zaštite na radu, zaštite od požara i zaštite okoliša." },
      { property: "og:title", content: "ARKS - Zaštita na radu, zaštita od požara i zaštita okoliša" },
      { property: "og:description", content: "Agencija za razvoj i kontrolu sigurnosti d.o.o. pruža stručnu podršku iz područja zaštite na radu, zaštite od požara i zaštite okoliša." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/" }],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    icon: HardHat,
    title: "Zaštita na radu",
    desc: "Procjena rizika, propisana dokumentacija i osposobljavanje radnika za rad na siguran način.",
    to: "/zastita-na-radu",
    code: "ZNR",
    dot: "bg-[#2E7D32]",
  },
  {
    n: "02",
    icon: Flame,
    title: "Zaštita od požara",
    desc: "Planovi zaštite od požara, osposobljavanje pučanstva i pregledi mjera u poslovnim objektima.",
    to: "/zastita-od-pozara",
    code: "ZOP",
    dot: "bg-[#C62828]",
  },
  {
    n: "03",
    icon: Leaf,
    title: "Zaštita okoliša",
    desc: "Vođenje propisanih evidencija, savjetovanje i podrška u ispunjavanju ekoloških obveza.",
    to: "/zastita-okolisa",
    code: "ZO",
    dot: "bg-[#1565C0]",
  },
  {
    n: "04",
    icon: Gauge,
    title: "Ispitivanje ispravnosti i nepropusnosti plinskih instalacija",
    desc: "Ovlašteni ispitivač na distribucijskom području HEP-PLIN-a d.o.o., stručne razine I. – IV.",
    to: "/ispitivanje-plinskih-instalacija",
    code: "PLIN",
    dot: "bg-[#6B7280]",
  },
] as const;

const help = [
  { icon: Scale, title: "Zakonska usklađenost", desc: "Pratimo izmjene propisa i pomažemo da poslovanje bude usklađeno sa Zakonom o zaštiti na radu, Zakonom o zaštiti od požara i propisima iz područja okoliša." },
  { icon: FileCheck2, title: "Dokumentacija i evidencije", desc: "Izrada i održavanje propisane dokumentacije: procjene rizika, planovi, pravilnici, očevidnici i evidencije iz područja sigurnosti i zaštite." },
  { icon: GraduationCap, title: "Osposobljavanja", desc: "Osposobljavanje radnika, poslodavaca i ovlaštenika za rad na siguran način te za provedbu mjera zaštite od požara." },
  { icon: ClipboardCheck, title: "Pregledi i savjetovanje", desc: "Stručni pregledi na terenu, savjetovanje pri uređenju radnih mjesta i podrška u kontaktu s nadležnim tijelima." },
];

const why = [
  { icon: ShieldCheck, title: "Stručnost u području sigurnosti i zaštite", desc: "Iskustvo u radu s tvrtkama različitih veličina i djelatnosti." },
  { icon: Building2, title: "Praktičan pristup poslovnim obvezama", desc: "Rješenja prilagođena stvarnim potrebama svakog klijenta." },
  { icon: BookOpen, title: "Jasna komunikacija bez kompliciranja", desc: "Razumljivi savjeti, bez nepotrebne pravne magle." },
  { icon: FileCheck2, title: "Podrška u dokumentaciji i pregledima", desc: "Pratimo vas od procjene rizika do osposobljavanja." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-cream">
        {/* Subtle blueprint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.24 0.07 260) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.24 0.07 260) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-stretch gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-16">
          {/* Left */}
          <div className="lg:col-span-7 lg:pr-6">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" />
              <span>Od 2002. - Agencija za razvoj i kontrolu sigurnosti d.o.o.</span>
            </div>

            <h1 className="mt-7 font-display text-[2.5rem] leading-[1.08] tracking-tight text-foreground sm:text-[3.4rem] lg:text-[3.9rem]">
              Pouzdana podrška za sigurnost,<br />
              zaštitu na radu i usklađenost poslovanja.
            </h1>

            <p className="mt-7 max-w-2xl text-[16.5px] leading-[1.75] text-foreground/75 sm:text-[18px]">
              Pomažemo hrvatskim tvrtkama u području zaštite na radu, zaštite od požara
              i zaštite okoliša — jasno, stručno i u skladu sa zakonskim obvezama.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-sm bg-brand px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-brand-foreground shadow-sm transition-colors hover:bg-brand-deep"
              >
                Zatražite ponudu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+38531275257"
                className="inline-flex items-center gap-2 rounded-sm border border-brand/30 bg-background px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-brand transition-colors hover:bg-brand/5"
              >
                <Phone className="h-4 w-4" /> +385 (0)31 275 257
              </a>
            </div>

            {/* Trust indicators */}
            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              <TrustCell label="Sjedište" value="Tenja, Osijek" />
              <TrustCell label="Područja" value="ZNR · ZOP · Okoliš" />
              <TrustCell label="Podrška" value="Dokumentacija · Osposobljavanja · Pregledi" />
            </dl>
          </div>

          {/* Right — image */}
          <div className="relative lg:col-span-5">
            <div className="relative h-full min-h-[420px]">
              <div className="absolute -left-3 top-6 hidden h-[calc(100%-3rem)] w-px bg-brand/20 lg:block" aria-hidden />
              <div className="absolute -top-3 left-6 hidden h-px w-[calc(100%-3rem)] bg-brand/20 lg:block" aria-hidden />
              <img
                src={heroImg}
                alt="Inspektor zaštite na radu pregledava dokumentaciju u industrijskom postrojenju"
                width={1280}
                height={1600}
                className="relative h-full max-h-[640px] w-full object-cover ring-1 ring-brand-deep/10"
                style={{ filter: "saturate(0.9) contrast(1.02)" }}
              />
              {/* Compliance label overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 bg-brand-deep/95 px-4 py-3 text-white backdrop-blur">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Dosje · ARKS / 2026</p>
                  <p className="font-display text-base">Pregled mjera zaštite na radu</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-safety/60 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-safety">
                  <Check className="h-3.5 w-3.5" /> Usklađeno
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO — editorial layout */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Područja djelovanja</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              Tri područja,<br />jedan pouzdan partner.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/70">
              Cjelovita stručna podrška u svim ključnim područjima sigurnosti i zaštite —
              od procjene rizika do svakodnevne podrške u poslovanju.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {services.map((s) => (
                <li key={s.title}>
                  <Link
                    to={s.to}
                    className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-cream"
                  >
                    <span className="col-span-2 num font-display text-2xl text-brand/40 sm:text-3xl">{s.n}</span>
                    <div className="col-span-8 sm:col-span-7">
                      <div className="flex items-center gap-3">
                        <s.icon className="h-5 w-5 text-brand" />
                        <h3 className="font-display text-2xl leading-none tracking-tight">{s.title}</h3>
                        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:inline">· {s.code}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                    </div>
                    <span className="col-span-2 sm:col-span-3 inline-flex items-center justify-end gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-brand">
                      <span className="hidden sm:inline">Detalji</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Kako vam možemo pomoći</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              Praktična podrška na svakom koraku.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/70">
              Klijentima pružamo cjelovitu podršku — od izrade dokumentacije i procjene rizika
              do osposobljavanja radnika i ispunjavanja zakonskih obveza.
            </p>
            <Link
              to="/kontakt"
              className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-brand hover:text-brand-deep"
            >
              Dogovorite konzultacije <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {help.map((h, i) => (
                <div key={h.title} className="flex flex-col bg-background p-7">
                  <div className="flex items-center gap-3">
                    <span className="num text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <h.icon className="h-4 w-4 text-brand" />
                  </div>
                  <h3 className="mt-4 font-display text-xl tracking-tight">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS — editorial rows */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <ServiceRow
          n="01"
          icon={HardHat}
          code="ZNR"
          title="Zaštita na radu"
          intro="Uspostava i održavanje sustava zaštite na radu u skladu s važećim propisima Republike Hrvatske."
          to="/zastita-na-radu"
          points={[
            "Procjena rizika na radnim mjestima",
            "Izrada propisane dokumentacije iz područja ZNR",
            "Osposobljavanje radnika za rad na siguran način",
            "Osposobljavanje poslodavaca i ovlaštenika",
            "Vođenje evidencija iz područja zaštite na radu",
            "Stručno savjetovanje i podrška na terenu",
          ]}
        />
        <ServiceRow
          n="02"
          icon={Flame}
          code="ZOP"
          title="Zaštita od požara"
          intro="Mjere zaštite od požara, dokumentacija i osposobljavanja prilagođeni vrsti i veličini objekta."
          to="/zastita-od-pozara"
          points={[
            "Izrada planova i procjena zaštite od požara",
            "Osposobljavanje pučanstva za provedbu mjera ZOP-a",
            "Pregledi i savjetovanje u poslovnim objektima",
            "Pomoć pri ispunjavanju zakonskih obveza ZOP-a",
            "Vođenje propisane dokumentacije i evidencija",
          ]}
        />
        <ServiceRow
          n="03"
          icon={Leaf}
          code="ZO"
          title="Zaštita okoliša"
          intro="Podrška u ispunjavanju ekoloških obveza, vođenje evidencija i suradnja s nadležnim tijelima."
          to="/zastita-okolisa"
          last
          points={[
            "Savjetovanje iz područja zaštite okoliša",
            "Vođenje propisanih evidencija i očevidnika",
            "Podrška pri ispunjavanju ekoloških obveza",
            "Suradnja s nadležnim tijelima",
            "Praćenje propisa i obavještavanje klijenata",
          ]}
        />
      </section>

      {/* SPECIAL ACTIVITY — Gas installations */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Posebna djelatnost</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Ispitivanje ispravnosti i nepropusnosti plinskih instalacija
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
              ARKS je ovlašteni ispitivač ispravnosti i nepropusnosti plinskih instalacija na
              distribucijskom području HEP-PLIN-a d.o.o. — stručne razine I., II., III. i IV.
            </p>
            <Link
              to="/ispitivanje-plinskih-instalacija"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-brand-foreground hover:bg-brand-deep"
            >
              Saznajte više <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-start gap-5 border border-border bg-background p-7">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-sm bg-brand/10 text-brand">
                <Gauge className="h-7 w-7" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Ovlašteni ispitivač</p>
                <p className="mt-2 font-display text-xl leading-tight tracking-tight">
                  Stručne razine I. – IV.
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-foreground/70">
                  Distribucijsko područje HEP-PLIN-a d.o.o.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ARKS — credibility band */}
      <section className="border-t border-brand-deep/40 bg-brand-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Zašto ARKS</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
                Stručnost, povjerenje i jasna komunikacija.
              </h2>
            </div>
            <p className="max-w-md text-[14.5px] leading-relaxed text-white/80">
              Naš pristup počiva na stručnosti, dosljednosti i razumijevanju stvarnih
              poslovnih obveza koje propisi nameću hrvatskim tvrtkama.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <div key={w.title} className="flex flex-col bg-brand-deep p-7">
                <div className="flex items-center justify-between">
                  <span className="num text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    0{i + 1}
                  </span>
                  <w.icon className="h-5 w-5 text-safety" />
                </div>
                <h3 className="mt-6 font-display text-lg leading-tight tracking-tight text-white">
                  {w.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/80">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-border bg-cream px-6 py-14 sm:px-14">
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 hidden w-1/3 opacity-[0.05] lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, oklch(0.24 0.07 260) 0 1px, transparent 1px 14px)",
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-safety">Kontakt</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Trebate pouzdanog partnera za sigurnost i zaštitu?
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/70">
                Pošaljite upit i dogovorit ćemo konkretne korake prema potrebama vaše tvrtke.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-sm bg-brand px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-brand-foreground shadow-sm hover:bg-brand-deep"
              >
                <Mail className="h-4 w-4" /> Pošaljite upit
              </Link>
              <a
                href="tel:+38531275257"
                className="inline-flex items-center gap-2 rounded-sm border border-brand/30 bg-background px-7 py-4 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-brand hover:bg-brand/5"
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

function TrustCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className="mt-2 font-display text-lg leading-tight text-foreground">{value}</dd>
    </div>
  );
}

function ServiceRow({
  n, icon: Icon, code, title, intro, points, to, last,
}: {
  n: string; icon: typeof HardHat; code: string; title: string; intro: string;
  points: string[]; to: string; last?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 gap-10 border-t border-border py-14 lg:grid-cols-12 lg:gap-12 ${last ? "border-b" : ""}`}>
      <div className="lg:col-span-5">
        <div className="flex items-center gap-3">
          <span className="num font-display text-3xl text-brand/40">{n}</span>
          <span className="h-px w-10 bg-border" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{code}</span>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <Icon className="h-6 w-6 text-brand" />
          <h3 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h3>
        </div>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/70">{intro}</p>
        <Link
          to={to}
          className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wider text-brand hover:text-brand-deep"
        >
          Detalji usluge <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <ul className="grid gap-x-10 gap-y-1 lg:col-span-7 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 border-b border-dashed border-border py-3 text-[14.5px] leading-relaxed text-foreground/85">
            <Check className="mt-1 h-4 w-4 shrink-0 text-safety" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
