// import React, { useState } from "react";
// import Layout from "@theme/Layout";
// import styles from "./signup.module.css";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../firebaseConfig";

// export default function SignUpPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       window.location.href = "/";
//     } catch (err: any) {
//       if (err.code === "auth/email-already-in-use") {
//         setError("This email is already registered");
//       } else if (err.code === "auth/weak-password") {
//         setError("Password must be at least 6 characters");
//       } else {
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   const googleSignUp = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       window.location.href = "/";
//     } catch (err) {
//       setError("Google signup failed. Try again.");
//     }
//   };

//   return (
//     <Layout>
//       <div className={styles.pageWrapper}>
//         <div className={styles.card}>
//           <h1 className={styles.title}>Create Account</h1>

//           {error && <p className={styles.error}>{error}</p>}

//           <form className={styles.form} onSubmit={handleSignUp}>
//             <label className={styles.label}>Email</label>
//             <input
//               type="email"
//               required
//               className={styles.input}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className={styles.label}>Password</label>
//             <input
//               type="password"
//               required
//               className={styles.input}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <label className={styles.label}>Confirm Password</label>
//             <input
//               type="password"
//               required
//               className={styles.input}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />

//             <button type="submit" className={styles.signupBtn}>
//               SIGN UP
//             </button>

//             <button
//               type="button"
//               className={styles.googleBtn}
//               onClick={googleSignUp}
//             >
//               Sign up with Google
//             </button>
//           </form>

//           <p className={styles.bottomText}>
//             Already have an account? <a href="/signin">Sign In</a>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./signup.module.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // ⭐ SSR FIX for Firebase
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Layout>Loading...</Layout>;
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered");
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  const googleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/";
    } catch (err) {
      setError("Google signup failed. Try again.");
    }
  };

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create Account</h1>

          {error && <p className={styles.error}>{error}</p>}

          <form className={styles.form} onSubmit={handleSignUp}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              required
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className={styles.label}>Confirm Password</label>
            <input
              type="password"
              required
              className={styles.input}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" className={styles.signupBtn}>
              SIGN UP
            </button>

            <button
              type="button"
              className={styles.googleBtn}
              onClick={googleSignUp}
            >
              Sign up with Google
            </button>
          </form>

          <p className={styles.bottomText}>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
