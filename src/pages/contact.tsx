import React, { useState } from "react";
import NavBar from "@components/Nav";
import { Button, Container } from "react-bootstrap";
import { FloatInput, FloatInputText } from "@components/custom/FloatInput";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Footer from "@components/Footer";
import { Form, Formik, Field, FieldProps, ErrorMessage } from "formik";
import { servicesCheckbox } from "../globals/constants";
import { useAddCotization } from "@services/cotization";
import { Icotization } from "models/Cotization";
import { Modal } from "react-bootstrap";
import Loading from "@components/Loading";
import { schemaContact } from "../libs/validatorsschama";
const FieldComponent = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps) => {
  return (
    <>
      <FloatInput {...field} {...props} error={String(errors[field.name])} />
    </>
  );
};

type ContentModalProps = {
  cotization: Icotization | undefined;
};

const CotentModal = ({ cotization }: ContentModalProps) => {
  if (typeof cotization == "undefined") {
    return <></>;
  }
  return (
    <>
      <Modal.Header>
        <h3>Hola {cotization.name} recibimos tu cotización</h3>
      </Modal.Header>
      <Modal.Body>
        <p className="paragraph">
          Gracias por confiar en nosotros hemos enviado un email a
          {cotization.email} con toda la información nos comunicaremos contigo
          en el menor tiempo posible
        </p>
      </Modal.Body>
    </>
  );
};

function Contact() {
  const services = servicesCheckbox;

  const [visibleModal, setVisibleModal] = useState(false);
  const {
    addCotization,
    data: cotization,
    loading: loadinCotization,
  } = useAddCotization();

  return (
    <>
      {loadinCotization ?? <Loading />}
      <NavBar />
      <section className="contact margin_of_nav">
        <h1 className="contact_title">
          Cuentanos un poco de tú empresa, queremos ayudarte
        </h1>
        <Container className="d-flex justify-content-center">
          <Formik
            initialValues={
              {
                name: "",
                lastname: "",
                phone: "",
                company: "",
                email: "",
              } as Icotization
            }
            validationSchema={schemaContact}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values.services);

              addCotization({
                variables: {
                  cotization: {
                    ...values,
                    services: JSON.stringify(values.services),
                  },
                },
              });
              setVisibleModal(true);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, handleSubmit, isValid }) => (
              <Form action="" className="form">
                <div className="inputs">
                  <Field
                    name="name"
                    label="Nombres"
                    placeholder="Jhon Doe"
                    component={FieldComponent}
                  />
                  <Field
                    name="lastname"
                    label="Apellidos"
                    placeholder="Leon Barboza"
                    component={FieldComponent}
                  />
                  <Field
                    name="email"
                    label="Correo"
                    placeholder="example@example.com"
                    component={FieldComponent}
                  />
                  <Field
                    name="phone"
                    label="Teléfono"
                    placeholder="+51987654321"
                    component={FieldComponent}
                  />
                  <Field
                    name="company"
                    label="Empresa"
                    placeholder="Catzen"
                    component={FieldComponent}
                  />
                </div>
                <div className="check_services">
                  <h3>servicios en los que esta interesado*:</h3>
                  {/* documentation  in https://pretty-checkbox-react.netlify.app/docs/ */}
                  {services.map(({ value, label }, i) => {
                    return (
                      <Field
                        key={i}
                        name="services"
                        value={value}
                        as={Checkbox}
                      >
                        {label}
                      </Field>
                    );
                  })}
                </div>
                {/* subject */}
                <Field as={FloatInputText} name="message" label="Mensaje" />
                {!isValid && (
                  <ul className="errors">
                    <li>{errors.services}</li>
                    <li>{errors.message}</li>
                  </ul>
                )}
                <button
                  type="submit"
                  disabled={!isValid}
                  className="btn_catzen"
                >
                  cotizar
                </button>
              </Form>
            )}
          </Formik>
        </Container>
        <Modal show={visibleModal}>
          <CotentModal cotization={cotization}></CotentModal>
          <Modal.Footer>
            <Button onClick={() => setVisibleModal(false)}>ok</Button>
          </Modal.Footer>
        </Modal>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
