import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import { useServices } from "../../Providers/Services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import IOSSwitch from "../IosSwitch";
import {
  userRegisterAppSchema,
  userRegisterSchema,
} from "../../Schemas/schemas";
import { PmsgError, P1, P2, P3 } from "./styles";
import { StyledButton, StyledInput, useStyles } from "../../Helpers/styles";

const RegisterForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const [error, setError] = useState(false);
  const { registerForm, handleClose } = useServices();

  const handleSwitch = () => {
    setState(!state);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver:
      value === "Atendente" || value === "Entregador"
        ? yupResolver(userRegisterAppSchema)
        : yupResolver(userRegisterSchema),
  });

  const clear = () => {
    reset();
    handleClose();
  };

  const handleForm = async (data) => {
    if (!data["password"]) {
      data["password"] = "";
      data["registrado"] = false;
    }
    if (!data["salario"]) {
      data["salario"] = 0;
    }
    data["online"] = state;
    data["cargo"] = value;

    const registered = await registerForm(data);
    registered ? clear() : setError(true);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      style={{ display: "flex", flexDirection: "column" }}
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
          <MenuItem value={"Atendente"}>Atendente</MenuItem>
          <MenuItem value={"Entregador"}>Entregador</MenuItem>
          <MenuItem value={"Caixa"}>Caixa</MenuItem>
          <MenuItem value={"Garçom"}>Garçom</MenuItem>
        </Select>

        <P1>
          Atendentes ou entregadores (as), possuirão acesso ao aplicativo de
          pedidos.
          <Link color="secondary"> Acesse esse link no celular</Link>
        </P1>
      </FormControl>

      <FormControlLabel
        control={<IOSSwitch checked={state} onChange={handleSwitch} />}
        label={state ? "Online" : "Offline"}
        style={{ margin: "3% 0 5%" }}
      />

      <StyledInput
        name="nome"
        type="text"
        label="Nome"
        margin="normal"
        variant="filled"
        inputProps={{ className: classes.textStyle }}
        InputProps={{
          disableUnderline: true,
        }}
        {...register("nome")}
        error={!!errors.nome}
        helperText={errors.nome?.message}
      />

      <StyledInput
        name="salario"
        type="number"
        label="Salário"
        margin="normal"
        variant="filled"
        InputProps={{ disableUnderline: true }}
        inputProps={{ className: classes.textStyle }}
        {...register("salario")}
        error={!!errors.salario}
        helperText={errors.salario?.message}
      />

      <P2>
        Não se preocupe ao preencher o salário, ele ficará visível no sistema
        somente com a senha mestre
      </P2>

      {value === "Atendente" || value === "Entregador" ? (
        <>
          <P3>Acesso ao aplicativo</P3>

          <StyledInput
            name="username"
            type="email"
            label="Email"
            margin="normal"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            inputProps={{ className: classes.textStyle }}
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          {error && <PmsgError>Email já cadastrado</PmsgError>}

          <StyledInput
            name="password"
            label="Senha para acessar o App"
            type="password"
            margin="normal"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            inputProps={{ className: classes.textStyle }}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
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
