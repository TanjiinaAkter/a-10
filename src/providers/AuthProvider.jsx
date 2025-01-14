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
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
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
      setUser(currentUser);

      if (currentUser) {
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      // setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic, auth]);

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
// eaAQiRv6pWnpKX57
