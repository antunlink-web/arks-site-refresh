import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Smartphone, Printer, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt - ARKS" },
      { name: "description", content: "Kontaktirajte ARKS za usluge zaštite na radu, zaštite od požara i zaštite okoliša. Sjedište: Osječka 163, Tenja." },
      { property: "og:title", content: "Kontakt - ARKS" },
      { property: "og:description", content: "Kontaktirajte ARKS za usluge zaštite na radu, zaštite od požara i zaštite okoliša. Sjedište: Osječka 163, Tenja." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/kontakt" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/kontakt" }],
  }),
  component: Kontakt,
});

const schema = z.object({
  name: z.string().trim().min(2, "Unesite ime i prezime ili naziv tvrtke").max(120),
  email: z.string().trim().email("Unesite ispravnu e-mail adresu").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  topic: z.string().min(1, "Odaberite vrstu upita"),
  message: z.string().trim().min(10, "Poruka mora imati barem 10 znakova").max(2000),
});

function Kontakt() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      topic: String(fd.get("topic") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      const map: Record<string, string> = {};
      for (const issue of res.error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !map[key]) map[key] = issue.message;
      }
      setErrors(map);
      return;
    }
    setErrors({});
    // Demo: open user's mail client with prepared message
    const subject = encodeURIComponent(`Upit s web stranice - ${res.data.topic}`);
    const body = encodeURIComponent(
      `Ime / tvrtka: ${res.data.name}\nE-mail: ${res.data.email}\nTelefon: ${res.data.phone || "-"}\nVrsta upita: ${res.data.topic}\n\nPoruka:\n${res.data.message}`
    );
    window.location.href = `mailto:arks@arks.hr?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Javite nam se."
        lead="Opišite vaše potrebe - predložit ćemo konkretne korake i ponudu prilagođenu vašoj djelatnosti."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Contact details */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold">Kontakt podaci</h2>
          <ul className="mt-5 space-y-4 text-sm text-foreground/85">
            <Detail icon={MapPin} label="Adresa">Osječka 163, Tenja, Osijek</Detail>
            <Detail icon={Phone} label="Telefon"><a className="hover:text-brand" href="tel:+38531275257">+385 (0)31 275 257</a></Detail>
            <Detail icon={Smartphone} label="Mobitel"><a className="hover:text-brand" href="tel:+385989801111">+385 (0)98 980 1111</a></Detail>
            <Detail icon={Printer} label="Fax">+385 (0)31 275 254</Detail>
            <Detail icon={Mail} label="E-mail"><a className="hover:text-brand" href="mailto:arks@arks.hr">arks@arks.hr</a></Detail>
            <Detail icon={Clock} label="Radno vrijeme">Pon – Pet 08:00 – 16:00</Detail>
          </ul>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Karta - Osječka 163, Tenja, Osijek"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCjFSAS2qMX3RydPFzsGOzk_5leo9_ESA8&q=Osje%C4%8Dka+163%2C+31207+Tenja%2C+Hrvatska&center=45.5184243%2C18.7290797&zoom=16"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Osje%C4%8Dka+163%2C+Tenja%2C+Osijek%2C+Croatia"
              target="_blank" rel="noreferrer"
              className="block bg-slate-surface px-4 py-2.5 text-center text-xs font-medium text-brand hover:underline"
            >
              Otvori veću kartu
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Kontakt obrazac</h2>
            <p className="mt-1 text-sm text-muted-foreground">Polja označena zvjezdicom (*) su obavezna.</p>

            {sent ? (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-slate-surface p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-safety" />
                <div>
                  <p className="text-sm font-semibold">Hvala na upitu.</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Otvorili smo vaš e-mail klijent s pripremljenom porukom. Ako se nije otvorio, pišite nam izravno na{" "}
                    <a className="text-brand hover:underline" href="mailto:arks@arks.hr">arks@arks.hr</a>.
                  </p>
                </div>
              </div>
            ) : (
              <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
                <Field label="Ime i prezime / Naziv tvrtke *" name="name" error={errors.name} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="E-mail *" name="email" type="email" error={errors.email} />
                  <Field label="Telefon" name="phone" type="tel" error={errors.phone} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Vrsta upita *</label>
                  <select
                    name="topic"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="" disabled>Odaberite…</option>
                    <option>Zaštita na radu</option>
                    <option>Zaštita od požara</option>
                    <option>Zaštita okoliša</option>
                    <option>Općeniti upit</option>
                  </select>
                  {errors.topic && <p className="mt-1 text-xs text-destructive">{errors.topic}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Poruka *</label>
                  <textarea
                    name="message" rows={6}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-safety px-5 py-3 text-sm font-semibold text-safety-foreground hover:opacity-90 sm:w-auto"
                >
                  <Send className="h-4 w-4" /> Pošaljite upit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-secondary text-brand">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-foreground">{children}</p>
      </div>
    </li>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type} name={name}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
