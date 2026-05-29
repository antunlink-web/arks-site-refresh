import { createFileRoute } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import { ServicePage } from "./zastita-na-radu";

export const Route = createFileRoute("/zastita-od-pozara")({
  head: () => ({
    meta: [
      { title: "Zaštita od požara — ARKS d.o.o." },
      { name: "description", content: "Usluge zaštite od požara: planovi, procjene, osposobljavanje i pregledi u poslovnim objektima." },
      { property: "og:title", content: "Zaštita od požara — ARKS d.o.o." },
      { property: "og:description", content: "Planovi, procjene i izobrazba iz područja ZOP-a." },
      { property: "og:url", content: "/zastita-od-pozara" },
    ],
    links: [{ rel: "canonical", href: "/zastita-od-pozara" }],
  }),
  component: () => (
    <ServicePage
      icon={<Flame className="h-6 w-6" />}
      eyebrow="Usluga"
      title="Zaštita od požara"
      lead="Pružamo podršku u izradi planova zaštite od požara i provedbi propisanih mjera u poslovnim objektima."
      points={[
        "Izrada planova i procjena zaštite od požara",
        "Osposobljavanje pučanstva za provedbu mjera ZOP-a",
        "Pregledi i savjetovanje u poslovnim objektima",
        "Pomoć pri ispunjavanju zakonskih obveza iz ZOP-a",
        "Vođenje propisane dokumentacije i evidencija",
        "Stručna podrška u komunikaciji s nadležnim tijelima",
      ]}
    />
  ),
});
