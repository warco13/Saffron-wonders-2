import React, { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { navLinks } from "../mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`sw-nav fixed top-0 inset-x-0 z-50 ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="font-display text-[26px] md:text-[28px] font-semibold tracking-tight leading-none"
          data-testid="nav-brand"
        >
          <span className="text-purple">Saffron </span>
          <span className="text-orange">Wonders</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} className="sw-nav-link" data-testid={`nav-link-${l.href.slice(1)}`}>
              {l.label}
            </a>
          ))}
          <a href="#say-hello" onClick={(e) => go(e, "#say-hello")} className="sw-btn-soft" data-testid="nav-say-hello">
            Say hello <Heart size={14} strokeWidth={1.8} />
          </a>
        </nav>

        <button
          className="md:hidden text-purple p-2 rounded-full hover:bg-[#ebe1f6] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fdf6ec]/95 backdrop-blur border-t border-[#eadfd0] px-6 pb-6 pt-2 flex flex-col gap-3" data-testid="nav-mobile-menu">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} className="sw-nav-link text-[17px] py-2">
              {l.label}
            </a>
          ))}
          <a href="#say-hello" onClick={(e) => go(e, "#say-hello")} className="sw-btn-soft self-start mt-1">
            Say hello <Heart size={14} strokeWidth={1.8} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
