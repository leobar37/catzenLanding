import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Container } from "react-bootstrap";
import SocialLinks from "@components/SocialLinks";
import { gsap } from "gsap";

function Nav() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const containNav = useRef(null);
  const routineAnimation = useRef<GSAPTimeline | null>(null);

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

  useEffect(() => {
    routineAnimation.current = gsap.timeline({ paused: true });
    routineAnimation.current.to(containNav.current, {
      height: "100vh",
      backgroundColor: "#2b2d42",
    });
    console.log("load", routineAnimation);
  });

  const activeMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    // setVisibleMenu(!visibleMenu)
    if (routineAnimation.current) {
      routineAnimation.current?.play();
    }
  };

  return (
    <div ref={containNav} className={`contain_nav ${visibleMenu && "open"}`}>
      <Container>
        <nav className="">
          <div className="d-flex mt-4 flex-row justify-content-between align-items-center">
            <NextLink href="/" passHref>
              <a href="" className="logo">
                <img width="200" src="/assets/images/logo_catzen.png" alt="" />
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
                <NextLink key={i} href={item.route} passHref>
                  <a> {item.name}</a>
                </NextLink>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Nav;

/*
   <ul className="menu_navbar">
     
          {itemsMenu.map((item, i) => (
            <NextLink key={i} href={item.route} passHref>
              <a> {item.name}</a>
            </NextLink>
          ))}
        </ul>
 */
