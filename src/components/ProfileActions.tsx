"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import type { RuntimeProfileState } from "@/lib/profile-state";

interface ProfileActionsProps {
  slug: string;
  initialState: RuntimeProfileState;
  isSignedIn: boolean;
}

type SelectionMenuState = {
  open: boolean;
  x: number;
  y: number;
  snippet: string;
};

export default function ProfileActions({
  slug,
  initialState,
  isSignedIn,
}: ProfileActionsProps) {
  const [state, setState] = useState(initialState);
  const [isSaving, setIsSaving] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isSubmittingVerifier, setIsSubmittingVerifier] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [showVerifierForm, setShowVerifierForm] = useState(false);
  const [sectionLabel, setSectionLabel] = useState("");
  const [verifierName, setVerifierName] = useState("");
  const [verifierEmail, setVerifierEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [selectionMenu, setSelectionMenu] = useState<SelectionMenuState>({
    open: false,
    x: 0,
    y: 0,
    snippet: "",
  });

  const articleRef = useRef<HTMLDivElement>(null);
  const selectionRangeRef = useRef<Range | null>(null);

  const claimStatusText = useMemo(() => {
    if (!state.claimedByUserId) return "Unclaimed";
    if (state.isOwner) return "Claimed by you";
    return "Claimed";
  }, [state.claimedByUserId, state.isOwner]);

  const runAction = async (url: string, init?: RequestInit) => {
    const response = await fetch(url, {
      method: init?.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      body: init?.body,
    });

    const json = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(json?.error ?? "Request failed");
    }

    if (json?.humanContent) {
      setState(json);
      if (articleRef.current) {
        articleRef.current.innerHTML = json.humanContent;
      }
      setIsDirty(false);
    }

    return json;
  };

  const claimProfile = async () => {
    try {
      setIsClaiming(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/claim`, { method: "POST" });
      setMessage("Profile claimed. You can now edit inline and request verifiers.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to claim profile");
    } finally {
      setIsClaiming(false);
    }
  };

  const normalizeArticleLinks = () => {
    if (!articleRef.current) return;
    const links = articleRef.current.querySelectorAll("a");
    for (const link of links) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  };

  const saveInlineContent = async (successMessage = "Profile text updated.") => {
    if (!articleRef.current) return;

    try {
      setIsSaving(true);
      setMessage(null);
      normalizeArticleLinks();
      await runAction(`/api/profiles/${slug}/content`, {
        method: "PUT",
        body: JSON.stringify({ humanContent: articleRef.current.innerHTML }),
      });
      setMessage(successMessage);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save profile text");
    } finally {
      setIsSaving(false);
    }
  };

  const closeSelectionMenu = () => {
    setSelectionMenu((prev) => ({ ...prev, open: false }));
    setShowVerifierForm(false);
    selectionRangeRef.current = null;
  };

  const refreshSelectionMenu = () => {
    if (!state.isOwner || !articleRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      closeSelectionMenu();
      return;
    }

    const range = selection.getRangeAt(0);
    if (!articleRef.current.contains(range.commonAncestorContainer)) {
      closeSelectionMenu();
      return;
    }

    const snippet = selection.toString().trim().slice(0, 1000);
    if (!snippet || snippet.length < 3) {
      closeSelectionMenu();
      return;
    }

    const rect = range.getBoundingClientRect();
    selectionRangeRef.current = range.cloneRange();
    setSelectionMenu({
      open: true,
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + window.scrollY - 10,
      snippet,
    });
  };

  useEffect(() => {
    if (!state.isOwner) return;

    const onMouseUp = () => {
      setTimeout(refreshSelectionMenu, 0);
    };
    const onKeyUp = () => {
      setTimeout(refreshSelectionMenu, 0);
    };

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [state.isOwner]);

  const addCitation = async () => {
    if (!selectionRangeRef.current) return;
    const url = window.prompt("Citation URL");
    if (!url) return;

    try {
      const parsed = new URL(url);
      const safeUrl = parsed.toString();

      const selection = window.getSelection();
      if (!selection) return;

      selection.removeAllRanges();
      selection.addRange(selectionRangeRef.current);
      document.execCommand("createLink", false, safeUrl);

      normalizeArticleLinks();
      closeSelectionMenu();
      await saveInlineContent("Citation added.");
    } catch {
      setMessage("Enter a valid URL (including https://)");
    }
  };

  const submitVerifierRequest = async () => {
    if (!selectionMenu.snippet) return;

    try {
      setIsSubmittingVerifier(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/verifiers`, {
        method: "POST",
        body: JSON.stringify({
          snippet: selectionMenu.snippet,
          sectionLabel: sectionLabel || undefined,
          verifierName,
          verifierEmail,
        }),
      });
      setSectionLabel("");
      setVerifierName("");
      setVerifierEmail("");
      setShowVerifierForm(false);
      closeSelectionMenu();
      setMessage("Verifier request submitted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to submit verifier request");
    } finally {
      setIsSubmittingVerifier(false);
    }
  };

  return (
    <div>
      <div className="border border-border bg-[#f6f4ef] rounded-sm p-3 mb-4 font-sans text-xs">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="font-semibold">Profile Claim</div>
            <div className="text-muted mt-0.5">Status: {claimStatusText}</div>
            {state.userClaimedSlug && !state.isOwner && (
              <div className="text-muted mt-0.5">You already claimed: /{state.userClaimedSlug}</div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!isSignedIn && (
              <>
                <SignInButton mode="modal">
                  <button className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold">
                    Sign In
                  </button>
                </SignInButton>
                <span className="text-muted">to claim your profile</span>
              </>
            )}

            {isSignedIn && (
              <>
                <UserButton afterSignOutUrl="/" />
                {!state.isOwner && state.canClaim && (
                  <button
                    onClick={claimProfile}
                    disabled={isClaiming}
                    className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold disabled:opacity-50"
                  >
                    {isClaiming ? "Claiming..." : "Claim Profile"}
                  </button>
                )}
                {state.isOwner && (
                  <button
                    onClick={() => saveInlineContent()}
                    disabled={isSaving || !isDirty}
                    className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold disabled:opacity-50"
                  >
                    {isSaving ? "Saving..." : isDirty ? "Save Changes" : "Saved"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {state.isOwner && (
          <div className="mt-3 pt-3 border-t border-border text-muted">
            Edit directly in the article. Highlight text to request verifier or add citation.
          </div>
        )}

        {message && <div className="mt-2 text-xs text-muted">{message}</div>}
      </div>

      <div className="relative">
        <div
          ref={articleRef}
          className={`human-content ${state.isOwner ? "outline-none" : ""}`}
          contentEditable={state.isOwner}
          suppressContentEditableWarning
          onInput={() => setIsDirty(true)}
          dangerouslySetInnerHTML={{ __html: state.humanContent }}
        />

        {state.isOwner && selectionMenu.open && (
          <div
            className="absolute z-20 border border-border bg-white shadow-sm p-2 rounded-sm font-sans text-xs w-72"
            style={{
              left: selectionMenu.x,
              top: selectionMenu.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="text-muted line-clamp-2 mb-2">“{selectionMenu.snippet}”</div>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setShowVerifierForm((v) => !v)}
                className="px-2 py-1 border border-border bg-[#f6f4ef] hover:bg-[#efece4] transition-colors font-semibold"
              >
                Request Verifier
              </button>
              <button
                onClick={addCitation}
                className="px-2 py-1 border border-border bg-[#f6f4ef] hover:bg-[#efece4] transition-colors font-semibold"
              >
                Add Citation
              </button>
              <button
                onClick={closeSelectionMenu}
                className="ml-auto text-muted hover:text-foreground"
              >
                Close
              </button>
            </div>

            {showVerifierForm && (
              <div className="space-y-2">
                <input
                  value={sectionLabel}
                  onChange={(event) => setSectionLabel(event.target.value)}
                  placeholder="Section label (optional)"
                  className="w-full border border-border p-2 text-xs bg-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    value={verifierName}
                    onChange={(event) => setVerifierName(event.target.value)}
                    placeholder="Verifier name"
                    className="w-full border border-border p-2 text-xs bg-white"
                  />
                  <input
                    value={verifierEmail}
                    onChange={(event) => setVerifierEmail(event.target.value)}
                    placeholder="Verifier email"
                    className="w-full border border-border p-2 text-xs bg-white"
                  />
                </div>
                <button
                  onClick={submitVerifierRequest}
                  disabled={isSubmittingVerifier}
                  className="px-2 py-1 border border-border bg-[#f6f4ef] hover:bg-[#efece4] transition-colors font-semibold disabled:opacity-50"
                >
                  {isSubmittingVerifier ? "Submitting..." : "Send Request"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {state.isOwner && state.verifierRequests.length > 0 && (
        <div className="mt-6 border-t border-border pt-4 font-sans">
          <h2 className="text-base font-semibold mb-2">Verifier Requests</h2>
          <ul className="space-y-2 text-xs">
            {state.verifierRequests.map((request) => (
              <li key={request.id} className="border border-border bg-[#f6f4ef] p-2">
                <div className="font-semibold">{request.sectionLabel || "Unlabeled section"}</div>
                <div className="text-muted">
                  {request.verifierName} ({request.verifierEmail})
                </div>
                <div className="mt-1 line-clamp-3">{request.snippet}</div>
                <div className="mt-1 text-muted">
                  {new Date(request.createdAt).toLocaleString()} • {request.status}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
