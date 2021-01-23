import { useMutation, gql } from "@apollo/client";
import { Icotization } from "../models/Cotization";
const ADD_COTIZATION = gql`
  mutation addCotiozation($cotization: InputCotization) {
    createCotization(cotization: $cotization) {
      id
      name
      lastname
      email
      company
      services
      message
      phone
      time
    }
  }
`;

export const useAddCotization = () => {
  const [addCotization, { data, loading }] = useMutation(ADD_COTIZATION);

  let source;

  if (data) {
    source = data.createCotization as Icotization;
  }

  return { addCotization, data: source, loading };
};
