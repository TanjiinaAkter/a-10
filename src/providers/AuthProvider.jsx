import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  // =============== 1.USER CREATE =====================//
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // =============== 2.USER LOGIN =====================//
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ===============  3.LOGGED IN USER OBSERVATION =====================//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // ===============  4.LOGOUT USER  =====================//
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // ===============  5. USER EMAIL VERIFY =====================//
  const emailVerify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  // ===============  6. USER EMAIL VERIFY =====================//
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // ===============  7  UPDATE USER PROFILE =====================//

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setLoading(false);
    });
  };
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    emailVerify,
    resetPassword,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
