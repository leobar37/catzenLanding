import React from "react";
import NavBar from "@components/Nav";
import Footer from "@components/Footer";
function Services() {
  return (
    <>
      <NavBar />
      {/* service */}
      {/* audiovisual */}
      <section className="service">
        <div className="service__image">
          <img src="/assets/images/services/audiovisuales.png" alt="" />
        </div>
        <div className="service__text">
          <div className="content">
            <h2 className="title">Contenido Audiovisual</h2>
            <p className="paragraph">
              La mayoría de los compradores en línea concretan sus compras
              finales gracias al contenido audiovisual que brindan las empresas
              para promocionar su contenido es por eso que es de vital
              importancia tenerlo en cuenta
            </p>
          </div>
        </div>
      </section>
      {/* photographer */}
      <section className="service reverse">
        <div className="service__text">
          <div className="content">
            <h2 className="title">Fotografía</h2>
            <p className="paragraph">
              Muestra lo bueno que es tu producto y lo bien que luce cuando se
              usa ,captura experiencias que le podrían interesar a futuros
              clientes o simplemente inmortaliza un recuerdo
            </p>
          </div>
        </div>
        <div className="service__image">
          <img src="/assets/images/services/fotografia.png" alt="" />
        </div>
      </section>
      {/* digital marketing */}
      <section className="service">
        <div className="service__image">
          <img src="/assets/images/services/marketing_digital.png" alt="" />
        </div>
        <div className="service__text">
          <div className="content">
            <h2 className="title">Marketing Digital</h2>
            <p className="paragraph">
              Contamos con un equipo de estrategas digitales,redactores,
              programadores, community manager dispuestos ha hacer que tu
              negocio crezca y consiga captar el mayor número de leads posibles
            </p>
          </div>
        </div>
      </section>
      {/*  web developer */}
      <section className="service reverse">
        <div className="service__text">
          <div className="content">
            <h2 className="title">Paginas web</h2>
            <p className="paragraph">
              Las paginas web toman un rol importante en la automatización y la
              captación de leads potenciales, tener una te va ayudar a mejorar
              tus campañas , y tener una mejor captación de audiencia
            </p>
          </div>
        </div>
        <div className="service__image">
          <img src="/assets/images/services/paginas_web.png" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
