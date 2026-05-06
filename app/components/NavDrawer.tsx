"use client";

import { useState } from "react";

const countries = [
  { label: "United States", href: "https://us.escortsaffair.com" },
  { label: "Canada", href: "https://ca.escortsaffair.com" },
  { label: "Australia", href: "https://au.escortsaffair.com" },
  { label: "United Kingdom", href: "https://uk.escortsaffair.com" },
  { label: "New Zealand", href: "https://nz.escortsaffair.com" },
  { label: "India", href: "https://in.escortsaffair.com" },
  { label: "Indonesia", href: "https://id.escortsaffair.com" },
  { label: "Japan", href: "https://jp.escortsaffair.com" },
  { label: "Korea", href: "https://kr.escortsaffair.com" },
  { label: "Malaysia", href: "https://my.escortsaffair.com" },
  { label: "Philippines", href: "https://ph.escortsaffair.com" },
  { label: "Singapore", href: "https://sg.escortsaffair.com" },
  { label: "Thailand", href: "https://th.escortsaffair.com" },
  { label: "Vietnam", href: "https://vn.escortsaffair.com" },
];

export default function NavDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        aria-label="Menu"
        className="flex flex-col justify-center gap-[4px] mr-1"
        onClick={() => setOpen(true)}
      >
        <span className="block w-5 h-[3px] bg-red-hamburger rounded-sm"></span>
        <span className="block w-5 h-[3px] bg-red-hamburger rounded-sm"></span>
        <span className="block w-5 h-[3px] bg-red-hamburger rounded-sm"></span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between bg-pink-primary px-4 py-3">
          <span className="text-white font-bold text-[15px]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-white text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Main links */}
        <div className="border-b border-gray-200 py-2">
          <a
            href="https://www.escortsaffair.com/centre/home"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-[13px] font-bold text-pink-primary hover:bg-pink-50"
          >
            Home
          </a>
          <a
            href="https://www.escortsaffair.com/centre/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-[13px] font-bold text-pink-primary hover:bg-pink-50"
          >
            Login
          </a>
          <a
            href="https://www.escortsaffair.com/centre/registrations"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-[13px] font-bold text-pink-primary hover:bg-pink-50"
          >
            Sign Up
          </a>
        </div>

        {/* Countries */}
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          <p className="px-4 pt-3 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Regions</p>
          {countries.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-pink-50 hover:text-pink-primary"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
