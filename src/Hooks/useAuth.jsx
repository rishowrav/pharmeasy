import { useContext } from "react";

// @ts-ignore
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const data = useContext(AuthContext);

  return data;
};

export default useAuth;
