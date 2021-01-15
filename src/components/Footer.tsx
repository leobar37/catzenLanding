import React from "react";
import SocialLinks from "./SocialLinks";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="content">
          <div className="item">
            <img
              src="/assets/images/logo_catzen_blanco.png"
              width="250px"
              alt=""
            />
            <SocialLinks></SocialLinks>
          </div>
          <div className="item">
            <h1 className="title">CONTACTO</h1>
            <p>catezencontacto@catzens.com</p>
            <p>+51920249753</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
