import { useContext, useEffect, useState } from "react";

import { CardList } from "../../components/cards";
import { ModalFormAdd } from "../../components/modalAddClients/modalAddClients";

import { Cliente, Context } from "../providers/authProvider";
import { useNavigate } from "react-router-dom";
import { StyledHome } from "./style";
import { api } from "../../services/api";

export const Home = () => {
  // const { clients, getClients } = useContext(Context);
  const navigate = useNavigate();
  const [clients, setClients] = useState<Cliente[]>([]);
  const [modalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/");
    }

    (async () => {
      const response = await api.get("/clients");

      const data = response.data;

      setClients(data);
    })();
  }, [navigate]);

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHome>
      <div className="buttonSair">
        <button onClick={logout}>Sair</button>
      </div>
      <section className="clients">
        <h1>Clientes</h1>
        <div>
          <button
            className="clientbutton"
            type="button"
            onClick={() => setModalAdd(true)}
          >
            Cadastrar
          </button>
          {modalAdd && <ModalFormAdd setModalAdd={setModalAdd} />}
        </div>
      </section>

      <section className="container">
        <ul className="listClients">
          {Array.isArray(clients) &&
            clients.map((client) => (
              <CardList key={client.id} client={client} />
            ))}
        </ul>
      </section>
    </StyledHome>
  );
};
