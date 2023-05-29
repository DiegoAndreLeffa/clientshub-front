import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddClientchema } from "./validator";
import { useContext } from "react";
import { Context } from "../../pages/providers/authProvider";
import { ModalAttClient } from "./style";

import { AiOutlineClose } from "react-icons/ai";

export const ModalFormAtt = ({ setModalAtt, clientId }) => {
  const { attClients } = useContext(Context);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(AddClientchema),
  });

  const onSubmit = async (data) => {
    attClients(clientId, data);
    setModalAtt(false);
  };

  return (
    <ModalAttClient>
      <div className="modal">
        <div className="titleModal">
          <h2>Atualizar cliente</h2>

          <button onClick={() => setModalAtt(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

          <button className="attClient" type="submit">
            Atualizar
          </button>
        </form>
      </div>
    </ModalAttClient>
  );
};
