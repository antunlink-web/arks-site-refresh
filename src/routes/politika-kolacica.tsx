import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/politika-kolacica")({
  head: () => ({
    meta: [
      { title: "Politika kolačića — ARKS d.o.o." },
      { name: "description", content: "Politika kolačića tvrtke Agencija za razvoj i kontrolu sigurnosti d.o.o." },
      { property: "og:title", content: "Politika kolačića — ARKS d.o.o." },
      { property: "og:url", content: "/politika-kolacica" },
    ],
    links: [{ rel: "canonical", href: "/politika-kolacica" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pravne informacije" title="Politika kolačića" />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-foreground/85 sm:px-6 lg:px-8">
        <Section title="Što su kolačići">
          <p>Kolačići (eng. cookies) su male tekstualne datoteke koje se pohranjuju u vašem pregledniku prilikom posjeta web stranici. Omogućuju ispravan rad stranice i bolje korisničko iskustvo.</p>
        </Section>
        <Section title="Koje vrste kolačića koristimo">
          <p>Na ovoj stranici koristimo nužne kolačiće potrebne za osnovno funkcioniranje. Analitičke i marketinške kolačiće aktiviramo samo uz vašu prethodnu privolu.</p>
        </Section>
        <Section title="Nužni kolačići">
          <p>Potrebni su za osnovno funkcioniranje web stranice i ne mogu se isključiti. Bez njih stranica ne bi radila ispravno.</p>
        </Section>
        <Section title="Analitički kolačići">
          <p>Pomažu nam razumjeti kako se stranica koristi (npr. broj posjeta, najposjećenije stranice). Aktiviraju se samo uz vašu privolu.</p>
        </Section>
        <Section title="Marketinški kolačići">
          <p>Koriste se za prikazivanje relevantnog sadržaja i oglasa. Aktiviraju se samo uz vašu izričitu privolu.</p>
        </Section>
        <Section title="Kako promijeniti postavke kolačića">
          <p>Postavke kolačića možete u svakom trenutku promijeniti kroz banner za pristanak ili u postavkama vašeg preglednika. Promjena ili povlačenje privole ne utječe na zakonitost obrade do trenutka povlačenja.</p>
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
