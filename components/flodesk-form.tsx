"use client";

import { useEffect, useRef, useState } from "react";

export function FlodeskForm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const submissionStartedRef = useRef(false);
  const redirectedRef = useRef(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    let cleanupInjectedForm = () => {};
    async function loadForm() {
      const response = await fetch("/flodesk-form.html", { cache: "no-store" });
      if (!response.ok) throw new Error("Unable to load form");
      const html = await response.text();
      if (cancelled || !rootRef.current) return;
      rootRef.current.innerHTML = html;
      rootRef.current.querySelectorAll<HTMLElement>('input:not([type="hidden"]), button[type="submit"]').forEach((control) => { control.tabIndex = 0; });
      const config = rootRef.current.querySelector<HTMLElement>("[data-ff-config]");
      if (config) config.dataset.ffConfig = btoa(JSON.stringify({ trigger: { mode: "immediately", value: 0 }, onSuccess: { mode: "redirect", url: "/thank-you" }, coi: false, showForReturnVisitors: true, notification: false, gdpr: { acceptsMarketing: false, privacyPolicy: { enabled: false, mandatory: false } }, trackingConfig: { metaPixelId: "", cookieBannerEnabled: false, googleAnalyticsId: "" } }));
      Array.from(rootRef.current.querySelectorAll("script")).forEach((script) => { const replacement = document.createElement("script"); Array.from(script.attributes).forEach((attribute) => replacement.setAttribute(attribute.name, attribute.value)); replacement.textContent = script.textContent; script.replaceWith(replacement); });
      const form = rootRef.current.querySelector("form");
      if (!form) return;
      const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const syncState = () => {
        const stage = rootRef.current?.querySelector<HTMLElement>('[data-ff-el="root"]')?.dataset.ffStage;
        const hasSuccess = stage === "success" || form.classList.contains("fd-has-success");
        const hasError = stage === "error" || form.classList.contains("fd-has-error");
        if (hasSuccess && submissionStartedRef.current && !redirectedRef.current) {
          redirectedRef.current = true;
          submittingRef.current = false;
          setError("");
          window.location.assign("/thank-you");
        } else if (hasError && !redirectedRef.current) {
          submittingRef.current = false;
          submissionStartedRef.current = false;
          if (submitButton) { submitButton.disabled = false; submitButton.removeAttribute("aria-busy"); }
          setError("We couldn’t submit your form. Please check your details and try again.");
        }
      };
      const onSubmit = (event: Event) => {
        // Keep the browser from performing a native form navigation/reload.
        // Flodesk still receives the event and completes the async submission.
        event.preventDefault();
        if (submittingRef.current) return;
        submittingRef.current = true;
        submissionStartedRef.current = true;
        setError("");
        if (submitButton) { submitButton.disabled = true; submitButton.setAttribute("aria-busy", "true"); }
      };
      form.addEventListener("submit", onSubmit, true);
      const observer = new MutationObserver(syncState);
      observer.observe(rootRef.current, { attributes: true, attributeFilter: ["class", "data-ff-stage"], subtree: true });
      syncState();
      cleanupInjectedForm = () => { form.removeEventListener("submit", onSubmit, true); observer.disconnect(); };
    }
    loadForm().catch(() => { if (rootRef.current) rootRef.current.textContent = "Unable to load the form. Please refresh and try again."; });
    return () => { cancelled = true; cleanupInjectedForm(); };
  }, []);

  return <div aria-live="polite">{error && <p role="alert" className="mb-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}<div ref={rootRef} className="flodesk-shell w-full overflow-hidden" /></div>;
}
