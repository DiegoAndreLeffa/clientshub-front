import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, Loginschema } from "./validator";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../providers/authProvider";
import { StyledLogin } from "./style";

export const Login = () => {
  const { singIn } = useContext(Context);
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(Loginschema),
  });

  return (
    <StyledLogin>
      <div className="container">
        <div className="titleSite">
          <h1>ClientsHub</h1>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(singIn)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Email..."
            />
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Senha..."
            />
          </div>

          <button className="buttonLogin" type="submit">
            Entrar
          </button>
        </form>
        <div className="buttonRegister">
          <Link to="/register">Registrar</Link>
        </div>
      </div>
    </StyledLogin>
  );
};
