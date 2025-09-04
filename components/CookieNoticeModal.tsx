"use client";
import { useState } from "react";
import styles from "./CookieNoticeModal.module.css";
import ManageCookiesModal from "./ManageCookiesModal";

interface CookieNoticeModalProps {
  open: boolean;
  onAcceptAll: () => void;
}

export default function CookieNoticeModal({ open, onAcceptAll }: CookieNoticeModalProps) {
  const [showManage, setShowManage] = useState(false);
  if (!open && !showManage) return null;

  // Show overlay if any modal is open
  return (
    <>
      {(open && !showManage) && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.text}>
              We use cookies to improve your experience, analyze site usage, and assist in our marketing efforts. Cookies help us remember your preferences, provide personalized content, and deliver relevant ads. Some cookies are necessary for the website to function, while others help us understand how you use our site. You can manage your cookie preferences at any time. For more information, see our privacy policy. By clicking "Accept All", you consent to our use of cookies.
            </div>
            <div className={styles.btnRow}>
              <button className={styles.manageBtn} onClick={() => setShowManage(true)}>Manage Cookies</button>
              <button className={styles.acceptBtn} onClick={onAcceptAll}>Accept All</button>
            </div>
          </div>
        </div>
      )}
      {showManage && (
  <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.15)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ManageCookiesModal open={true} onClose={() => setShowManage(false)} onAcceptAll={onAcceptAll} />
        </div>
      )}
    </>
  );
}
