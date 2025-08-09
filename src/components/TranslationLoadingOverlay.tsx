import React, { useEffect, useRef, useState } from "react";

// Lightweight full-screen overlay shown briefly during language switches
const TranslationLoadingOverlay: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onStart = () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      setVisible(true);
      // Safety auto-hide in case the end event never fires
      hideTimerRef.current = window.setTimeout(() => setVisible(false), 2000);
    };

    const onEnd = () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      setVisible(false);
    };

    window.addEventListener("gtg:loadingstart", onStart);
    window.addEventListener("gtg:loadingend", onEnd);
    return () => {
      window.removeEventListener("gtg:loadingstart", onStart);
      window.removeEventListener("gtg:loadingend", onEnd);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center animate-fade-in"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png"
          alt="HTG Horse Truck Garage - logo"
          className="h-20 w-20 object-contain animate-pulse"
          loading="eager"
        />
        <span className="sr-only">Chargement de la traduction…</span>
      </div>
    </div>
  );
};

export default TranslationLoadingOverlay;
