import { useContext } from "react";
import { Context } from "../../pages/providers/authProvider";
import { ModalRemoveContact } from "./style";

import { AiOutlineClose } from "react-icons/ai";

export const ModalFormRemoveContacts = ({
  setModalRemoveContacts,
  clientId,
  contact,
}) => {
  const { removeContacts } = useContext(Context);

  const Remove = async () => {
    removeContacts(contact.id, clientId);
    setModalRemoveContacts(false);
  };

  return (
    <ModalRemoveContact>
      <div className="modal">
        <div className="titleModal">
          <h2>Remover Cliente</h2>

          <button onClick={() => setModalRemoveContacts(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <button className="removeContact" type="button" onClick={Remove}>
          Remover
        </button>
      </div>
    </ModalRemoveContact>
  );
};
