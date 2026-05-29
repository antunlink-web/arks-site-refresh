import { Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Phone, Smartphone, Mail, Clock, Printer } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-slate-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-brand text-brand-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold tracking-tight">
              Agencija za razvoj i kontrolu sigurnosti d.o.o.
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Stručna podrška za zaštitu na radu, zaštitu od požara i zaštitu okoliša. Pomažemo tvrtkama
            u ispunjavanju zakonskih obveza i sigurnijem poslovanju.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Kontakt</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Osječka 163, Tenja, Osijek</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> +385 (0)31 275 257</li>
            <li className="flex gap-2"><Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> +385 (0)98 980 1111</li>
            <li className="flex gap-2"><Printer className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> +385 (0)31 275 254</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> <a href="mailto:arks@arks.hr" className="hover:text-brand">arks@arks.hr</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Pon – Pet 08:00 – 16:00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Usluge</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/zastita-na-radu" className="hover:text-brand">Zaštita na radu</Link></li>
            <li><Link to="/zastita-od-pozara" className="hover:text-brand">Zaštita od požara</Link></li>
            <li><Link to="/zastita-okolisa" className="hover:text-brand">Zaštita okoliša</Link></li>
            <li><Link to="/o-nama" className="hover:text-brand">O nama</Link></li>
            <li><Link to="/kontakt" className="hover:text-brand">Kontakt</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Agencija za razvoj i kontrolu sigurnosti d.o.o. Sva prava pridržana.</p>
          <div className="flex gap-5">
            <Link to="/politika-privatnosti" className="hover:text-brand">Politika privatnosti</Link>
            <Link to="/politika-kolacica" className="hover:text-brand">Politika kolačića</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
