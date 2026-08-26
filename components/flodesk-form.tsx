"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Video } from "lucide-react";
import { brand } from "@/lib/data";

const whatsappLink = `https://wa.me/${brand.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I just submitted an inquiry through your website.")}`;

// Add the final customer video files to public/videos using these names, or replace
// the sources with hosted MP4/WebM URLs. Native video controls work on desktop/mobile.
const thankYouVideos = [
  { title: "Welcome and what happens next", src: "/videos/welcome.mp4" },
  { title: "How to prepare for our conversation", src: "/videos/next-steps.mp4" }
];

function ThankYouContent({ onReturnToForm }: { onReturnToForm: () => void }) {
  return (
    <section className="rounded-[24px] bg-ink p-6 text-white shadow-soft sm:p-10" aria-labelledby="thank-you-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Submission confirmed</p>
        <h2 id="thank-you-title" className="mt-4 font-heading text-3xl font-bold sm:text-5xl">Thank you — your form was received.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">Your information has been submitted successfully. I&apos;ll review it and get in touch using the details you provided.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1f7a4d] px-6 py-3 font-semibold text-white transition hover:bg-[#17633d]"><MessageCircle size={19} aria-hidden="true" /> Contact us on WhatsApp</a>
          <button type="button" onClick={onReturnToForm} className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">Return to booking form</button>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-8" aria-labelledby="videos-title">
        <div className="flex items-center gap-3"><Video className="text-gold" size={23} aria-hidden="true" /><h3 id="videos-title" className="font-heading text-2xl font-bold">Watch the required videos</h3></div>
        <p className="mt-2 text-white/65">You can watch these here without leaving this page. Each player includes native controls and supports mobile playback.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {thankYouVideos.map((video) => <div key={video.src} className="overflow-hidden rounded-2xl bg-black/30"><h4 className="px-4 py-3 font-semibold">{video.title}</h4><video className="aspect-video w-full bg-black" controls preload="metadata" playsInline><source src={video.src} type="video/mp4" />Your browser does not support embedded video.</video></div>)}
        </div>
      </div>
    </section>
  );
}

export function FlodeskForm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const submissionStartedRef = useRef(false);
  const submittedRef = useRef(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (submitted) return;

    let cancelled = false;
    let cleanupInjectedForm = () => {};
    async function loadForm() {
      const response = await fetch("/flodesk-form.html");
      if (!response.ok) throw new Error("Unable to load form");
      const html = await response.text();
      if (cancelled || !rootRef.current) return;
      rootRef.current.innerHTML = html;
      const config = rootRef.current.querySelector<HTMLElement>("[data-ff-config]");
      if (config) config.dataset.ffConfig = btoa(JSON.stringify({ trigger: { mode: "immediately", value: 0 }, onSuccess: { mode: "message", message: "" }, coi: false, showForReturnVisitors: true, notification: false, gdpr: { acceptsMarketing: false, privacyPolicy: { enabled: false, mandatory: false } }, trackingConfig: { metaPixelId: "", cookieBannerEnabled: false, googleAnalyticsId: "" } }));
      Array.from(rootRef.current.querySelectorAll("script")).forEach((script) => { const replacement = document.createElement("script"); Array.from(script.attributes).forEach((attribute) => replacement.setAttribute(attribute.name, attribute.value)); replacement.textContent = script.textContent; script.replaceWith(replacement); });
      const form = rootRef.current.querySelector("form");
      if (!form) return;
      const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const syncState = () => {
        const stage = rootRef.current?.querySelector<HTMLElement>('[data-ff-el="root"]')?.dataset.ffStage;
        const hasSuccess = stage === "success" || form.classList.contains("fd-has-success");
        const hasError = stage === "error" || form.classList.contains("fd-has-error");
        // The success view is owned by this component and has no timer, close
        // action, redirect, or dependency on the injected form's DOM.
        if (hasSuccess && submissionStartedRef.current && !submittedRef.current) {
          submittedRef.current = true;
          submittingRef.current = false;
          setError("");
          setSubmitted(true);
        } else if (hasError && !submittedRef.current) {
          submittingRef.current = false;
          submissionStartedRef.current = false;
          if (submitButton) { submitButton.disabled = false; submitButton.removeAttribute("aria-busy"); }
          setError("We couldn’t submit your form. Please check your details and try again.");
        }
      };
      const onSubmit = (event: Event) => {
        if (submittingRef.current || submittedRef.current) { event.preventDefault(); return; }
        submittingRef.current = true;
        submissionStartedRef.current = true;
        setError("");
        if (submitButton) { submitButton.disabled = true; submitButton.setAttribute("aria-busy", "true"); }
      };
      form.addEventListener("submit", onSubmit);
      const observer = new MutationObserver(syncState);
      observer.observe(rootRef.current, { attributes: true, attributeFilter: ["class", "data-ff-stage"], subtree: true });
      syncState();
      cleanupInjectedForm = () => { form.removeEventListener("submit", onSubmit); observer.disconnect(); };
    }
    loadForm().catch(() => { if (rootRef.current) rootRef.current.textContent = "Unable to load the form. Please refresh and try again."; });
    return () => { cancelled = true; cleanupInjectedForm(); };
  }, [submitted]);

  if (submitted) {
    return <ThankYouContent onReturnToForm={() => {
      submittedRef.current = false;
      submissionStartedRef.current = false;
      submittingRef.current = false;
      setSubmitted(false);
    }} />;
  }
  return <div aria-live="polite">{error && <p role="alert" className="mb-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}<div ref={rootRef} className="flodesk-shell w-full overflow-hidden" /></div>;
}
