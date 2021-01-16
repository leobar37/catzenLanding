import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Container } from "react-bootstrap";

function Nav() {
  const itemsMenu: { name: string; route: string }[] = [
    {
      name: "Inicio",
      route: "/",
    },
    {
      name: "Servicios",
      route: "services",
    },
    {
      name: "Portafolio",
      route: "",
    },
    {
      name: "Contacto",
      route: "contact",
    },
  ];

  return (
    <Container>
      <nav className="d-flex  mt-4 flex-row justify-content-between align-items-center">
        <NextLink href="/" passHref>
          <a href="">
            <img width="200" src="/assets/images/logo_catzen.png" alt="" />
          </a>
        </NextLink>

        <ul className="menu_navbar">
          {/* items menú */}
          {itemsMenu.map((item, i) => (
            <NextLink key={i} href={item.route} passHref>
              <a> {item.name}</a>
            </NextLink>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Nav;
