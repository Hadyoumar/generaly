"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#", label: "Accueil" },
    { href: "#groupe", label: "Présentation" },
    { href: "#activites", label: "Activités" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center">
            <Image
              src="/logo.png"
              alt="Generaly"
              width={44}
              height={44}
              priority
              className="object-contain"
            />
          </div>

          <div className="leading-none">
            <p className="text-base font-bold tracking-[0.22em] text-[#111111] md:text-lg md:tracking-[0.25em]">
              GENERALY
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-black/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#0f3d91]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3d91] md:inline-flex"
        >
          Nous contacter
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#111111] md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#f7f5ef] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#111111]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/70 px-4 py-4"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#111111] px-4 py-4 text-center text-white"
            >
              Nous contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}