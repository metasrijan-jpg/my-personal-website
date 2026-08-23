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

  return <div ref={rootRef} className="flodesk-shell w-full overflow-hidden" aria-live="polite" />;
}
