"use client";
import { useState } from "react";
import styles from "./OpenAccountModal.module.css";

interface OpenAccountModalProps {
  open: boolean;
  onClose: () => void;
}

export default function OpenAccountModal({ open, onClose }: OpenAccountModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2 className={styles.header}>Open a Bobble Account</h2>
        <p className={styles.subtext}>Start your journey with Bobble in just a few steps.</p>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Full Name" required />
          <input className={styles.input} type="email" placeholder="Email Address" required />
          <input className={styles.input} type="tel" placeholder="Phone Number" required />
          <button className={styles.submitBtn} type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}
