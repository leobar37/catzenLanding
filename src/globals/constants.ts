import { domain } from "process";

export const servicesCheckbox = [
  {
    label: "Fotografía",
    value: "Fotografia",
  },
  {
    label: "Diseño de páginas web",
    value: "Diseño de páginas web",
  },

  {
    label: "Social Media",
    value: "Diseño de páginas web",
  },
  {
    label: "Tiendas Online / Ecommerce",
    value: "Tiendas Online / Ecommerce",
  },
  {
    label: "Publicidad Online",
    value: "Publicidad Online",
  },
  {
    label: "Audiovisuales",
    value: "Audiovisuales",
  },
];

export const DERECTIONDEFAULT = "http://catzens.com/";
export const uribackend =
  process.env.NEXT_PUBLIC_HOST || "https://app.catzens.com";
