/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import IOSSwitch from '../IosSwitch';
import {
  userRegisterAppSchema,
  userRegisterSchema,
} from '../../Schemas/schemas';
import { P1, P2, P3 } from './styles';
import { StyledButton, StyledInput, useStyles } from '../../Helpers/styles';
import { handleClose } from '../../Store/slices/openSlicer';
import { registerForm } from '../../Store/slices/servicesSlicer';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const [state, setState] = useState<boolean>(false);

  const handleSwitch = () => {
    setState(!state);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const clear = () => {
    dispatch(handleClose());
  };

  const handleForm = async (data: any) => {
    if (!data.password) {
      data.password = '';
      data.registrado = false;
    }
    if (!data.salario) {
      data.salario = 0;
    }
    data.online = state;
    data.cargo = value;

    dispatch(registerForm(data));
    clear();
  };

  const formik = useFormik({
    initialValues: {
      username: null,
      password: '',
      salario: null,
      nome: '',
    },
    validationSchema:
      value === 'Atendente' || value === 'Entregador'
        ? userRegisterAppSchema
        : userRegisterSchema,
    onSubmit: (values) => {
      handleForm(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <FormControl variant="filled">
        <InputLabel>Cargo</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          label="Cargo"
          className={classes.hideIconPadding}
          disableUnderline
          inputProps={{
            className: classes.textStyle,
          }}
        >
          <MenuItem value="Atendente">Atendente</MenuItem>
          <MenuItem value="Entregador">Entregador</MenuItem>
          <MenuItem value="Caixa">Caixa</MenuItem>
          <MenuItem value="Garçom">Garçom</MenuItem>
        </Select>

        <P1>
          Atendentes ou entregadores (as), possuirão acesso ao aplicativo de
          pedidos.
          <Link color="secondary" href="http://google.com">
            Acesse esse link no celular
          </Link>
        </P1>
      </FormControl>

      <FormControlLabel
        control={<IOSSwitch checked={state} onChange={handleSwitch} />}
        label={state ? 'Online' : 'Offline'}
        style={{ margin: '3% 0 5%' }}
      />

      <StyledInput
        id="nome"
        type="text"
        label="Nome"
        margin="normal"
        variant="outlined"
        inputProps={{ className: classes.textStyle }}
        value={formik.values.nome}
        onChange={formik.handleChange}
        error={formik.touched.nome && Boolean(formik.errors.nome)}
        helperText={formik.touched.nome && formik.errors.nome}
      />

      <StyledInput
        id="salario"
        type="number"
        label="Salário"
        margin="normal"
        variant="outlined"
        inputProps={{ className: classes.textStyle }}
        value={formik.values.salario}
        onChange={formik.handleChange}
        error={formik.touched.salario && Boolean(formik.errors.salario)}
        helperText={formik.touched.salario && formik.errors.salario}
      />

      <P2>
        Não se preocupe ao preencher o salário, ele ficará visível no sistema
        somente com a senha mestre
      </P2>

      {value === 'Atendente' || value === 'Entregador' ? (
        <>
          <P3>Acesso ao aplicativo</P3>

          <StyledInput
            id="username"
            type="email"
            label="Email"
            margin="normal"
            variant="outlined"
            inputProps={{ className: classes.textStyle }}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />

          <StyledInput
            id="password"
            label="Senha para acessar o App"
            type="password"
            margin="normal"
            variant="outlined"
            inputProps={{ className: classes.textStyle }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </>
      ) : null}

      <StyledButton type="submit" variant="contained" color="secondary">
        PRONTO
      </StyledButton>
    </form>
  );
};

export default RegisterForm;
