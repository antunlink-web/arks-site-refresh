import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { ServicePage } from "./zastita-na-radu";

export const Route = createFileRoute("/zastita-okolisa")({
  head: () => ({
    meta: [
      { title: "Zaštita okoliša - ARKS" },
      { name: "description", content: "Savjetovanje, dokumentacija, evidencije i podrška klijentima u ispunjavanju obveza iz područja zaštite okoliša." },
      { property: "og:title", content: "Zaštita okoliša - ARKS" },
      { property: "og:description", content: "Savjetovanje, dokumentacija, evidencije i podrška klijentima u ispunjavanju obveza iz područja zaštite okoliša." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/zastita-okolisa" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/zastita-okolisa" }],
  }),
  component: () => (
    <ServicePage
      icon={<Leaf className="h-6 w-6" />}
      eyebrow="Usluga"
      title="Zaštita okoliša"
      lead="Savjetujemo i pomažemo klijentima u ispunjavanju obveza iz područja zaštite okoliša."
      points={[
        "Savjetovanje iz područja zaštite okoliša",
        "Vođenje propisanih evidencija i očevidnika",
        "Izrada elaborata zaštite okoliša",
        "Suradnja s nadležnim tijelima",
        "Praćenje propisa i pravovremeno obavještavanje klijenata",
        "Priprema dokumentacije po zahtjevu klijenta",
      ]}
    />
  ),
});
