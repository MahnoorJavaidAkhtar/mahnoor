import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./signin.module.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  // ⭐ FIX: Only run Firebase on client side, not SSR
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Layout>Loading...</Layout>;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (err) {
      setError("Wrong email or password");
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/";
    } catch (err) {
      setError("Google login failed");
    }
  };

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Welcome MJ Robotic Academy</h1>

          {error && <p className={styles.error}>{error}</p>}

          <form className={styles.form} onSubmit={handleSignIn}>
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

            <button type="submit" className={styles.signinBtn}>
              SIGN IN
            </button>

            <button type="button" className={styles.googleBtn} onClick={googleLogin}>
              Sign in with Google
            </button>
          </form>

          <p className={styles.bottomText}>
            <a href="/forgot">Forgot Password?</a>
          </p>

          <p className={styles.bottomText}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

