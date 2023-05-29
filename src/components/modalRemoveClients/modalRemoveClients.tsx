import { useContext } from "react";
import { Context } from "../../pages/providers/authProvider";
import { ModalRemoveClient } from "./style";

import { AiOutlineClose } from "react-icons/ai";

export const ModalFormRemove = ({ setModalRemove, clientId }) => {
  const { removeClients } = useContext(Context);

  const Remove = async () => {
    removeClients(clientId);
    setModalRemove(false);
  };

  return (
    <ModalRemoveClient>
      <div className="modal">
        <div className="titleModal">
          <h2>Remover Cliente</h2>

          <button onClick={() => setModalRemove(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <button className="removeClient" type="button" onClick={Remove}>
          Remover
        </button>
      </div>
    </ModalRemoveClient>
  );
};
