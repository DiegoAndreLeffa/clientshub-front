import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddClientchema } from "./validator";
import { useContext } from "react";
import { Context } from "../../pages/providers/authProvider";
import { ModalAttContact } from "./style";

import { AiOutlineClose } from "react-icons/ai";

export const ModalFormAttContacts = ({
  setModalAttContacts,
  clientId,
  contact,
}) => {
  const { attContacts } = useContext(Context);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(AddClientchema),
  });

  const onSubmit = async (data) => {
    attContacts(data, contact.id, clientId);
    setModalAttContacts(false);
  };

  return (
    <ModalAttContact>
      <div className="modal">
        <div className="titleModal">
          <h2>Atualizar Contato</h2>

          <button onClick={() => setModalAttContacts(false)}>
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

          <button className="attContact" type="submit">
            Atualizar
          </button>
        </form>
      </div>
    </ModalAttContact>
  );
};
