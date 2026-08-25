"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Music2, Play, Sparkles, X, Youtube } from "lucide-react";
import { brand } from "@/lib/data";

const socialLinks = [
  { label: "Facebook", icon: Facebook, fallback: "https://example.com/metasrijan-facebook" },
  { label: "Instagram", icon: Instagram, fallback: "https://example.com/metasrijan-instagram" },
  { label: "TikTok", icon: Music2, fallback: "https://example.com/metasrijan-tiktok" },
  { label: "YouTube", icon: Youtube, fallback: "https://example.com/metasrijan-youtube" },
  { label: "LinkedIn", icon: Linkedin, fallback: "https://example.com/metasrijan-linkedin" }
];

function ThankYouModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [videoMessage, setVideoMessage] = useState("");

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = originalOverflow; previousFocusRef.current?.focus(); };
  }, [onClose]);

  const configuredSocials = new Map(brand.socials.map((social) => [social.label, social.href]));
  const whatsappLink = `https://wa.me/${brand.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I just submitted an inquiry through your website.")}`;

  return (
    <div className="success-modal fixed inset-0 z-50 grid place-items-center p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="success-modal-card relative max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-[24px] bg-white p-5 text-ink shadow-2xl sm:p-7" role="dialog" aria-modal="true" aria-labelledby="thank-you-title" aria-describedby="thank-you-message">
        <button ref={closeRef} type="button" onClick={onClose} className="focus-ring absolute right-3 top-3 grid size-10 place-items-center rounded-full border border-ink/10 text-muted transition hover:border-gold hover:text-ink" aria-label="Close thank-you message"><X size={20} /></button>
        <div className="pr-10"><div className="inline-flex items-center gap-2 rounded-full bg-gold/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold"><Sparkles size={15} aria-hidden="true" /> Submission confirmed</div><h2 id="thank-you-title" className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Congratulations!</h2><p id="thank-you-message" className="mt-2 leading-7 text-muted">Thank you for reaching out. Your form was received successfully, and I&apos;ll review your message shortly.</p></div>
        <button type="button" className="focus-ring group mt-5 aspect-video w-full overflow-hidden rounded-2xl bg-ink text-left text-white" onClick={() => setVideoMessage("Your welcome video will appear here soon.")} aria-label="Play welcome video"><span className="grid h-full place-items-center bg-[radial-gradient(circle_at_center,rgba(169,130,72,.3),transparent_55%)] p-5 text-center"><span><span className="mx-auto grid size-14 place-items-center rounded-full border border-gold/70 text-gold"><Play size={23} fill="currentColor" aria-hidden="true" /></span><span className="mt-3 block text-sm font-semibold">Watch a quick welcome</span>{videoMessage && <span className="mt-1 block text-xs text-white/60">{videoMessage}</span>}</span></span></button>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="focus-ring mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f7a4d] px-4 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17633d]"><MessageCircle size={19} aria-hidden="true" /> Chat with us on WhatsApp</a>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink/10 pt-4"><span className="text-xs font-semibold text-muted">Follow along</span><div className="flex gap-2">{socialLinks.map(({ label, icon: Icon, fallback }) => { const href = configuredSocials.get(label); const isPlaceholder = !href || href === "#"; return <a key={label} href={isPlaceholder ? fallback : href} target="_blank" rel="noreferrer" className="focus-ring grid size-9 place-items-center rounded-full border border-ink/15 text-muted transition hover:border-gold hover:text-gold" aria-label={`${label}${isPlaceholder ? " (placeholder link)" : ""}`}><Icon size={16} aria-hidden="true" /></a>; })}</div></div>
      </div>
    </div>
  );
}

export function FlodeskForm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let cleanupInjectedForm = () => {};
    async function loadForm() {
      const response = await fetch("/flodesk-form.html");
      const html = await response.text();
      if (cancelled || !rootRef.current) return;
      rootRef.current.innerHTML = html;
      const config = rootRef.current.querySelector<HTMLElement>("[data-ff-config]");
      if (config) config.dataset.ffConfig = btoa(JSON.stringify({ trigger: { mode: "immediately", value: 0 }, onSuccess: { mode: "redirect", message: "", redirectUrl: "/thankyou" }, coi: false, showForReturnVisitors: true, notification: false, gdpr: { acceptsMarketing: false, privacyPolicy: { enabled: false, mandatory: false } }, trackingConfig: { metaPixelId: "", cookieBannerEnabled: false, googleAnalyticsId: "" } }));
      Array.from(rootRef.current.querySelectorAll("script")).forEach((script) => { const replacement = document.createElement("script"); Array.from(script.attributes).forEach((attribute) => replacement.setAttribute(attribute.name, attribute.value)); replacement.textContent = script.textContent; script.replaceWith(replacement); });
      const form = rootRef.current.querySelector("form");
      if (!form) return;
      const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const syncState = () => { if (form.classList.contains("fd-has-success")) { submittingRef.current = false; if (submitButton) { submitButton.disabled = false; submitButton.removeAttribute("aria-busy"); } setShowThankYou(true); } else if (form.classList.contains("fd-has-error")) { submittingRef.current = false; if (submitButton) { submitButton.disabled = false; submitButton.removeAttribute("aria-busy"); } } };
      const onSubmit = (event: Event) => { if (submittingRef.current) { event.preventDefault(); return; } submittingRef.current = true; if (submitButton) { submitButton.disabled = true; submitButton.setAttribute("aria-busy", "true"); } };
      form.addEventListener("submit", onSubmit);
      const observer = new MutationObserver(syncState);
      observer.observe(form, { attributes: true, attributeFilter: ["class"], subtree: true });
      syncState();
      cleanupInjectedForm = () => { form.removeEventListener("submit", onSubmit); observer.disconnect(); };
    }
    loadForm().catch(() => { if (rootRef.current) rootRef.current.textContent = "Unable to load the signup form. Please refresh and try again."; });
    return () => { cancelled = true; cleanupInjectedForm(); };
  }, []);

  const closeThankYou = useCallback(() => setShowThankYou(false), []);
  return <><div ref={rootRef} className="flodesk-shell w-full overflow-hidden" aria-live="polite" />{showThankYou && <ThankYouModal onClose={closeThankYou} />}</>;
}
