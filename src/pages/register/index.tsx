import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, Registerchema } from "./validator";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../providers/authProvider";
import { StyledRegister } from "./style";

export const Register = () => {
  const { registers } = useContext(Context);

  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(Registerchema),
  });

  return (
    <StyledRegister>
      <div className="container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(registers)}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Nome..."
            />
          </div>

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

          <button className="buttonRegister" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="buttonLogin">
          <Link to="/">Login</Link>
        </div>
      </div>
    </StyledRegister>
  );
};
