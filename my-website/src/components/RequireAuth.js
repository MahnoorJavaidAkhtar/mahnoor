import React from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function RequireAuth({ children }) {
  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  if (user === undefined) return <p>Loading...</p>;
  if (user === null) window.location.href = "/signin";

  return children;
}
