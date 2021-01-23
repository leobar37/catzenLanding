import { Icotization } from "./../models/Cotization";
import * as yup from "yup";

const IS_EMAIL = "Email Invalido";
const IS_REQUIRED = "Este campo es requerido";
const IS_MIN = "Este campo requiere minimo {{number}} digitos";
export const schemaContact = yup.object({
  name: yup.string().required(IS_REQUIRED),
  lastname: yup.string().required(IS_REQUIRED),
  phone: yup
    .string()
    .required(IS_REQUIRED)
    .min(8, IS_MIN.replace("{{number}}", "" + 8)),
  company: yup.string().required(IS_REQUIRED),
  email: yup.string().required(IS_REQUIRED).email(IS_EMAIL),
  services: yup.array().min(1, "Debe seleccionar al menos un servicio"),
  message: yup.string().required("El mensaje es requerido"),
});
