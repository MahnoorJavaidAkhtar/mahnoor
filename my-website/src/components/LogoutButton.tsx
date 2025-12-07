import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        signOut(auth);
        window.location.href = "/signin";
      }}
    >
      Logout
    </button>
  );
}
