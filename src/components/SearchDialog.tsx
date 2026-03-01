"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface SearchItem {
  name: string;
  slug: string;
}

export function SearchTrigger() {
  return (
    <button
      className="font-sans text-xs text-muted border border-border rounded px-2.5 py-1 hover:bg-[#e8e5dd] transition-colors flex items-center gap-1.5"
      onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      Search
      <kbd className="font-mono text-[10px] bg-[#e8e5dd] px-1 py-0.5 rounded ml-1">
        ⌘K
      </kbd>
    </button>
  );
}

export default function SearchDialog({ items }: { items: SearchItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!listRef.current) return;
    const selected = listRef.current.children[selectedIndex] as HTMLElement;
    if (selected) selected.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  function navigate(slug: string) {
    close();
    router.push(`/${slug}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      navigate(filtered[selectedIndex].slug);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
      onClick={close}
    >
      <div className="fixed inset-0 bg-black/40" />
      <div
        className="relative w-full max-w-md bg-[#FAF9F5] border border-border rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search people..."
            className="flex-1 bg-transparent font-sans text-sm outline-none placeholder:text-muted/60"
          />
          <kbd className="font-mono text-[10px] text-muted bg-[#e8e5dd] px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-64 overflow-y-auto py-1">
          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-center font-sans text-sm text-muted">
              No results
            </div>
          ) : (
            filtered.map((item, i) => (
              <button
                key={item.slug}
                onClick={() => navigate(item.slug)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`w-full text-left px-4 py-2 font-sans text-sm flex items-center justify-between transition-colors ${
                  i === selectedIndex
                    ? "bg-[#e8e5dd]"
                    : "hover:bg-[#f0ede7]"
                }`}
              >
                <span className="font-semibold">{item.name}</span>
                <span className="font-mono text-xs text-muted">
                  /{item.slug}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
