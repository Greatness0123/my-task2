"use client";
import { useState } from "react";
import styles from "./ManageCookiesModal.module.css";

interface ManageCookiesModalProps {
  open: boolean;
  onClose: () => void;
  onAcceptAll: () => void;
}

export default function ManageCookiesModal({ open, onClose, onAcceptAll }: ManageCookiesModalProps) {
  const [performance, setPerformance] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2 className={styles.header}>Manage Cookies</h2>
        <div className={styles.cookieGroup}>
          <div className={styles.cookieTitle}>Necessary Cookies <span className={styles.alwaysActive}>| always active</span></div>
          <div className={styles.cookieDesc}>These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as logging in, filling forms, or setting your privacy preferences.</div>
        </div>
        <div className={styles.cookieGroup}>
          <div className={styles.cookieTitle}>
            <span>Performance Cookies</span>
            <label className={styles.toggleSwitch}>
              <input
                type="checkbox"
                checked={performance}
                onChange={() => setPerformance(v => !v)}
                title="Enable performance cookies"
              />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.cookieDesc}>These cookies help us understand how visitors interact with our website, such as which pages are most popular and if users get error messages from web pages. All information these cookies collect is aggregated and therefore anonymous.</div>
        </div>
        <div className={styles.cookieGroup}>
          <div className={styles.cookieTitle}>
            <span>Advertising Cookies</span>
            <label htmlFor="advertising-cookies" className={styles.toggleSwitch}>
              <input
                id="advertising-cookies"
                type="checkbox"
                checked={advertising}
                onChange={() => setAdvertising(v => !v)}
                title="Enable advertising cookies"
              />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.cookieDesc}>These cookies are used to deliver advertisements more relevant to you and your interests. They may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</div>
        </div>
        <div className={styles.btnRow}>
          <button className={styles.saveBtn} onClick={onClose}>Save Settings</button>
          <button className={styles.acceptBtn} onClick={onAcceptAll}>Accept All</button>
        </div>
      </div>
    </div>
  );
}
