import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "./signin.module.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset link sent to your email!");
    } catch (err) {
      setMessage("Email not found!");
    }
  };

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Reset Password</h1>

          {message && <p className={styles.success}>{message}</p>}

          <form className={styles.form} onSubmit={handleReset}>
            <label className={styles.label}>Enter your email</label>
            <input
              type="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className={styles.signinBtn}>
              Send Reset Link
            </button>
          </form>

          <p className={styles.bottomText}>
            Back to <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
