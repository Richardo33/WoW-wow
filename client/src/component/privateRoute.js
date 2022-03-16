import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { SubsContext } from "./hook/subscribeContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [state, dispacth] = useContext(SubsContext);

  return state.isSubs ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRoute;
