import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  GraduationCap,
  FileText,
  Gauge,
  Leaf,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/usluge")({
  head: () => ({
    meta: [
      { title: "Usluge - ARKS" },
      { name: "description", content: "Pregled usluga koje ARKS može ponuditi iz područja zaštite na radu, zaštite od požara, ispitivanja, osposobljavanja i zaštite okoliša." },
      { property: "og:title", content: "Usluge - ARKS" },
      { property: "og:description", content: "Pregled usluga koje ARKS može ponuditi iz područja zaštite na radu, zaštite od požara, ispitivanja, osposobljavanja i zaštite okoliša." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/usluge" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/usluge" }],
  }),
  component: Page,
});

type Item = { title: string; ref?: string; link?: string };

type Group = {
  code: string;
  title: string;
  icon: typeof GraduationCap;
  intro: string;
  items: Item[];
};

const groups: Group[] = [
  {
    code: "A",
    title: "Osposobljavanja",
    icon: GraduationCap,
    intro: "Programi osposobljavanja radnika, poslodavaca i ovlaštenika iz područja zaštite na radu i zaštite od požara.",
    items: [
      { title: "Osposobljavanje radnika za rad na siguran način", ref: "čl. 27. Zakona o zaštiti na radu (NN 71/14, 118/14, 94/18, 96/18)" },
      { title: "Osposobljavanje radnika za rad na siguran način kod rada s računalom", ref: "čl. 27. Zakona o zaštiti na radu i Pravilnik o zaštiti na radu radnika izloženih statodinamičkim, psihofiziološkim i drugim naporima na radu (NN 73/21)" },
      { title: "Osposobljavanje poslodavca iz zaštite na radu", ref: "čl. 29. Zakona o zaštiti na radu" },
      { title: "Osposobljavanje ovlaštenika poslodavca / povjerenika radnika iz zaštite na radu", ref: "čl. 29. Zakona o zaštiti na radu" },
      { title: "Osposobljavanje radnika za provođenje evakuacije i spašavanja", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Osposobljavanje radnika iz zaštite od požara", ref: "Zakon o zaštiti od požara (NN 92/10); Pravilnik o programu i načinu osposobljavanja pučanstva (NN 61/94)" },
    ],
  },
  {
    code: "B",
    title: "Dokumentacija i procjene",
    icon: FileText,
    intro: "Izrada propisane dokumentacije, procjena i planova iz područja zaštite na radu i zaštite od požara.",
    items: [
      { title: "Izrada Procjene rizika", ref: "čl. 18. Zakona o zaštiti na radu" },
      { title: "Izrada Pravilnika zaštite na radu", ref: "čl. 19. Zakona o zaštiti na radu (NN 71/14)" },
      { title: "Izrada Pravilnika zaštite od požara", ref: "čl. 21. Zakona o zaštiti od požara (NN 92/10); Pravilnik o sadržaju općeg akta iz područja ZOP-a (NN 116/11)" },
      { title: "Izrada Plana evakuacije i spašavanja (tekstualni i grafički dio)", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Organizacija i provođenje vježbe evakuacije i spašavanja", ref: "čl. 55. Zakona o zaštiti na radu" },
      { title: "Procjena ugroženosti od požara i revizija (svakih 5 godina)", ref: "čl. 13. st. 5. Zakona o zaštiti od požara; Pravilnik o izradi procjene ugroženosti (NN 35/94, 110/05, 28/10)" },
      { title: "Izrada plana zaštite od požara", ref: "čl. 13. st. 5. Zakona o zaštiti od požara; Pravilnik o planu zaštite od požara (NN 51/12)" },
    ],
  },
  {
    code: "C",
    title: "Ispitivanja instalacija, sustava i opreme",
    icon: Gauge,
    intro: "Ispitivanja i pregledi električnih, plinskih, protupožarnih i drugih tehničkih sustava.",
    items: [
      { title: "Ispitivanje električnih instalacija", ref: "Tehnički propis za niskonaponske električne instalacije (NN 5/10); čl. 38. Zakona o ZOP-u (NN 92/10) — otpor petlje, otpor izolacije, neprekinutost zaštitnog vodiča, otpor uzemljenja" },
      { title: "Ispitivanje i mjerenje sustava zaštite od djelovanja munje na građevinama", ref: "Tehnički propis (NN 87/08, 33/10)" },
      { title: "Vizualni pregled sustava zaštite od djelovanja munje na građevinama", ref: "Tehnički propis (NN 87/08, 33/10)" },
      { title: "Ispitivanje sigurnosne / protupanične rasvjete", ref: "čl. 40. Zakona o ZOP-u; Tehnički propis za niskonaponske električne instalacije (NN 5/10)" },
      { title: "Ispitivanje funkcionalnosti uređaja (tipkala) za daljinsko isključivanje napajanja", ref: "čl. 40. Zakona o ZOP-u; Tehnički propis (NN 5/10)" },
      { title: "Ispitivanje radne opreme (viličari, dizalice, samohodni radni strojevi)", ref: "čl. 42. Zakona o zaštiti na radu" },
      { title: "Ispitivanje učinkovitosti ventilacije", ref: "čl. 45. Zakona o zaštiti na radu" },
      { title: "Ispitivanje ventilacije u prostorima za pušenje", ref: "čl. 45. Zakona o zaštiti na radu; Pravilnik o tehničkim normativima (Sl. list 38/96, NN 69/97); Zakon o ograničavanju uporabe duhanskih proizvoda" },
      { title: "Ispitivanje radnog okoliša (mikroklima, buka, osvijetljenost)", ref: "čl. 45. Zakona o zaštiti na radu; Pravilnik o zaštiti na radu za radna mjesta (NN 29/13)" },
      { title: "Ispitivanje elektromagnetnih ventila", ref: "čl. 38. Zakona o ZOP-u" },
      { title: "Pregled i ispitivanje hidrantske mreže", ref: "čl. 40. Zakona o ZOP-u; Pravilnik o hidrantskoj mreži (NN 8/06); Pravilnik o provjeri ispravnosti stabilnih sustava (NN 44/12)" },
      { title: "Pregled i ispitivanje vatrodojavnog sustava", ref: "čl. 40. Zakona o ZOP-u; Pravilnik o provjeri ispravnosti stabilnih sustava (NN 44/12)" },
      { title: "Pregled i ispitivanje sustava plinodetekcije", ref: "čl. 40. Zakona o ZOP-u; Pravilnik o provjeri ispravnosti stabilnih sustava (NN 44/12)" },
      { title: "Pregled i ispitivanje sustava za odvođenje dima i topline", ref: "Zakon o zaštiti od požara (NN 92/10)" },
      { title: "Ispitivanje protupožarnih zaklopki", ref: "Zakon o zaštiti od požara (NN 92/10)" },
      { title: "Ispitivanje ispravnosti i nepropusnosti plinskih instalacija", ref: "čl. 9. st. 3. Zakona o zapaljivim tekućinama i plinovima (NN 108/95, 56/10)", link: "/ispitivanje-plinskih-instalacija" },
      { title: "Pregled i ispitivanje sprinkler i drenčer sustava", ref: "čl. 40. Zakona o ZOP-u; Pravilnik o provjeri ispravnosti stabilnih sustava (NN 44/12)" },
      { title: "Pregled i ispitivanje instalacija za odvođenje statičkog elektriciteta", ref: "čl. 38. Zakona o ZOP-u; Pravilnik o tehničkim normativima (Sl. list 62/73)" },
    ],
  },
  {
    code: "D",
    title: "Zaštita okoliša i stručni poslovi",
    icon: Leaf,
    intro: "Stručni poslovi, koordinacija i podrška u ispunjavanju obveza iz područja zaštite okoliša i zaštite na radu.",
    items: [
      { title: "Izrada operativnog plana interventnih mjera u slučaju izvanrednog i iznenadnog onečišćenja voda" },
      { title: "Usluge koordinatora za zaštitu na radu prilikom izvođenja radova", ref: "čl. 73. Zakona o zaštiti na radu (NN 71/14)" },
      { title: "Poslovi stručnjaka zaštite na radu (Ugovor)", ref: "čl. 82. Zakona o zaštiti na radu (NN 71/14)" },
      { title: "Poslovi ovlaštenika zaštite od požara (Ugovor)", ref: "Zakon o zaštiti od požara (NN 92/10)" },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Usluge"
        title="Usluge koje možemo ponuditi"
        lead="Cjelovita stručna podrška iz područja zaštite na radu, zaštite od požara, ispitivanja, osposobljavanja i zaštite okoliša — prilagođena stvarnim potrebama vaše tvrtke."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Skupine usluga" className="mb-14 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a
              key={g.code}
              href={`#${g.code}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-cream px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:border-brand hover:text-brand"
            >
              <span className="num text-brand">{g.code}</span> {g.title}
            </a>
          ))}
        </nav>

        <div className="space-y-20">
          {groups.map((g) => (
            <section key={g.code} id={g.code} className="scroll-mt-32">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="num font-display text-4xl text-brand/40">{g.code}</span>
                    <span className="h-px w-10 bg-border" />
                    <g.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                    {g.title}
                  </h2>
                  <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-foreground/70">
                    {g.intro}
                  </p>
                </div>

                <ol className="lg:col-span-8">
                  {g.items.map((it, idx) => (
                    <li
                      key={it.title}
                      className="grid grid-cols-12 gap-4 border-t border-border py-5 last:border-b"
                    >
                      <span className="num col-span-2 pt-0.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:col-span-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="col-span-10 sm:col-span-11">
                        {it.link ? (
                          <Link
                            to={it.link}
                            className="group inline-flex items-start gap-2 font-display text-[17px] leading-snug tracking-tight text-foreground hover:text-brand"
                          >
                            {it.title}
                            <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        ) : (
                          <h3 className="font-display text-[17px] leading-snug tracking-tight text-foreground">
                            {it.title}
                          </h3>
                        )}
                        {it.ref && (
                          <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                            {it.ref}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              Trebate ponudu prilagođenu vašoj djelatnosti?
            </h2>
            <p className="mt-2 text-[14.5px] text-foreground/70">
              Pošaljite kratak opis potreba — predložit ćemo konkretne korake i cijene.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/kontakt" className="inline-flex items-center rounded-sm bg-brand px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-brand-foreground hover:bg-brand-deep">
              Zatražite ponudu
            </Link>
            <Link to="/propisi" className="inline-flex items-center rounded-sm border border-border bg-background px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-secondary">
              Pogledajte propise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
