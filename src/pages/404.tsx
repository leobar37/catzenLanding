import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Button } from "react-bootstrap";
import LinkNext from "next/link";
const NotFound = () => {
  return (
    <>
      <Nav />
      <Container>
        <div className="notfound">
          <Image
            className="notfound__image"
            src={"/assets/images/404.svg"}
            objectFit="contain"
            width={1000}
            height={500}
          />
          <p className="paragraph">No hemos podido encontrar está pagina</p>
          <LinkNext href="/">
            <Button className="w-10">Inicio</Button>
          </LinkNext>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
