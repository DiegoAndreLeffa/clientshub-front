import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../pages/providers/authProvider";

export const Protected = () => {
  const { loading } = useContext(Context);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return <Outlet />;
};
