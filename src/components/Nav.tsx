import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Container } from "react-bootstrap";
import SocialLinks from "@components/SocialLinks";
import { gsap } from "gsap";
import { CSSTransition } from "react-transition-group";

function Nav() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const containNav = useRef(null);

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
  const animateNavExit = (el: HTMLElement) => {
    const logo = el.querySelector(".logo");
    console.log(logo);
    gsap
      .timeline()
      .to(el, { height: "10vh", backgroundColor: "#ffffff" }, 0)
      .fromTo(logo, { opacity: 0 }, { opacity: 1 }, 0);
  };

  const animateNavEnter = (el: HTMLElement) => {
    const logo = el.querySelector(".logo");
    const items = el.querySelectorAll(".menu_navbar a");

    gsap
      .timeline()
      .to(el, { height: "100vh", backgroundColor: "#2b2d42" }, 0)
      .to(logo, { opacity: 0 }, 0)
      .fromTo(
        items,
        { x: 150 },
        { stagger: 0.2, ease: "elastic.easeInOut", x: 0, duration: 0.2 },
        0.3
      );
  };

  const activeMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setVisibleMenu(!visibleMenu);
    // if (routineAnimation.current) {
    //   routineAnimation.current?.play();
    // }
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
            <div className="d-flex mt-4 flex-row justify-content-between align-items-center">
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
    </CSSTransition>
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
