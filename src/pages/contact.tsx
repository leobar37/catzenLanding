import React from "react";
import NavBar from "@components/Nav";
import { Container } from "react-bootstrap";
import { FloatInput, FloatInputText } from "@components/custom/FloatInput";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Footer from "@components/Footer";
function Contact() {
  return (
    <>
      <NavBar />
      <section className="contact margin_of_nav">
        <h1 className="contact_title">
          Cuentanos un poco de tú empresa, queremos ayudarte
        </h1>
        <Container className="d-flex justify-content-center">
          <form action="" className="form">
            <div className="inputs">
              <FloatInput label="Nombres" placeholder="Elmer Joselito" />
              <FloatInput label="Apellidos" placeholder="León Barboza" />
              <FloatInput label="Correo" placeholder="catzen@catzen.com" />
              <FloatInput label="Teléfono" placeholder="+51920249753" />
              <FloatInput label="Empresa" placeholder="catzen" />
            </div>
            <div className="check_services">
              <h3>servicios en los que esta interesado*:</h3>
              {/* documentation  in https://pretty-checkbox-react.netlify.app/docs/ */}
              <Checkbox style={{ color: "white" }}>Fotografía</Checkbox>
              <Checkbox style={{ color: "white" }}>
                Diseño de páginas web
              </Checkbox>
              <Checkbox>Social Media</Checkbox>
              <Checkbox>Tiendas Online / Ecommerce</Checkbox>
              <Checkbox>Publicidad Online</Checkbox>
              <Checkbox>Audiovisuales</Checkbox>
            </div>
            {/* subject */}
            <FloatInputText label="Mensaje" />
            {/* button */}
            <button className="btn_catzen">cotizar</button>
          </form>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
