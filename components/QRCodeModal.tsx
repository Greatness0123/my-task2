import React from "react";
import styles from "./QRCodeModal.module.css";
import Image from "next/image";

interface QRCodeModalProps {
  open: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2 className={styles.header}>Scan to download the Bobble app</h2>
        <div className={styles.subtext}>
          Scan the QR code or click on any of the buttons below to download the Bobble app
        </div>
        <div className={styles.qrWrap}>
          <Image src="/qrcode.png" alt="QR Code" width={180} height={180} className={styles.qrImg} />
        </div>
        <div className={styles.btnRow}>
          <button className={styles.storeBtn}>
            <Image src="/playstore1.svg" alt="Playstore" width={28} height={28} />
            <div className={styles.btnText}>
              <span>Get it on</span>
              <span className={styles.bold}>Playstore</span>
            </div>
          </button>
          <button className={styles.storeBtn}>
            <Image src="/apple1.svg" alt="Apple" width={28} height={28} />
            <div className={styles.btnText}>
              <span>Download on</span>
              <span className={styles.bold}>Apple store</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
