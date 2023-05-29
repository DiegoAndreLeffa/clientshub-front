import { Link, useNavigate } from "react-router-dom";

import { ModalFormAtt } from "../../components/modalAttClients/modalAttClients";
import { useContext, useEffect, useState } from "react";
import { ModalFormRemove } from "../../components/modalRemoveClients/modalRemoveClients";
import { ModalFormAddContacts } from "../../components/modalAddContacts/modalAddContacts";

import { Contacts, Context } from "../providers/authProvider";
import { ModalFormAttContacts } from "../../components/modalAttContacts/modalAttContacts";
import { ModalFormRemoveContacts } from "../../components/modalRemoveContacts/modalRemoveContacts";
import { StyledDashboard } from "./style";

import { FaUserCircle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { jsPDF } from "jspdf";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { client, setClient } = useContext(Context);

  const [modalAtt, setModalAtt] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [modalAddContacts, setModalAddContacts] = useState(false);
  const [modalAttContacts, setModalAttContacts] = useState(false);
  const [modalRemoveContacts, setModalRemoveContacts] = useState(false);

  const [contact, setContact] = useState();

  const attContact = (contacts) => {
    setModalAttContacts(true);
    setContact(contacts);
  };
  const removeContact = (contacts) => {
    setModalRemoveContacts(true);
    setContact(contacts);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);

    doc.text("Cliente:", 10, 10);
    doc.text(`ID: ${client?.id}`, 10, 20);
    doc.text(`Nome: ${client?.fullName}`, 10, 30);
    doc.text(`Email: ${client?.email}`, 10, 40);
    doc.text(`Telefone: ${client?.telephone}`, 10, 50);

    if (Array.isArray(client?.contacts)) {
      doc.text("Contatos:", 10, 60);
      let yOffset = 70;
      let currentPage = 1;
      const maxContactsPerPage = 4;

      client.contacts.forEach((contact, index) => {
        if (index % maxContactsPerPage === 0 && index > 0) {
          doc.addPage();
          currentPage++;
          yOffset = 10;
        }

        yOffset += 3;

        doc.text(`ID: ${contact.id}`, 10, yOffset);
        doc.text(`Nome: ${contact.fullName}`, 10, yOffset + 10);
        doc.text(`Email: ${contact.email}`, 10, yOffset + 20);
        doc.text(`Telefone: ${contact.telephone}`, 10, yOffset + 30);

        yOffset += 50;
      });

      for (let i = 1; i <= currentPage; i++) {
        doc.setPage(i);
        doc.text(
          `Página ${i} de ${currentPage}`,
          10,
          doc.internal.pageSize.height - 10
        );
      }
    }

    doc.save("Relatório Cliente.pdf");
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/");
    }

    const clientDataString = localStorage.getItem("clientData");
    const clientData = clientDataString ? JSON.parse(clientDataString) : null;

    if (clientData) {
      setClient(clientData);
    }
  }, [navigate, setClient]);

  return (
    <StyledDashboard>
      <div className="buttonVoltar">
        <Link to={"/home"}>Voltar</Link>
      </div>
      <h1>Cliente</h1>
      <section className="sectionClient">
        {modalAtt && (
          <ModalFormAtt setModalAtt={setModalAtt} clientId={client?.id} />
        )}
        {modalRemove && (
          <ModalFormRemove
            setModalRemove={setModalRemove}
            clientId={client?.id}
          />
        )}
        {modalAddContacts && (
          <ModalFormAddContacts
            setModalAddContacts={setModalAddContacts}
            clientId={client?.id}
          />
        )}
        {modalAttContacts && (
          <ModalFormAttContacts
            setModalAttContacts={setModalAttContacts}
            clientId={client?.id}
            contact={contact}
          />
        )}

        {modalRemoveContacts && (
          <ModalFormRemoveContacts
            setModalRemoveContacts={setModalRemoveContacts}
            clientId={client?.id}
            contact={contact}
          />
        )}

        <div className="icon">
          <FaUserCircle className="iconClient" />
        </div>
        <div className="client">
          <div className="divButtons">
            <span>
              <b>Id: </b> <br />
              {client?.id}
            </span>
            <div>
              <button onClick={() => setModalAtt(true)}>Atualizar</button>
              <button onClick={() => setModalRemove(true)}>Remover</button>
            </div>
          </div>
          <div className="infoClient">
            <p className="name">
              <b>Nome: </b> <br /> {client?.fullName}
            </p>
            <p className="email">
              <b>Email: </b> <br />
              {client?.email}
            </p>
            <p className="phone">
              <b>Telefone: </b> <br />
              {client?.telephone}
            </p>
          </div>
        </div>
      </section>
      <section className="contacts">
        <h2>Contatos</h2>

        <button onClick={() => setModalAddContacts(true)}>
          Cadastrar contatos
        </button>
      </section>
      <section className="container">
        <ul className="listContacts">
          {Array.isArray(client?.contacts) &&
            client?.contacts.map((contacts: Contacts) => (
              <li className="liContacts" key={contacts.id}>
                <div className="iconContact">
                  <BsFillTelephoneFill className="iconContactPhone" />
                </div>
                <div className="contact">
                  <div className="divButtons">
                    <span>
                      <b>Id: </b> <br />
                      {contacts.id}
                    </span>
                    <div className="buttonsAtt">
                      <button onClick={() => attContact(contacts)}>
                        Editar Contato
                      </button>
                      <button onClick={() => removeContact(contacts)}>
                        Excluir Contato
                      </button>
                    </div>
                  </div>
                  <div className="infoContact">
                    <p className="fullName">
                      <b>Nome: </b> <br />
                      {contacts.fullName}
                    </p>
                    <p className="email">
                      <b>Email: </b> <br />
                      {contacts.email}
                    </p>
                    <p className="phone">
                      <b>Telefone: </b> <br />
                      {contacts.telephone}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <div className="pdf">
        <button className="buttonPdf" onClick={exportToPDF}>
          Exportar PDF
        </button>
      </div>
    </StyledDashboard>
  );
};
