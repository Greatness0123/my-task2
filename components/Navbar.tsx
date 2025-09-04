"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import OpenAccountModal from "./OpenAccountModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  // Manual active state for pill, retained until another link is clicked
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-10 z-50 bg-transparent">
      <div className="mx-auto flex h-12 max-w-7xl items-center px-4">
        <div className="flex items-center gap-4">
          <Image
            src="/bobble-white.png"
            alt="Brand Logo"
            width={110}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="hidden ml-20 items-center py-2 px-3 gap-8 md:flex rounded-full backdrop-blur-xl bg-blue-100/40">
          <div className="flex items-center px-4 mr-10">
            <Link href="/personal"
              className={`px-4 py-1 rounded-full transition-colors ${pathname === '/personal' ? 'bg-white  text-black font-semibold' : 'hover:bg-white/60 hover:text-blue-700'}`}
            >Personal</Link>
            <Link href="/business"
              className={`px-4 py-1 rounded-full transition-colors ml-4 ${pathname === '/business' ? 'bg-white  text-black font-semibold' : 'hover:bg-white/60 hover:text-blue-700'}`}
            >Business</Link>
            <span className="inline-block w-8" />
            <Link href="/about"
              className={`px-4 py-1 rounded-full transition-colors ${pathname === '/about' ? 'bg-white  text-black font-semibold' : 'hover:bg-white/60 hover:text-blue-700'}`}
            >About Us</Link>
            <Link
              href="/business#faq"
              className={`px-4 py-1 rounded-full transition-colors ml-4 ${pathname === '/business' ? 'bg-white  text-black font-semibold' : 'hover:bg-white/60 hover:text-blue-700'}`}
            >FAQs</Link>
            <Link href="/contact"
              className={`px-4 py-1 rounded-full transition-colors ml-4 ${pathname === '/contact' ? 'bg-white  text-black font-semibold' : 'hover:bg-white/60 hover:text-blue-700'}`}
            >Contact</Link>
            <Link href="/blog"
              className={`px-4 py-1 rounded-full transition-colors ml-4 ${pathname === '/blog' ? 'bg-white  text-black font-semibold' : 'hover:bg-white/60 hover:text-blue-700'}`}
            >Blog</Link>
          </div>
          <button
            className="rounded-full bg-blue-600 px-10 py-2 ml-10 text-white flex items-center justify-center text-base font-semibold min-w-[180px]"
            onClick={() => setShowAccountModal(true)}
          >
            Open an Account
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden rounded p-2 hover:bg-gray-100 ml-60"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 py-3 bg-white text-black">
            <Link href="/personal" className="py-2">Bobble Personal</Link>
            <Link href="/business" className="py-2">Bobble Business</Link>
            <Link href="/about" className="py-2">About Us</Link>
            <Link href="/faq" className="py-2">Contact us</Link>
            <Link href="/contact" className="py-2">FAQs</Link>
            <Link href="/blog" className="py-2">Blog</Link>
            <div className="grid grid-cols-2 gap-3 w-full py-4 border-t">
              <button className="flex items-center justify-center text-white bg-black rounded-full px-3 py-2 gap-2 w-full">
                <Image
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  width={30}
                  height={25}
                  color="white"
                />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs">Get it on</span>
                  <span className="text-base font-semibold">Playstore</span>
                </div>
              </button>
              <button className="flex items-center justify-center text-white bg-black rounded-full px-3 py-2 gap-2 w-full">
                <Image
                  src="/apple.png"
                  alt="Download on Apple Store"
                  width={30}
                  height={25}
                  color="white"
                />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs">Download on</span>
                  <span className="text-base font-semibold">Apple Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <OpenAccountModal open={showAccountModal} onClose={() => setShowAccountModal(false)} />
    </nav>
  );
};

export default Navbar;
