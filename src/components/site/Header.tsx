import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";

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
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled ? "bg-background/95 backdrop-blur border-border shadow-sm" : "bg-background border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand text-brand-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground">ARKS</span>
            <span className="hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
              Agencija za razvoj i kontrolu sigurnosti
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+385912755257"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            +385 (0)31 275 257
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center rounded-md bg-safety px-4 py-2 text-sm font-semibold text-safety-foreground transition-colors hover:opacity-90"
          >
            Zatražite ponudu
          </Link>
        </div>

        <button
          aria-label="Otvori izbornik"
          className="grid h-10 w-10 place-items-center rounded-md text-foreground lg:hidden"
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
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-brand bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <a
                href="tel:+385912755257"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80"
              >
                <Phone className="h-4 w-4" /> +385 (0)31 275 257
              </a>
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-safety px-4 py-2.5 text-sm font-semibold text-safety-foreground"
              >
                Zatražite ponudu
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
