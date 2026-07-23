import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import arksLogo from "@/assets/arks-logo.png";

const mainNav = [
  { to: "/", label: "Naslovnica" },
  { to: "/o-nama", label: "O nama" },
] as const;

const djelatnosti = [
  { to: "/zastita-na-radu", label: "Zaštita na radu" },
  { to: "/zastita-od-pozara", label: "Zaštita od požara" },
  { to: "/zastita-okolisa", label: "Zaštita okoliša" },
  { to: "/ispitivanje-plinskih-instalacija", label: "Ispitivanje plinskih instalacija" },
  { to: "/usluge", label: "Usluge" },
  { to: "/propisi", label: "Propisi" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="hidden border-b border-brand-deep/40 bg-brand-deep text-brand-foreground lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 text-[12.5px] lg:px-8">
          <div className="flex items-center gap-7 text-white/80">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Osječka 163, Tenja, Osijek</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> <a href="mailto:arks@arks.hr" className="hover:text-white">arks@arks.hr</a></span>
          </div>
          <div className="flex items-center gap-6 text-white/80">
            <span>Pon – Pet · 08:00 – 16:00</span>
            <a href="tel:+38531275257" className="inline-flex items-center gap-2 font-medium text-white hover:text-white/90">
              <Phone className="h-3.5 w-3.5" /> +385 (0)31 275 257
            </a>
          </div>
        </div>
      </div>

      <div
        className={`w-full border-b transition-colors ${
          scrolled ? "border-border bg-background/95 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur" : "border-border/60 bg-background"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-28 lg:px-8">
          <Link to="/" className="flex items-center py-1" onClick={() => setOpen(false)} aria-label="ARKS - naslovnica">
            <img
              src={arksLogo}
              alt="ARKS - Agencija za razvoj i kontrolu sigurnosti d.o.o."
              className="h-[88px] w-auto lg:h-[108px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[14px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropOpen((s) => !s)}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-brand"
                aria-expanded={dropOpen}
                aria-haspopup="menu"
              >
                Djelatnosti <ChevronDown className={`h-4 w-4 transition-transform ${dropOpen ? "rotate-180" : ""}`} />
              </button>
              {dropOpen && (
                <div
                  role="menu"
                  className="absolute left-1/2 top-[calc(100%+0.5rem)] w-72 -translate-x-1/2 rounded-sm border border-border bg-background py-2 shadow-lg"
                >
                  {djelatnosti.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setDropOpen(false)}
                      className="block px-4 py-2.5 text-[13.5px] font-medium text-foreground/80 hover:bg-cream hover:text-brand"
                      activeProps={{ className: "text-brand bg-cream" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/kontakt"
              className="text-[14px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              Kontakt
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/kontakt"
              className="inline-flex items-center rounded-sm border border-brand bg-brand px-5 py-3 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-brand-foreground shadow-sm transition-colors hover:bg-brand-deep"
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
              {mainNav.map((item) => (
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
              <div className="mt-2 border-t border-border pt-2">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Djelatnosti
                </p>
                {djelatnosti.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                    activeProps={{ className: "text-brand bg-secondary" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-brand bg-secondary" }}
              >
                Kontakt
              </Link>
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
