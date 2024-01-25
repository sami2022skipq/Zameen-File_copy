"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/fireBase";
import { useEffect } from "react";

function AuthProvider({ children }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return user;
      }
    });
  }, []);
  return <>{children}</>;
}

export default AuthProvider;
