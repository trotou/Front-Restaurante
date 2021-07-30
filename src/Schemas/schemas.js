import * as yup from "yup";

const requiredField = "Campo obrigatório";

export const userRegisterSchema = yup.object().shape({
  nome: yup.string().required(requiredField),
  salario: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo"),
});

export const userRegisterAppSchema = yup.object().shape({
  username: yup.string().email("Email inválido"),
  password: yup.string(),
  nome: yup.string().required(requiredField),
  salario: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços"),
});
