"use client";

import { useEffect, useRef } from "react";

export function FlodeskForm() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadForm() {
      const response = await fetch("/flodesk-form.html");
      const html = await response.text();
      if (cancelled || !rootRef.current) return;

      rootRef.current.innerHTML = html;

      const configElement = rootRef.current.querySelector<HTMLElement>("[data-ff-el=\"config\"]");
      const encodedConfig = configElement?.getAttribute("data-ff-config");
      if (configElement && encodedConfig) {
        try {
          const config = JSON.parse(window.atob(encodedConfig));
          config.onSuccess = {
            ...config.onSuccess,
            redirectUrl: `${window.location.origin}/thank-you`
          };
          configElement.setAttribute("data-ff-config", window.btoa(JSON.stringify(config)));
        } catch {
          // Keep Flodesk's original configuration if it cannot be decoded.
        }
      }

      const scripts = Array.from(rootRef.current.querySelectorAll("script"));
      scripts.forEach((script) => {
        const replacement = document.createElement("script");
        Array.from(script.attributes).forEach((attribute) => replacement.setAttribute(attribute.name, attribute.value));
        replacement.textContent = script.textContent;
        script.replaceWith(replacement);
      });
    }

    loadForm().catch(() => {
      if (rootRef.current) rootRef.current.textContent = "Unable to load the signup form. Please refresh and try again.";
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={rootRef} className="w-full overflow-hidden" aria-live="polite" />;
}
