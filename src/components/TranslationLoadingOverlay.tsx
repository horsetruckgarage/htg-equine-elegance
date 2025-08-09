import React, { useEffect, useState } from "react";

// Lightweight overlay that shows the brand logo during Google Translate transitions
// Listens to custom events dispatched by GoogleTranslateBridge
// - gtg:loadingstart
// - gtg:loadingend
const TranslationLoadingOverlay: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [safetyTimer, setSafetyTimer] = useState<number | null>(null);

  useEffect(() => {
    const onStart = () => {
      setVisible(true);
      if (safetyTimer) window.clearTimeout(safetyTimer);
      const t = window.setTimeout(() => setVisible(false), 12000); // hard safety cap
      setSafetyTimer(t);
    };

    const onEnd = () => {
      if (safetyTimer) window.clearTimeout(safetyTimer);
      setVisible(false);
    };

    window.addEventListener("gtg:loadingstart", onStart as EventListener);
    window.addEventListener("gtg:loadingend", onEnd as EventListener);

    return () => {
      window.removeEventListener("gtg:loadingstart", onStart as EventListener);
      window.removeEventListener("gtg:loadingend", onEnd as EventListener);
      if (safetyTimer) window.clearTimeout(safetyTimer);
    };
  }, [safetyTimer]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/95 animate-fade-in"
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png"
          alt="HTG Horse Truck Garage — chargement de la traduction"
          className="w-20 h-20 object-contain animate-pulse"
          loading="eager"
        />
        <span className="text-sm text-muted-foreground">Chargement de la traduction…</span>
      </div>
    </div>
  );
};

export default TranslationLoadingOverlay;
