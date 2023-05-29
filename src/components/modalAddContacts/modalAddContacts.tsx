import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddContactchema } from "./validator";
import { useContext } from "react";
import { Context } from "../../pages/providers/authProvider";
import { ModalAddContact } from "./style";

export function ModalFormAddContacts({ setModalAddContacts, clientId }) {
  const { postContacts } = useContext(Context);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(AddContactchema),
  });

  const onSubmit = async (data) => {
    const body = { ...data, clientId: clientId };

    postContacts(body);
    setModalAddContacts(false);
  };

  return (
    <ModalAddContact>
      <div className="modal">
        <div className="titleModal">
          <h2>Cadastrar contatos</h2>

          <button onClick={() => setModalAddContacts(false)}>X</button>
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

          <button className="addContact" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </ModalAddContact>
  );
}
