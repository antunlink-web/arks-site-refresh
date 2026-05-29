import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/politika-privatnosti")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — ARKS d.o.o." },
      { name: "description", content: "Politika privatnosti tvrtke Agencija za razvoj i kontrolu sigurnosti d.o.o." },
      { property: "og:title", content: "Politika privatnosti — ARKS d.o.o." },
      { property: "og:url", content: "/politika-privatnosti" },
    ],
    links: [{ rel: "canonical", href: "/politika-privatnosti" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pravne informacije" title="Politika privatnosti" />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-foreground/85 sm:px-6 lg:px-8">
        <Section title="Voditelj obrade">
          <p>
            Voditelj obrade osobnih podataka je <strong>Agencija za razvoj i kontrolu sigurnosti d.o.o.</strong>,
            Osječka 163, Tenja, Osijek. Kontakt: <a className="text-brand hover:underline" href="mailto:arks@arks.hr">arks@arks.hr</a>,
            tel. +385 (0)31 275 257.
          </p>
        </Section>
        <Section title="Koje podatke prikupljamo">
          <p>Prikupljamo samo podatke koje nam korisnik dobrovoljno dostavi putem kontakt obrasca ili e-maila: ime i prezime ili naziv tvrtke, e-mail adresu, telefon i sadržaj poruke.</p>
        </Section>
        <Section title="Svrha obrade podataka">
          <p>Podaci se obrađuju isključivo radi odgovora na upit, pripreme ponude i komunikacije s korisnikom u vezi traženih usluga.</p>
        </Section>
        <Section title="Kontakt obrazac">
          <p>Slanjem upita putem kontakt obrasca korisnik potvrđuje da je upoznat s ovom Politikom privatnosti i da je suglasan s obradom podataka u navedene svrhe.</p>
        </Section>
        <Section title="Pravna osnova obrade">
          <p>Obrada se temelji na privoli korisnika i legitimnom interesu voditelja obrade za odgovor na poslani upit, sukladno Uredbi (EU) 2016/679 (GDPR).</p>
        </Section>
        <Section title="Rok čuvanja podataka">
          <p>Podaci se čuvaju onoliko koliko je potrebno za ispunjenje svrhe za koju su prikupljeni, odnosno do povlačenja privole korisnika.</p>
        </Section>
        <Section title="Prava korisnika">
          <p>Korisnik ima pravo na pristup, ispravak, brisanje, ograničavanje obrade, prigovor i prenosivost podataka, kao i pravo podnošenja prigovora nadležnoj agenciji za zaštitu osobnih podataka.</p>
        </Section>
        <Section title="Kontakt za privatnost">
          <p>Za sva pitanja vezana uz privatnost i obradu podataka možete nas kontaktirati na <a className="text-brand hover:underline" href="mailto:arks@arks.hr">arks@arks.hr</a>.</p>
        </Section>
      </article>
    </>
  ),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
