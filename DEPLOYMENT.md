# ARKS — Upute za produkcijsko postavljanje (Apache / Plesk)

Ovaj projekt je izrađen u TanStack Start / React + Vite. Za statičko hostanje na
Apache / Plesk poslužitelju koristi se **klijentski (SPA) build**, s
`.htaccess` datotekom koja preusmjerava sve rute na `index.html`.

## 1. Build

Iz korijena projekta:

```bash
bun install
bun run build
```

Rezultat je u direktoriju `dist/` (statički HTML, JS, CSS, slike i favicon).

> Napomena: TanStack Start template inače cilja Cloudflare Worker SSR.
> Za Apache/Plesk se koristi klijentski build i `.htaccess` iz
> `public/.htaccess` (automatski se kopira u `dist/`).

## 2. Postavljanje na Plesk

1. U Pleskovom **File Manageru** otvori `httpdocs/` (ili odgovarajući root domene).
2. Obriši postojeći sadržaj (napravi backup ako je potrebno).
3. Prenesi kompletan sadržaj `dist/` direktorija u `httpdocs/`.
4. Provjeri da je `.htaccess` prenesen (Plesk File Manager ponekad skriva
   datoteke koje počinju s točkom — uključi *Show hidden files*).
5. U Plesku, pod **Apache & nginx Settings**, potvrdi da su omogućeni:
   - `mod_rewrite`
   - `mod_headers`
   - `mod_expires`
   - `mod_deflate`
6. Otvori domenu u pregledniku i provjeri sve rute:
   - `/`
   - `/o-nama`
   - `/zastita-na-radu`
   - `/zastita-od-pozara`
   - `/zastita-okolisa`
   - `/kontakt`
   - `/politika-privatnosti`
   - `/politika-kolacica`

## 3. Google Maps ključ

Za produkcijsku domenu, u **Google Cloud Console** dodaj domenu u
*HTTP referrers* dopuštene liste za korišteni API ključ:

- `https://vasa-domena.hr/*`
- `https://www.vasa-domena.hr/*`

## 4. Održavanje sadržaja

Sav vidljivi tekst nalazi se u `src/routes/*.tsx` datotekama. Nakon svake
promjene ponovno pokrenite `bun run build` i prenesite novi `dist/` sadržaj.

## 5. Kolačići

Banner za kolačiće aktivan je automatski (`src/components/site/CookieBanner.tsx`)
i sprema odabir korisnika u `localStorage` (`arks_cookie_consent_v1`).
