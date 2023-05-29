import { useContext } from "react";
import { Context } from "../pages/providers/authProvider";
import { FaUserCircle } from "react-icons/fa";
import { CardsClints } from "./styeldCards";

export const CardList = ({ client }) => {
  const { getClient } = useContext(Context);

  return (
    <CardsClints onClick={() => getClient(client.id)}>
      <div className="icon">
        <FaUserCircle className="iconClient" />
      </div>
      <div className="client">
        <div>
          <span>
            <b>Id: </b>
            <br />
            {client.id}
          </span>
        </div>

        <div className="infoClient">
          <p className="fullName">
            <b>Nome: </b>
            <br />
            {client.fullName}
          </p>
          <p>
            <b>Email: </b>
            <br />
            {client.email}
          </p>
          <p>
            <b>Telefone: </b>
            <br />
            {client.telephone}
          </p>
        </div>
      </div>
    </CardsClints>
  );
};
