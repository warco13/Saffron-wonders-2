import React, { useState } from "react";
import { ArrowRight, Heart, Mail } from "lucide-react";
import { toast } from "sonner";
import { ideas, contact, footer, CONTACT_EMAIL } from "../mock";
import useReveal from "../hooks/useReveal";

/* --------------------------------- IDEAS ---------------------------------- */
export const Ideas = () => {
  useReveal();
  return (
    <section id="community" className="relative pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden scroll-mt-16" data-testid="ideas-section">
      <img src="/art/leaf-branch-right.png" alt="" className="pointer-events-none select-none absolute right-0 -top-2 w-[160px] md:w-[205px] anim-sway hidden md:block" />

      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-12 items-center">
          <div className="reveal">
            <span className="sw-eyebrow no-lines">
              <Heart size={11} className="fill-[#b39ccb] text-[#b39ccb]" /> {ideas.label}
            </span>
            <h2 className="font-display font-semibold text-purple text-[44px] sm:text-[56px] md:text-[64px] leading-[1.02] mt-5 tracking-tight" data-testid="ideas-heading">
              {ideas.line1A} <em className="text-orange">{ideas.line1B}</em>
              <br />
              {ideas.line2A} <em className="text-orange">{ideas.line2B}</em>
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.75] text-[#5a5262] max-w-[460px]">{ideas.body}</p>
            <p className="mt-6 font-display italic text-orange text-[24px] md:text-[26px] pl-1" data-testid="ideas-closing">
              {ideas.closing}
            </p>
          </div>

          <div className="reveal reveal-delay-1 relative">
            <img
              src="/art/village-signpost.png"
              alt="Watercolour view of Saffron Walden with a signpost reading Children, Community, Nature, Creativity"
              className="w-full max-w-[560px] mx-auto"
              loading="lazy"
              data-testid="ideas-illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- CONTACT --------------------------------- */
export const Contact = () => {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = "Please enter a valid email";
    if (!form.message.trim()) er.message = "Please share an idea or message";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all the fields so we can reply to you.");
      return;
    }
    const subject = encodeURIComponent(`Hello from ${form.name.trim()} - Saffron Wonders`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n—\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}`);
    const href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = href;
    toast.success("Opening your email app to send your message.", {
      description: `Sending to ${CONTACT_EMAIL}`,
    });
  };

  return (
    <section id="share-an-idea" className="relative pt-6 pb-24 md:pb-28 overflow-hidden scroll-mt-16" data-testid="contact-section">
      <div id="say-hello" className="absolute -top-16" />
      {/* blob background */}
      <div className="absolute inset-x-[-10%] top-10 bottom-0 sw-blob opacity-90 pointer-events-none" aria-hidden />
      <img src="/art/flowers-bottom-left.png" alt="" className="pointer-events-none select-none absolute -left-2 bottom-0 w-[150px] md:w-[230px] hidden sm:block" />
      <img src="/art/flowers-bottom-right.png" alt="" className="pointer-events-none select-none absolute -right-2 bottom-0 w-[130px] md:w-[200px] hidden sm:block" />
      <img src="/art/ladybird.png" alt="" className="pointer-events-none select-none absolute left-[15%] top-[60px] w-[44px] anim-float hidden md:block" />

      <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 pt-20 md:pt-28">
        <div className="grid md:grid-cols-[minmax(0,420px)_1fr] gap-10 md:gap-16 items-center">
          <div className="reveal md:pl-16">
            <span className="sw-eyebrow no-lines">
              {contact.label} <Heart size={11} />
            </span>
            <h2 className="font-display font-semibold text-purple text-[42px] sm:text-[52px] md:text-[56px] leading-[1.02] mt-4 tracking-tight" data-testid="contact-heading">
              {contact.heading[0]}
              <br />
              {contact.heading[1]}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#5a5262] max-w-[320px]">{contact.sub}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-flex items-center gap-2 text-purple hover:text-orange transition-colors text-[15px]" data-testid="contact-email-link">
              <Mail size={16} strokeWidth={1.8} /> {CONTACT_EMAIL}
            </a>
          </div>

          <form onSubmit={submit} noValidate className="reveal reveal-delay-1 w-full max-w-[560px] md:pr-8" data-testid="contact-form">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input className="sw-input" placeholder="Your name" value={form.name} onChange={update("name")} aria-label="Your name" data-testid="contact-name" />
                {errors.name && <p className="font-label text-[12px] text-[#c2571a] mt-1.5 ml-2" data-testid="error-name">{errors.name}</p>}
              </div>
              <div>
                <input className="sw-input" type="email" placeholder="Your email" value={form.email} onChange={update("email")} aria-label="Your email" data-testid="contact-email" />
                {errors.email && <p className="font-label text-[12px] text-[#c2571a] mt-1.5 ml-2" data-testid="error-email">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                className="sw-input min-h-[110px] resize-y"
                placeholder="Your idea or message"
                value={form.message}
                onChange={update("message")}
                aria-label="Your idea or message"
                data-testid="contact-message"
              />
              {errors.message && <p className="font-label text-[12px] text-[#c2571a] mt-1.5 ml-2" data-testid="error-message">{errors.message}</p>}
            </div>
            <button type="submit" className="sw-btn w-full mt-4 py-4" data-testid="contact-submit">
              {contact.button} <ArrowRight size={16} />
            </button>
            <p className="font-label text-center text-[13px] text-[#7a7282] mt-4 inline-flex w-full justify-center items-center gap-2">
              {contact.note} <Heart size={12} className="fill-[#6a3fa8] text-[#6a3fa8]" />
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------- FOOTER --------------------------------- */
export const Footer = () => (
  <footer className="relative border-t border-[#eee2d3] py-8" data-testid="footer">
    <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 font-label text-[13px] text-[#7a7282]">
      <span>
        <span className="font-display text-[18px] font-semibold"><span className="text-purple">Saffron </span><span className="text-orange">Wonders</span></span>
        <span className="ml-3">{footer.text}</span>
      </span>
      <span className="inline-flex items-center gap-4">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-purple transition-colors">{CONTACT_EMAIL}</a>
        <span>&copy; {new Date().getFullYear()}</span>
      </span>
    </div>
  </footer>
);
