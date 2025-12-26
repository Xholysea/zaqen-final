'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function TrustpilotWidget() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.Trustpilot && ref.current) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />

      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="694e60a65fb698cf3a93463e"
        data-style-height="52px"
        data-style-width="100%"
        data-token="1a863af9-5cf2-43d0-9425-a90ccf3e2e14"
      >
        <a
          href="https://www.trustpilot.com/review/zaqen.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
}
