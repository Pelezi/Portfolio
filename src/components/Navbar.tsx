"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const navItems = [
  { href: "/", label: "Início", icon: AiOutlineHome, end: true },
  { href: "/about", label: "Sobre", icon: AiOutlineUser, end: false },
  { href: "/project", label: "Projetos", icon: AiOutlineFundProjectionScreen, end: false },
  { href: "/experience", label: "Experiência", icon: MdWorkOutline, end: false },
];

const NavBar: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const pathname = usePathname();
  const closeNav = () => setExpand(false);

  const isActive = (href: string, end: boolean) =>
    end ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 backdrop-blur-md bg-[#0d0b1e]/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4">

        {/* Brand */}
        <Link href="/" onClick={closeNav} className="flex items-center gap-1.5 text-sm font-semibold no-underline">
          <BsStars className="text-accent text-base" />
          <span className="text-gradient font-semibold">Pelezi</span>
        </Link>

        {/* Desktop pill nav */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
          {navItems.map(({ href, label, icon: Icon, end }) => (
            <Link
              key={href}
              href={href}
              onClick={closeNav}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs no-underline transition-all duration-100 ${
                isActive(href, end)
                  ? "text-white bg-accent shadow-[0_0_20px_-4px_rgba(99,102,241,0.6)]"
                  : "text-white/70 hover:text-white hover:bg-accent/10"
              }`}
            >
              <Icon className="text-sm" />
              {label}
            </Link>
          ))}
        </div>

        {/* GitHub star button (desktop) */}
        <a
          href="https://github.com/Pelezi"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-colors no-underline"
        >
          <CgGitFork className="text-sm" />
          <AiFillStar className="text-sm" />
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden relative bg-transparent border-transparent p-2 focus:outline-none"
          onClick={() => setExpand(!expand)}
          aria-label="Toggle navigation"
        >
          <span className={`block bg-accent h-0.5 w-7 transition-all duration-300 ${expand ? "absolute left-3 top-2.5 rotate-[135deg]" : "mb-1.5"}`} />
          <span className={`block bg-accent h-0.5 w-7 transition-all duration-300 ${expand ? "invisible" : "mb-1.5"}`} />
          <span className={`block bg-accent h-0.5 w-7 transition-all duration-300 ${expand ? "absolute left-3 top-2.5 -rotate-[135deg]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {expand && (
        <div className="md:hidden mt-2 pb-3 border-t border-white/10 pt-3">
          <ul className="flex flex-col gap-1 list-none p-0 m-0">
            {navItems.map(({ href, label, icon: Icon, end }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeNav}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm no-underline transition-all ${
                    isActive(href, end)
                      ? "text-white bg-accent/20 text-accent"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="text-base" />
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-1 px-4">
              <a
                href="https://github.com/Pelezi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-colors no-underline"
              >
                <CgGitFork className="text-sm" />
                <AiFillStar className="text-sm" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
