import * as yup from "yup";

const requiredField = "Campo obrigatório";

export const userRegisterSchema = yup.object().shape({
  nome: yup.string().required(requiredField),
});

export const userRegisterAppSchema = yup.object().shape({
  username: yup.string().email("Email inválido").required(requiredField),
  password: yup.string().required(requiredField),
  nome: yup.string().required(requiredField),
});
