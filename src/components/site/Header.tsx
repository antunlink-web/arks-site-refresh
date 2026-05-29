import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Naslovnica" },
  { to: "/o-nama", label: "O nama" },
  { to: "/zastita-na-radu", label: "Zaštita na radu" },
  { to: "/zastita-od-pozara", label: "Zaštita od požara" },
  { to: "/zastita-okolisa", label: "Zaštita okoliša" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Utility bar */}
      <div className="hidden border-b border-brand-deep/40 bg-brand-deep text-brand-foreground lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px] lg:px-8">
          <div className="flex items-center gap-6 text-white/75">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Osječka 163, Tenja, Osijek</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> <a href="mailto:arks@arks.hr" className="hover:text-white">arks@arks.hr</a></span>
          </div>
          <div className="flex items-center gap-5 text-white/75">
            <span>Pon – Pet · 08:00 – 16:00</span>
            <a href="tel:+38531275257" className="inline-flex items-center gap-1.5 font-medium text-white hover:text-white/90">
              <Phone className="h-3.5 w-3.5" /> +385 (0)31 275 257
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`w-full border-b transition-colors ${
          scrolled ? "border-border bg-background/95 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur" : "border-border/60 bg-background"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[88px] lg:px-8">
          <Link to="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
            <span className="grid h-12 w-12 place-items-center rounded-sm bg-brand text-brand-foreground ring-1 ring-brand-deep/20">
              <span className="font-display text-[22px] leading-none">A</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-2xl tracking-tight text-foreground lg:text-[28px]">ARKS</span>
              <span className="mt-0.5 hidden text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
                Agencija za razvoj i kontrolu sigurnosti d.o.o.
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13.5px] font-medium tracking-wide text-foreground/75 transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/kontakt"
              className="inline-flex items-center rounded-sm border border-brand bg-brand px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              Zatražite ponudu
            </Link>
          </div>

          <button
            aria-label="Otvori izbornik"
            className="grid h-10 w-10 place-items-center rounded-sm text-foreground lg:hidden"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                  activeProps={{ className: "text-brand bg-secondary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <a
                  href="tel:+38531275257"
                  className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium text-foreground/80"
                >
                  <Phone className="h-4 w-4" /> +385 (0)31 275 257
                </a>
                <Link
                  to="/kontakt"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground"
                >
                  Zatražite ponudu
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
