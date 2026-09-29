import React from "react";
import { ArrowRight, Heart, Home, FlaskConical, Drama } from "lucide-react";
import { hero, features } from "../mock";
import useReveal from "../hooks/useReveal";

const icons = { home: Home, flask: FlaskConical, drama: Drama };

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------------------------- HERO ---------------------------------- */
export const Hero = () => {
  useReveal();
  return (
    <section id="top" className="relative pt-6 md:pt-10 overflow-hidden" data-testid="hero-section">
      {/* decorative corners */}
      <img src="/art/branch-topleft.png" alt="" className="pointer-events-none select-none absolute -left-2 top-16 w-[210px] anim-sway hidden sm:block" />
      <img src="/art/branch-topright.png" alt="" className="pointer-events-none select-none absolute right-0 top-[60px] w-[110px] md:w-[145px] anim-sway" />
      <img src="/art/bee.png" alt="" className="pointer-events-none select-none absolute right-[14%] top-[110px] w-[64px] anim-drift hidden md:block" />
      <img src="/art/flowers-left.png" alt="" className="pointer-events-none select-none absolute -left-3 top-[300px] w-[150px] md:w-[215px] hidden sm:block" />
      <img src="/art/lavender-right.png" alt="" className="pointer-events-none select-none absolute -right-2 top-[380px] w-[100px] md:w-[144px] hidden md:block" />

      <div className="max-w-[1180px] mx-auto px-6 md:px-10 pt-6 md:pt-8 pb-12">
        <div className="grid md:grid-cols-[minmax(0,300px)_1fr] lg:grid-cols-[minmax(0,330px)_1fr] gap-8 md:gap-10 items-center">
          {/* Logo */}
          <div className="reveal flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/50 blur-2xl" />
              <img
                src="/art/logo.png"
                alt="Saffron Wonders logo - a crocus flower growing from intertwined trees"
                className="relative w-[230px] sm:w-[260px] md:w-[300px] lg:w-[330px] anim-float"
                data-testid="hero-logo"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="relative text-center md:text-left reveal reveal-delay-1">
            <img src="/Saffron-wonders-2/art/village-hero.png" alt="" className="pointer-events-none select-none hidden lg:block absolute -right-16 top-8 w-[280px] xl:w-[300px] opacity-95" />
            <div className="relative lg:pr-[220px] xl:pr-[240px]">
              <h1 className="font-display font-semibold leading-[0.9] tracking-tight" data-testid="hero-title">
                <span className="block text-purple text-[64px] sm:text-[80px] md:text-[92px]">
                  {hero.titleA}
                  <span className="inline-block align-top ml-3 mt-3 text-purple" aria-hidden>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 20 L11 12" /><path d="M8 25 L16 17" /><path d="M15 27 L21 21" />
                    </svg>
                  </span>
                  <Heart className="inline-block ml-1 -mt-2 text-purple" size={30} strokeWidth={1.8} aria-hidden />
                </span>
                <span className="block text-orange text-[64px] sm:text-[80px] md:text-[92px]">{hero.titleB}</span>
              </h1>

              <div className="flex md:justify-start justify-center my-3" aria-hidden>
                <Heart size={12} className="text-purple fill-[#4d2a86]" />
              </div>

              <p className="font-label uppercase tracking-[0.3em] text-[12px] sm:text-[13px] font-semibold text-purple leading-relaxed" data-testid="hero-tagline">
                {hero.tagline[0]}
                <br />
                {hero.tagline[1]}
              </p>

              <p className="mt-5 text-[17px] leading-relaxed text-[#5a5262] max-w-[420px] mx-auto md:mx-0" data-testid="hero-intro">
                {hero.intro} <span className="font-semibold text-purple">{hero.highlights}</span>
              </p>

              <button className="sw-btn mt-7" onClick={() => scrollTo("#what-we-do")} data-testid="hero-cta">
                {hero.cta} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* soft path curve */}
      <svg className="sw-path bottom-0 w-full h-[70px]" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,70 L0,70 Z" fill="#f9efe1" />
      </svg>
    </section>
  );
};

/* -------------------------------- FEATURES -------------------------------- */
export const Features = () => {
  useReveal();
  return (
    <section id="what-we-do" className="relative bg-[#f9efe1] pt-14 pb-20 md:pb-28 overflow-hidden scroll-mt-16" data-testid="features-section">
      <img src="/art/butterfly.png" alt="" className="pointer-events-none select-none absolute right-[8%] top-[70px] w-[60px] anim-drift hidden md:block" />

      <div className="max-w-[1180px] mx-auto px-6 md:px-10 text-center">
        <div className="reveal inline-flex items-center gap-3">
          <span className="sw-eyebrow">
            <Heart size={11} className="fill-[#d9711e] text-[#d9711e]" /> {features.label}
          </span>
        </div>
        <h2 className="reveal reveal-delay-1 font-display font-semibold text-purple text-[44px] sm:text-[56px] md:text-[64px] leading-[1.02] mt-4 tracking-tight" data-testid="features-heading">
          {features.headingA} <em className="text-orange not-italic font-display italic">{features.headingB}</em>
        </h2>
        <p className="reveal reveal-delay-2 mt-4 text-[17px] text-[#5a5262]">{features.sub}</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-16 xl:gap-24 mt-14 md:mt-16">
          {features.items.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <article
                key={f.id}
                className={`sw-card reveal reveal-delay-${i + 1} flex flex-col items-center ${i === 1 ? "lg:mt-10" : ""}`}
                data-testid={`feature-card-${f.id}`}
              >
                <div className="w-full max-w-[360px] aspect-[16/10] overflow-hidden rounded-[28px]">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className={`-mt-7 relative z-10 w-14 h-14 rounded-full ${f.tint} flex items-center justify-center shadow-[0_10px_24px_-12px_rgba(77,42,134,0.4)] ring-4 ring-[#f9efe1]`}>
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="font-display font-semibold text-purple text-[28px] mt-4 leading-tight">{f.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-[#5a5262] max-w-[260px]">{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <svg className="sw-path bottom-0 w-full h-[70px]" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden>
        <path d="M0,30 C260,70 520,0 760,35 C1000,70 1240,20 1440,45 L1440,70 L0,70 Z" fill="#fdf6ec" />
      </svg>
    </section>
  );
};
