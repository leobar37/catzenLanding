import { NextSeoProps } from "next-seo";
import { DERECTIONDEFAULT } from "../constants";
export const pageIndex = {
  title: "Catzen",
  description: `Disponemos de un equipo especializado en la creación de paginas
  web, contenido audiovisual, fotografía y marketing digital`,
  canonical: (extra?: string) => {
    return `${DERECTIONDEFAULT}/${extra}`;
  },
  titleTemplate: "Catzen | %s",
  facebokappid: "369791231041330",
};
