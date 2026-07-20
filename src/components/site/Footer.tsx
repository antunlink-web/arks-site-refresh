import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Smartphone, Mail, Clock, Printer } from "lucide-react";
import arksLogo from "@/assets/arks-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-deep/40 bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Brand block */}
        <div className="lg:col-span-4">
          <div className="inline-flex items-center rounded-sm bg-white px-5 py-4 ring-1 ring-white/15">
            <img
              src={arksLogo}
              alt="ARKS — Agencija za razvoj i kontrolu sigurnosti d.o.o."
              className="h-16 w-auto lg:h-20"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Agencija za razvoj i kontrolu sigurnosti. Stručna podrška za zaštitu na radu,
            zaštitu od požara i zaštitu okoliša — već dugi niz godina uz hrvatske tvrtke.
          </p>
        </div>

        {/* Kontakt */}
        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Kontakt</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-safety" /> Osječka 163, Tenja, Osijek</li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-safety" /> <a href="tel:+38531275257" className="hover:text-white">+385 (0)31 275 257</a></li>
            <li className="flex gap-2.5"><Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-safety" /> <a href="tel:+385989801111" className="hover:text-white">+385 (0)98 980 1111</a></li>
            <li className="flex gap-2.5"><Printer className="mt-0.5 h-4 w-4 shrink-0 text-safety" /> +385 (0)31 275 254</li>
            <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-safety" /> <a href="mailto:arks@arks.hr" className="hover:text-white">arks@arks.hr</a></li>
            <li className="flex gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-safety" /> Pon – Pet 08:00 – 16:00</li>
          </ul>
        </div>

        {/* Usluge */}
        <div className="lg:col-span-2">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Usluge</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link to="/zastita-na-radu" className="hover:text-white">Zaštita na radu</Link></li>
            <li><Link to="/zastita-od-pozara" className="hover:text-white">Zaštita od požara</Link></li>
            <li><Link to="/zastita-okolisa" className="hover:text-white">Zaštita okoliša</Link></li>
            <li><Link to="/o-nama" className="hover:text-white">O nama</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        {/* Pravne informacije */}
        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Pravne informacije</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link to="/politika-privatnosti" className="hover:text-white">Politika privatnosti</Link></li>
            <li><Link to="/politika-kolacica" className="hover:text-white">Politika kolačića</Link></li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-white/55">
            Agencija za razvoj i kontrolu sigurnosti d.o.o.<br />
            Tvrtka registrirana u Republici Hrvatskoj.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Agencija za razvoj i kontrolu sigurnosti d.o.o. Sva prava pridržana.</p>
          <p className="uppercase tracking-[0.16em]">Sigurnost · Zaštita · Usklađenost</p>
        </div>
      </div>
    </footer>
  );
}
