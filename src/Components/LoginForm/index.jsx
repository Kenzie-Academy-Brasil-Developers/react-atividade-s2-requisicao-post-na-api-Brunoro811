import "./style.css";
import { TextField, Button } from "@material-ui/core";

function LoginForm({
  register,
  handleSubmit,
  errors,
  onSubmitFunciton,
  isLoged,
  mensagem,
  status,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmitFunciton)}>
      <div className="Row-Input">
        {errors.username && (
          <span className="Error">{errors.username.message}</span>
        )}
        <TextField
          {...register("username")}
          id="outlined-basic"
          label="Usuário"
          variant="outlined"
          autoComplete="current-email"
        />
      </div>
      <div className="Row-Input">
        {errors.password && (
          <span className="Error">{errors.password.message}</span>
        )}
        <TextField
          {...register("password")}
          id="outlined-password-input"
          label="Senha"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Entrar
      </Button>
      {isLoged && <p className={`${status}`}>{mensagem}</p>}
    </form>
  );
}
export default LoginForm;
