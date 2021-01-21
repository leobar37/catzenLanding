import Nav from "@components/Nav";
import SocialLinks from "@components/SocialLinks";
import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Footer from "@components/Footer";
import Head from "next/head";
import NextLink from "next/link";
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
const Services = () => {
  const services: { name: string; link: string }[] = [
    {
      name: "Contenido audiovisual",
      link: "",
    },
    {
      name: "marketing digital",
      link: "",
    },
    {
      name: "paginas web",
      link: "",
    },
    {
      name: "fotografía",
      link: "",
    },
    {
      name: "publicidad online",
      link: "",
    },
  ];

  return (
    <section className="services d-flex justify-content-center align-items-center flex-column">
      <h1 className="title text-center">Servicios</h1>
      <div className="items">
        {services.map((item, i) => (
          <button className="item" key={i}>
            <span>{item.name}</span>
            <div className="icon">
              <img src="/assets/icons/arrow.svg" alt="" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

const GaleryReson = () => {
  return (
    <section className="galery_reason">
      <h1 className="title text-center">
        ¿Ques es lo que debe tener en cuenta una empresa?
      </h1>
      <Swiper
        autoplay
        loop
        navigation
        pagination
        breakpoints={{
          0: { navigation: false },
          425: { navigation: true },
          768: { navigation: true },
        }}
        className="sllidereason"
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="image">
            <img src="/assets/images/slider/one.jpg" alt="" />
          </div>
          <div className="cover"></div>
          <div className="content">
            <div className="content_reason">
              <h2 className="title">Crear contenido de calidad</h2>
              <p className="paragraph">
                La mayoría de las empresas esta descubriendo que una de las
                maneras mas eficaces de crecer es fidelizando a clientes y una
                de las maneras más efectivas de hacerlo es crear contenido
                entorno a tu marca (Inboud Marketing)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src="/assets/images/slider/one.jpg" alt="" />
          </div>
          <div className="cover"></div>
          <div className="content">
            <div className="content_reason">
              <h2 className="title">Crear contenido de calidad</h2>
              <p className="paragraph">
                La mayoría de las empresas esta descubriendo que una de las
                maneras mas eficaces de crecer es fidelizando a clientes y una
                de las maneras más efectivas de hacerlo es crear contenido
                entorno a tu marca (Inboud Marketing)
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Catzen</title>
      </Head>
      <Nav />
      <div className="hero margin_of_nav">
        <Container>
          <header className="header">
            {/* left */}
            <div className="header__text">
              <h1 className="title">¡Haz notar tu empresa!</h1>
              <p>
                Disponemos de un equipo especializado en la creación de paginas
                web, contenido audiovisual, fotografía y marketing digital
              </p>
              <NextLink href="/contact">
                <Button variant="primary">cotizar</Button>
              </NextLink>
            </div>
            {/* right */}
            <div className="header__image">
              <img src="/assets/images/bocina.svg" alt="" />
            </div>
          </header>
        </Container>
        <div className="addon_rect">
          <Container>
            <SocialLinks />
          </Container>
        </div>
      </div>
      {/* about  */}
      <Container>
        <section className="element_info">
          <div className="element_info__text">
            <h1 className="title">Sobre catzen</h1>
            <p className="paragraph">
              Somos una empresa que pone a disposición una serie de servicios
              con el fin de promover tu marca y convertir prospectos en clientes
              además proponemos soluciones innovadores para lograrlo
            </p>
            <Button variant="primary">ver más</Button>
          </div>
          <div className="element_info__image">
            <img src="/assets/images/computer.svg" alt="" />
          </div>
        </section>
      </Container>

      <div className="addon_rect"></div>
      {/* services */}
      <Container>
        <Services />
      </Container>
      {/* what should a company take  into account */}
      <GaleryReson />

      {/* take your business to next level  */}
      <Container>
        <section className="element_info two">
          <div className="element_info__text">
            <h1 className="title">LLEVA TU EMPRESA AL SIGUIENTE NIVEL</h1>
            <p className="paragraph">
              Haz crecer tu marca haciendo que más personas conozcan de ellas ,
              aprovecha el poder de las redes sociales, es momento de empezar a
              demostrarle al mundo que tan bueno es tu producto.
            </p>
            <Button variant="primary">ver más</Button>
          </div>
          <div className="element_info__image">
            <img src="/assets/images/company.svg" alt="" />
          </div>
        </section>
      </Container>
      <div className="addon_rect two" style={{ marginTop: "-70px" }}></div>
      {/* clients */}
      <section className="clients">
        <Container>
          <h1 className="title text-center">Nuestros Clientes</h1>
          <p className="paragraph text-center">
            Impedit dicta rerum recusandae distinctio cupiditate omnis. Numquam
            quia et molestias quia laudantium voluptas ea in facere.
            Reprehenderit et sapiente aut autem nulla maiores. Ut est modi
            officiis culpa. Nisi ut qui voluptatum nisi.
          </p>
        </Container>
        <div className="addon_rect clients_slider">
          <Container>
            <Swiper
              loop
              autoplay
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                0: { slidesPerView: 1 },
              }}
            >
              <SwiperSlide>
                <img src="/assets/images/logos/jeanpaul.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/logos/ccb.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/logos/wellenesslogo.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/logos/rae.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>
      </section>
      {/*testimonials */}
      <section className="testimonial">
        <h1 className="title text-center text-capitalize">testimonios</h1>
        <Swiper
          centeredSlides={true}
          breakpoints={{
            1300: { slidesPerView: 3 },
            1200: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <div className="testimonial__card">
              <div className="image">
                <div className="image_center">
                  <img src="/assets/images/persons/rae.jpg" alt="" />
                </div>
              </div>
              <div className="card_header">
                <h3 className="title">Roberto Agurto</h3>
                <span className="caption">ceo wellnessPro</span>
              </div>
              <div className="card_body">
                <p className="paragraph">
                  Pariatur aut ut. Et voluptates voluptatem ut quae. Explicabo
                  maiores illo expedita iusto illum quibusdam aspernatur saepe.
                  Rerum consequatur eos velit in. Rerum aut laudantium optio.
                  Velit odit amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__card">
              <div className="image">
                <div className="image_center">
                  <img src="/assets/images/persons/rae.jpg" alt="" />
                </div>
              </div>
              <div className="card_header">
                <h3 className="title">Roberto Agurto</h3>
                <span className="caption">ceo wellnessPro</span>
              </div>
              <div className="card_body">
                <p className="paragraph">
                  Pariatur aut ut. Et voluptates voluptatem ut quae. Explicabo
                  maiores illo expedita iusto illum quibusdam aspernatur saepe.
                  Rerum consequatur eos velit in. Rerum aut laudantium optio.
                  Velit odit amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__card">
              <div className="image">
                <div className="image_center">
                  <img src="/assets/images/persons/jeanpaul.jpg" alt="" />
                </div>
              </div>
              <div className="card_header">
                <h3 className="title">Jean Paul</h3>
                <span className="caption">ceo JeanPaulCoach</span>
              </div>
              <div className="card_body">
                <p className="paragraph">
                  Pariatur aut ut. Et voluptates voluptatem ut quae. Explicabo
                  maiores illo expedita iusto illum quibusdam aspernatur saepe.
                  Rerum consequatur eos velit in. Rerum aut laudantium optio.
                  Velit odit amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </>
  );
}
