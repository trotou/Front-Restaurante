import * as yup from 'yup';
import { SchemaOf } from 'yup';

const requiredField = 'Campo obrigatório';

interface RegisterProps {
  nome: string;
  salario: number | undefined;
}

interface RegisterAppProps {
  nome: string;
  salario: number | undefined;
  username?: string;
  password?: string;
}

export const userRegisterSchema: SchemaOf<RegisterProps> = yup.object().shape({
  nome: yup.string().required(requiredField),
  salario: yup
    .number()
    .typeError('Precisa especificar um número')
    .positive('precisa ser positivo'),
});

export const userRegisterAppSchema: SchemaOf<RegisterAppProps> = yup
  .object()
  .shape({
    username: yup.string().email('Email inválido'),
    password: yup.string(),
    nome: yup.string().required(requiredField),
    salario: yup
      .number()
      .typeError('Precisa especificar um número')
      .positive('precisa ser positivo')
      .integer('Preencha sem pontos ou traços'),
  });
