import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bobble",
  description: "Bank better",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
  {/* Head is handled by Next.js metadata */}
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
