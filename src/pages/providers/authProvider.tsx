import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../login/validator";
import { RegisterData } from "../register/validator";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Cliente {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  registerDate: Date;
  user: User;
  contacts: Contacts[];
}

export interface Contacts {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  registerDate: Date;
  clientId: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  getClient: (id: string) => void;
  client: Cliente | undefined;
  clients: Cliente[];
  setClient: React.Dispatch<React.SetStateAction<Cliente | undefined>>;
  setClients: React.Dispatch<React.SetStateAction<Cliente[]>>;
  postClients: (data: Cliente) => void;
  postContacts: (data: Contacts) => void;
  attClients: (clientId: string, dataForm: Cliente) => void;
  removeClients: (id: string) => void;
  attContacts: (data: Contacts, contactId: string, clientId: string) => void;
  removeContacts: (contactId: string, clientId: string) => void;
  loading: boolean;
  singIn: (data: LoginData) => void;
  registers: (data: RegisterData) => void;
  getClients: () => void;
}

export const Context = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const Provider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState<Cliente>();
  const [clients, setClients] = useState<Cliente[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      setLoading(false);

      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, [navigate]);

  const singIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@token", token);

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const registers = async (data: RegisterData) => {
    try {
      const response = await api.post("/register", data);

      navigate("/");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const getClients = async () => {
    try {
      const response = await api.get("/clients");

      const data = response.data;

      setClients(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClient = async (id: string) => {
    try {
      const response = await api.get<Cliente>(`/clients/${id}`);

      const client = response.data;

      setClient(client);
      localStorage.setItem("clientData", JSON.stringify(client));
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const postClients = async (data: Cliente) => {
    try {
      const response = await api.post(`/clients`, data);

      getClients();
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const attClients = async (clientId: string, dataForm: Cliente) => {
    try {
      const response = await api.patch<Cliente>(
        `clients/${clientId}`,
        dataForm
      );

      setClient(response.data);
      return getClient(clientId);
    } catch (error) {
      console.error(error);
    }
  };

  const removeClients = async (clientId: string) => {
    try {
      const response = await api.delete(`clients/${clientId}`);

      navigate("/home");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const postContacts = async (data: Contacts) => {
    try {
      const clientId = data.clientId;
      const response = await api.post(`/contacts`, data);

      return getClient(clientId), response;
    } catch (error) {
      console.error(error);
    }
  };

  const attContacts = async (
    data: Contacts,
    contactId: string,
    clientId: string
  ) => {
    try {
      const response = await api.patch(`contacts/${contactId}`, data);

      return getClient(clientId), response;
    } catch (error) {
      console.error(error);
    }
  };

  const removeContacts = async (contactId: string, clientId: string) => {
    try {
      const response = await api.delete(`Contacts/${contactId}`);

      return getClient(clientId), response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Context.Provider
      value={{
        getClient,
        client,
        setClient,
        postClients,
        postContacts,
        attClients,
        removeClients,
        attContacts,
        removeContacts,
        loading,
        singIn,
        registers,
        getClients,
        clients,
        setClients,
      }}
    >
      {children}
    </Context.Provider>
  );
};
