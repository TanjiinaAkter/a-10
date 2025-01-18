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

  // ============================ 1. USER CREATE ============================ //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ============================ 2. USER LOGIN ============================ //
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============================ 3. LOGGED IN USER OBSERVATION ============================ //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userInfo = { email: currentUser.email };

        // Fetch JWT token
        axiosPublic
          .post("/jwt", userInfo)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
            }
          })
          .finally(() => setLoading(false)); // Ensure loading state is set to false after token fetching
      } else {
        setUser(null);
        localStorage.removeItem("access-token");
        setLoading(false); // Make sure loading state is set to false when no user is logged in
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [axiosPublic, auth]);

  // ============================ 4. LOGOUT USER ============================ //
  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  // ============================ 5. USER EMAIL VERIFY ============================ //
  const emailVerify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser).finally(() =>
      setLoading(false)
    );
  };

  // ============================ 6. RESET PASSWORD ============================ //
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email).finally(() => setLoading(false));
  };

  // ============================ 7. UPDATE USER PROFILE ============================ //
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).finally(() => setLoading(false)); // Set loading to false after updating
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
