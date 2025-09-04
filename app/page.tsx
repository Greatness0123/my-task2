"use client";
import { useEffect, useState } from "react";
import CookieNoticeModal from "../components/CookieNoticeModal";
import PersonalPage from "./personal/page";

export default function Home() {
  const [showCookie, setShowCookie] = useState(true);

  const handleAcceptAll = () => setShowCookie(false);

  useEffect(() => {
    setShowCookie(true);
  }, []);

  return (
    <>
      <PersonalPage />
      <CookieNoticeModal open={showCookie} onAcceptAll={handleAcceptAll} />
    </>
  );
}
