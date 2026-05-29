import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

const KEY = "arks_cookie_consent_v1";

function read(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function write(c: Consent) {
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!read()) setVisible(true);
  }, []);

  const save = (c: Omit<Consent, "decidedAt" | "necessary">) => {
    write({ necessary: true, ...c, decidedAt: new Date().toISOString() });
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:bottom-4 sm:left-4 sm:right-auto sm:px-0 sm:pb-0">
        <div className="mx-auto max-w-md rounded-sm border border-border bg-background p-4 shadow-lg">
          <p className="text-[13px] leading-relaxed text-foreground/80">
            Ova stranica koristi kolačiće za ispravan rad i analizu posjećenosti.
            Više informacija u{" "}
            <a href="/politika-kolacica" className="font-medium text-brand underline-offset-2 hover:underline">politici kolačića</a>
            {" "}i{" "}
            <a href="/politika-privatnosti" className="font-medium text-brand underline-offset-2 hover:underline">politici privatnosti</a>.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => save({ analytics: true, marketing: true })}
              className="rounded-sm bg-brand px-3.5 py-1.5 text-[12.5px] font-semibold text-brand-foreground hover:bg-brand-deep"
            >
              Prihvati sve
            </button>
            <button
              onClick={() => save({ analytics: false, marketing: false })}
              className="rounded-sm border border-border bg-background px-3.5 py-1.5 text-[12.5px] font-medium text-foreground hover:bg-secondary"
            >
              Odbij neobavezne
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              className="rounded-sm px-2 py-1.5 text-[12.5px] font-medium text-foreground/70 hover:text-foreground"
            >
              Postavke
            </button>
          </div>
        </div>
      </div>

      {settingsOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-sm bg-background p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl">Postavke kolačića</h3>
              <button onClick={() => setSettingsOpen(false)} aria-label="Zatvori" className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Odaberite koje kolačiće dozvoljavate. Nužni kolačići uvijek su uključeni.
            </p>

            <div className="mt-5 space-y-3">
              <Row title="Nužni kolačići" desc="Potrebni za osnovno funkcioniranje stranice." disabled checked />
              <Row title="Analitički kolačići" desc="Pomažu nam razumjeti kako se stranica koristi." checked={analytics} onChange={setAnalytics} />
              <Row title="Marketinški kolačići" desc="Koriste se za prikazivanje relevantnih sadržaja." checked={marketing} onChange={setMarketing} />
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button
                onClick={() => save({ analytics: false, marketing: false })}
                className="rounded-sm border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
              >
                Odbij neobavezne
              </button>
              <button
                onClick={() => save({ analytics, marketing })}
                className="rounded-sm bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand-deep"
              >
                Spremi postavke
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Row({
  title, desc, checked, onChange, disabled,
}: { title: string; desc: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) {
  return (
    <label className={`flex items-start justify-between gap-4 rounded-sm border border-border p-4 ${disabled ? "bg-secondary/60" : ""}`}>
      <span>
        <span className="block text-sm font-semibold text-foreground">{title}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">{desc}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 accent-[oklch(0.24_0.07_260)]"
      />
    </label>
  );
}
