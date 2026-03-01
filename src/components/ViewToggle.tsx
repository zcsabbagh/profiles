"use client";

import { useState } from "react";

export default function ViewToggle({
  humanContent,
  machineContent,
}: {
  humanContent: React.ReactNode;
  machineContent: React.ReactNode;
}) {
  const [view, setView] = useState<"human" | "machine">("human");

  return (
    <>
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <span className="font-sans text-xs text-muted tracking-wide uppercase">
            Profile
          </span>
          <div className="flex bg-[#e8e5dd] rounded-full p-0.5">
            <button
              onClick={() => setView("human")}
              className={`font-sans text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                view === "human"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              HUMAN
            </button>
            <button
              onClick={() => setView("machine")}
              className={`font-mono text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                view === "machine"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              MACHINE
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {view === "human" ? humanContent : machineContent}
      </div>
    </>
  );
}
