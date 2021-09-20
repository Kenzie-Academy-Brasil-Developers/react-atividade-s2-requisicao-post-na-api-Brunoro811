import LoginForm from "../Components/LoginForm";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    backgroundColor: "rgb(25, 25, 25);",
    height: "100vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 220,
    marginTop: "50px",
  },
}));
function Login() {
  const classe = useStyles();
  const [isLoged, setIsLoged] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");
  const onSubmitFunciton = (formData) => {
    return axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((response) => {
        console.log(response);
        if (response.status) {
          setIsLoged(true);
          setMensagem("Bem vindo!");
          setStatus("Success");
        }
      })
      .catch((err) => {
        setIsLoged(true);
        setMensagem("Dados Incorretos!");
        setStatus("Error");
      });
  };
  const formShema = yup.object().shape({
    username: yup.string().required("Usuário Obtigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formShema),
  });
  return (
    <div className={classe.root}>
      <Grid container spacing={10} className={classe.container}>
        <Grid item xs={5} className={classe.item}>
          <Paper className={classe.paper} spacing={12}>
            <LoginForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmitFunciton={onSubmitFunciton}
              isLoged={isLoged}
              mensagem={mensagem}
              status={status}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
