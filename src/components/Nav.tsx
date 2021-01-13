import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Container } from "react-bootstrap";

const Logo = ({ img }: { img: string }) => {
  return (
    <div className="logo">
      <img src={img} alt="" width="150" />
    </div>
  );
};

function Nav() {
  const itemsMenu: { name: string; route: string }[] = [
    {
      name: "Inicio",
      route: "",
    },
    {
      name: "Servicios",
      route: "",
    },
    {
      name: "Portafolio",
      route: "",
    },
    {
      name: "Contacto",
      route: "",
    },
  ];

  return (
    <Container>
      <nav className="d-flex  my-2 flex-row justify-content-around align-items-center">
        <Logo img="/assets/images/logo_black.png" />
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
