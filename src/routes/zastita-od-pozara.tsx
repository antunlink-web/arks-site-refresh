import { createFileRoute } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import { ServicePage } from "./zastita-na-radu";

export const Route = createFileRoute("/zastita-od-pozara")({
  head: () => ({
    meta: [
      { title: "Zaštita od požara - ARKS" },
      { name: "description", content: "Izrada planova i procjena zaštite od požara, pregledi, savjetovanje i pomoć pri ispunjavanju zakonskih obveza iz ZOP-a." },
      { property: "og:title", content: "Zaštita od požara - ARKS" },
      { property: "og:description", content: "Izrada planova i procjena zaštite od požara, pregledi, savjetovanje i pomoć pri ispunjavanju zakonskih obveza iz ZOP-a." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://arks.hr/zastita-od-pozara" },
      { property: "og:image", content: "https://arks.hr/og-image.png" },
      { property: "og:locale", content: "hr_HR" },
    ],
    links: [{ rel: "canonical", href: "https://arks.hr/zastita-od-pozara" }],
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
