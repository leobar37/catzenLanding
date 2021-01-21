import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Container } from "react-bootstrap";
import SocialLinks from "@components/SocialLinks";

import { CSSTransition } from "react-transition-group";
import { animateNavEnter, animateNavExit } from "@animations/Nav";
function Nav() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const containNav = useRef(null);

  const itemsMenu: { name: string; route: string }[] = [
    {
      name: "Inicio",
      route: "",
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

  const activeMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setVisibleMenu(!visibleMenu);
  };

  return (
    <CSSTransition
      in={visibleMenu}
      timeout={200}
      classNames="open"
      onEnter={(el: any) => animateNavEnter(el)}
      onExited={(el: any) => animateNavExit(el)}
    >
      <div ref={containNav} className={`contain_nav animate__animated`}>
        <Container>
          <nav className="">
            <div className="d-flex  flex-row justify-content-between align-items-center">
              <NextLink href="/" passHref>
                <a href="" className="logo">
                  <img
                    width="200"
                    src="/assets/images/logo_catzen.png"
                    alt=""
                  />
                </a>
              </NextLink>
              {/* bars */}
              <a href="" className="menu" onClick={(e) => activeMenu(e)}>
                <i className="fas fa-bars"></i>
              </a>
            </div>
            {/* menu */}
            <div className="sub_nav">
              <div className="sub_nav__info">
                <Image
                  objectFit="contain"
                  src="/assets/images/cat_alone.svg"
                  width={400}
                  height={350}
                  className="image"
                />
                <h1 className="title">Catzen</h1>
                <SocialLinks />
              </div>
              <ul className="menu_navbar">
                {itemsMenu.map((item, i) => (
                  <NextLink key={i} href={`/${item.route}`} passHref>
                    <a> {item.name}</a>
                  </NextLink>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </CSSTransition>
  );
}

export default Nav;
