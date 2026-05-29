import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { ServicePage } from "./zastita-na-radu";

export const Route = createFileRoute("/zastita-okolisa")({
  head: () => ({
    meta: [
      { title: "Zaštita okoliša — ARKS d.o.o." },
      { name: "description", content: "Usluge zaštite okoliša: savjetovanje, vođenje propisanih evidencija i podrška u ispunjavanju ekoloških obveza." },
      { property: "og:title", content: "Zaštita okoliša — ARKS d.o.o." },
      { property: "og:description", content: "Savjetovanje i evidencije iz područja zaštite okoliša." },
      { property: "og:url", content: "/zastita-okolisa" },
    ],
    links: [{ rel: "canonical", href: "/zastita-okolisa" }],
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
        "Podrška pri ispunjavanju ekoloških obveza",
        "Suradnja s nadležnim tijelima",
        "Praćenje propisa i pravovremeno obavještavanje klijenata",
        "Priprema dokumentacije po zahtjevu klijenta",
      ]}
    />
  ),
});
