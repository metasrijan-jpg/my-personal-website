"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function FlodeskForm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    let successObserver: MutationObserver | null = null;

    function redirectAfterSuccess() {
      const formRoot = rootRef.current?.querySelector<HTMLElement>('[data-ff-el="root"]');
      const isSuccessful = formRoot?.getAttribute("data-ff-stage") === "success" || formRoot?.classList.contains("fd-has-success");

      if (isSuccessful) {
        successObserver?.disconnect();
        router.replace("/thank-you");
      }
    }

    async function loadForm() {
      const response = await fetch("/flodesk-form.html");
      const html = await response.text();
      if (cancelled || !rootRef.current) return;

      rootRef.current.innerHTML = html;
      const formRoot = rootRef.current.querySelector<HTMLElement>('[data-ff-el="root"]');
      if (formRoot) {
        successObserver = new MutationObserver(redirectAfterSuccess);
        successObserver.observe(formRoot, { attributes: true, attributeFilter: ["class", "data-ff-stage"] });
      }

      const scripts = Array.from(rootRef.current.querySelectorAll("script"));
      scripts.forEach((script) => {
        const replacement = document.createElement("script");
        Array.from(script.attributes).forEach((attribute) => replacement.setAttribute(attribute.name, attribute.value));
        replacement.textContent = script.textContent;
        script.replaceWith(replacement);
      });
      redirectAfterSuccess();
    }

    loadForm().catch(() => {
      if (rootRef.current) rootRef.current.textContent = "Unable to load the signup form. Please refresh and try again.";
    });

    return () => {
      cancelled = true;
      successObserver?.disconnect();
    };
  }, [router]);

  return <div ref={rootRef} className="flodesk-shell w-full overflow-hidden" aria-live="polite" />;
}
