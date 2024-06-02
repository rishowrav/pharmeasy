import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // current user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });
  }, [user]);

  // login with google
  const GoogleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  // sending data from context
  const dataInfo = {
    createUser,
    loginUser,
    setUser,
    user,
    loading,
    logOut,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
