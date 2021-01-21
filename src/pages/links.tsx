import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NextImage from "next/image";
import SocialLinks from "@components/SocialLinks";
import { CSSTransition } from "react-transition-group";
import Head from "next/head";
function Links() {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    console.log(transition);

    setTransition(true);
    return () => {
      console.log("transition close");

      setTransition(false);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <CSSTransition classNames="link" timeout={300} in={transition}>
        <div className="bg_primary links">
          <Container>
            <div className="links__container">
              <NextImage
                objectFit="contain"
                className="logo_link"
                objectPosition="center"
                src="/assets/images/logos/catzenlogo.svg"
                width={200}
                height={200}
              />
              <p className="paragraph">
                Disponemos de un equipo especializado en la creación de paginas
                web, contenido audiovisual, fotografía y marketing digital
              </p>
              <SocialLinks />
              <ul className="links__list">
                <a className="item_link">
                  <i className="fas fa-globe icon"></i>
                  <p>página web</p>
                </a>
                <a className="item_link">
                  <i className="fas fa-rss icon"></i>
                  <p>Visita nuestro Blog</p>
                </a>
                <a className="item_link">
                  <img
                    width="30"
                    className="icon"
                    src="/assets/icons/cotizar.svg"
                    alt=""
                  />
                  <p>Solicita una cotización</p>
                </a>
              </ul>
              <a href="" className="links_created">
                create by <span style={{ fontStyle: "italic" }}>Catzen</span>
              </a>
            </div>
          </Container>
        </div>
      </CSSTransition>
    </>
  );
}

export default Links;
