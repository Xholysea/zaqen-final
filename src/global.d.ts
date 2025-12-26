// src/global.d.ts
interface Window {
  Trustpilot?: {
    loadFromElement: (element: HTMLElement, autoLoad: boolean) => void;
  };
}
