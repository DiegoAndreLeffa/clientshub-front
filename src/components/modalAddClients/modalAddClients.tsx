import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddClientchema } from "./validator";
import { useContext } from "react";
import { Context } from "../../pages/providers/authProvider";
import { ModalAddClient } from "./style";

import { AiOutlineClose } from "react-icons/ai";

export const ModalFormAdd = ({ setModalAdd }) => {
  const { postClients } = useContext(Context);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(AddClientchema),
  });

  const onSubmit = async (dataForm) => {
    postClients(dataForm);
    setModalAdd(false);
  };

  return (
    <ModalAddClient>
      <div className="modal">
        <div className="titleModal">
          <h2>Cadastrar cliente</h2>

          <button onClick={() => setModalAdd(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              {...register("fullName")}
              placeholder="Nome..."
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Email..."
            />
          </div>

          <div>
            <label htmlFor="telephone">Telefone:</label>
            <input
              type="text"
              id="telephone"
              {...register("telephone")}
              placeholder="Telefone..."
            />
          </div>

          <button className="addClient" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </ModalAddClient>
  );
};
