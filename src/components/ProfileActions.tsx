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
  side: "left" | "right";
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
  const [showCitationInput, setShowCitationInput] = useState(false);
  const [citationUrl, setCitationUrl] = useState("");
  const [sectionLabel, setSectionLabel] = useState("");
  const [verifierName, setVerifierName] = useState("");
  const [verifierEmail, setVerifierEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isVerifyingLinkedIn, setIsVerifyingLinkedIn] = useState(false);
  const [isVerifyingGitHub, setIsVerifyingGitHub] = useState(false);
  const [linkedInSessionId, setLinkedInSessionId] = useState<string | null>(null);
  const [linkedInContextId, setLinkedInContextId] = useState<string | null>(null);
  const [selectionMenu, setSelectionMenu] = useState<SelectionMenuState>({
    open: false,
    x: 0,
    y: 0,
    snippet: "",
    side: "right",
  });

  const articleRef = useRef<HTMLDivElement>(null);
  const selectionMenuRef = useRef<HTMLDivElement>(null);
  const selectionRangeRef = useRef<Range | null>(null);

  const claimStatusText = useMemo(() => {
    if (!state.isClaimed) return "Unclaimed";
    if (state.isOwner) return "Claimed by you";
    return "Claimed";
  }, [state.isClaimed, state.isOwner]);

  const hideClaimPanel = Boolean(
    isSignedIn &&
      state.userClaimedSlug &&
      state.userClaimedSlug !== slug &&
      !state.isOwner
  );

  const restoreSelection = () => {
    if (!selectionRangeRef.current) return;
    const selection = window.getSelection();
    if (!selection) return;
    selection.removeAllRanges();
    selection.addRange(selectionRangeRef.current);
  };

  const normalizeArticleLinks = () => {
    if (!articleRef.current) return;
    const links = articleRef.current.querySelectorAll("a");
    for (const link of links) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  };

  const closeSelectionMenu = () => {
    setSelectionMenu((prev) => ({ ...prev, open: false, snippet: "" }));
    setShowVerifierForm(false);
    setShowCitationInput(false);
    setCitationUrl("");
    selectionRangeRef.current = null;
  };

  const applyFormat = (command: string, value?: string) => {
    restoreSelection();
    document.execCommand(command, false, value);
    setIsDirty(true);
    requestAnimationFrame(restoreSelection);
  };

  const insertBlockElement = (tagName: "H2" | "H3" | "BLOCKQUOTE" | "PRE") => {
    restoreSelection();
    document.execCommand("formatBlock", false, tagName);
    setIsDirty(true);
    requestAnimationFrame(restoreSelection);
  };

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
      closeSelectionMenu();
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
    const menuWidth = 440;
    const menuHeight = 180;
    const gap = 10;
    const edgePadding = 16;
    const viewportLeft = window.scrollX;
    const viewportRight = window.scrollX + window.innerWidth;
    const viewportTop = window.scrollY;
    const viewportBottom = window.scrollY + window.innerHeight;

    const rightAnchorX = rect.right + window.scrollX + gap;
    const leftAnchorX = rect.left + window.scrollX - gap - menuWidth;
    const prefersRight = rightAnchorX + menuWidth <= viewportRight - edgePadding;
    const canFitLeft = leftAnchorX >= viewportLeft + edgePadding;

    let x = prefersRight ? rightAnchorX : leftAnchorX;
    let side: "left" | "right" = prefersRight ? "right" : "left";

    if (!prefersRight && !canFitLeft) {
      x = Math.max(
        viewportLeft + edgePadding,
        Math.min(rect.left + window.scrollX, viewportRight - menuWidth - edgePadding)
      );
      side = "right";
    }

    const centeredY = rect.top + window.scrollY + rect.height / 2 - menuHeight / 2;
    const y = Math.max(
      viewportTop + edgePadding,
      Math.min(centeredY, viewportBottom - menuHeight - edgePadding)
    );

    selectionRangeRef.current = range.cloneRange();
    setSelectionMenu({
      open: true,
      x,
      y,
      snippet,
      side,
    });

    requestAnimationFrame(restoreSelection);
  };

  useEffect(() => {
    if (!articleRef.current) return;
    articleRef.current.innerHTML = state.humanContent;
  }, [state.humanContent]);

  useEffect(() => {
    if (!state.isOwner) return;

    const onMouseUp = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (target && selectionMenuRef.current?.contains(target)) return;
      setTimeout(refreshSelectionMenu, 0);
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const target = event.target as Node | null;
      if (target && selectionMenuRef.current?.contains(target)) return;
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

    try {
      const parsed = new URL(citationUrl.trim());
      const safeUrl = parsed.toString();

      const selection = window.getSelection();
      if (!selection) return;

      selection.removeAllRanges();
      selection.addRange(selectionRangeRef.current);
      document.execCommand("createLink", false, safeUrl);

      normalizeArticleLinks();
      await saveInlineContent("Citation added and references updated.");
      setCitationUrl("");
      setShowCitationInput(false);
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
      setMessage("Verifier request submitted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to submit verifier request");
    } finally {
      setIsSubmittingVerifier(false);
    }
  };

  const hasLinkedIn = state.socialVerifications.some((v) => v.provider === "linkedin");
  const hasGitHub = state.socialVerifications.some((v) => v.provider === "github");

  const startLinkedInVerification = async () => {
    try {
      setIsVerifyingLinkedIn(true);
      setMessage(null);
      const response = await fetch(`/api/profiles/${slug}/verify/linkedin`, { method: "POST" });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error);
      setLinkedInSessionId(json.sessionId);
      setLinkedInContextId(json.contextId);
      window.open(json.connectUrl, "linkedin-verify", "width=1024,height=768");
      setMessage("LinkedIn browser opened. Log in, then click 'Check Status' below.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to start LinkedIn verification");
    } finally {
      setIsVerifyingLinkedIn(false);
    }
  };

  const checkLinkedInStatus = async () => {
    if (!linkedInSessionId || !linkedInContextId) return;
    try {
      setIsVerifyingLinkedIn(true);
      setMessage(null);
      const response = await fetch(
        `/api/profiles/${slug}/verify/linkedin?sessionId=${linkedInSessionId}&contextId=${linkedInContextId}`
      );
      const json = await response.json();
      if (!response.ok) throw new Error(json.error);
      if (json.status === "verified") {
        setMessage("LinkedIn verified successfully!");
        setLinkedInSessionId(null);
        setLinkedInContextId(null);
        // Refresh state
        const stateRes = await fetch(`/api/profiles/${slug}/state`);
        const newState = await stateRes.json();
        if (stateRes.ok) setState(newState);
      } else {
        setMessage(json.message || "LinkedIn login not detected yet. Please log in and try again.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to check LinkedIn status");
    } finally {
      setIsVerifyingLinkedIn(false);
    }
  };

  const verifyGitHub = async () => {
    try {
      setIsVerifyingGitHub(true);
      setMessage(null);
      const response = await fetch(`/api/profiles/${slug}/verify/github`, { method: "POST" });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error);
      setMessage(`GitHub verified as ${json.displayName} (@${json.username})`);
      // Refresh state
      const stateRes = await fetch(`/api/profiles/${slug}/state`);
      const newState = await stateRes.json();
      if (stateRes.ok) setState(newState);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to verify GitHub");
    } finally {
      setIsVerifyingGitHub(false);
    }
  };

  return (
    <div>
      {!hideClaimPanel && (
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
              Edit inline. Highlight text to open citation/verifier actions.
            </div>
          )}

          {message && <div className="mt-2 text-xs text-muted">{message}</div>}
        </div>
      )}

      {state.isOwner && (
        <div className="border border-border bg-[#f6f4ef] rounded-sm p-3 mb-4 font-sans text-xs">
          <div className="font-semibold mb-2">Verification</div>

          {/* Verification badges */}
          {(hasLinkedIn || hasGitHub) && (
            <div className="flex flex-wrap gap-2 mb-3">
              {state.socialVerifications.map((v) => (
                <span
                  key={v.provider}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-border text-xs font-medium"
                >
                  {v.provider === "linkedin" ? (
                    <svg className="w-3.5 h-3.5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  )}
                  <span>{v.provider === "linkedin" ? "LinkedIn" : "GitHub"} Verified</span>
                  {v.displayName && <span className="text-muted">({v.displayName})</span>}
                </span>
              ))}
            </div>
          )}

          {/* Connection sync status */}
          {(state.connectionCount.linkedin > 0 || state.connectionCount.github > 0) && (
            <div className="text-muted mb-3">
              Connections synced:
              {state.connectionCount.linkedin > 0 && ` ${state.connectionCount.linkedin} LinkedIn`}
              {state.connectionCount.linkedin > 0 && state.connectionCount.github > 0 && ","}
              {state.connectionCount.github > 0 && ` ${state.connectionCount.github} GitHub`}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            {!hasLinkedIn && !linkedInSessionId && (
              <button
                onClick={startLinkedInVerification}
                disabled={isVerifyingLinkedIn}
                className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold disabled:opacity-50"
              >
                {isVerifyingLinkedIn ? "Starting..." : "Connect LinkedIn"}
              </button>
            )}
            {linkedInSessionId && (
              <button
                onClick={checkLinkedInStatus}
                disabled={isVerifyingLinkedIn}
                className="px-2.5 py-1 border border-[#0A66C2] bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold text-[#0A66C2] disabled:opacity-50"
              >
                {isVerifyingLinkedIn ? "Checking..." : "Check LinkedIn Status"}
              </button>
            )}
            {!hasGitHub && (
              <button
                onClick={verifyGitHub}
                disabled={isVerifyingGitHub}
                className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold disabled:opacity-50"
              >
                {isVerifyingGitHub ? "Verifying..." : "Connect GitHub"}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="relative">
        <div
          ref={articleRef}
          className={`human-content ${state.isOwner ? "outline-none" : ""}`}
          contentEditable={state.isOwner}
          suppressContentEditableWarning
          onInput={() => setIsDirty(true)}
        />

        {state.isOwner && selectionMenu.open && (
          <div
            ref={selectionMenuRef}
            className="absolute z-30 w-[440px] rounded-xl border border-border bg-[#1f1f1f] text-[#ececec] px-3 py-2 shadow-xl font-sans text-xs"
            style={{
              left: selectionMenu.x,
              top: selectionMenu.y,
            }}
          >
            <div className="mb-2 text-[11px] text-[#b8b8b8] line-clamp-2">“{selectionMenu.snippet}”</div>

            <div className="mb-2">
              <input
                readOnly
                value="Search actions..."
                className="w-full rounded-md border border-[#3a3a3a] bg-[#2a2a2a] px-2 py-1.5 text-[11px] text-[#9a9a9a]"
              />
            </div>

            <div className="mb-2">
              <div className="text-[10px] uppercase tracking-wide text-[#8f8f8f] mb-1">Text</div>
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => applyFormat("bold")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold"
                >
                  B
                </button>
                <button
                  onClick={() => applyFormat("italic")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] italic"
                >
                  I
                </button>
                <button
                  onClick={() => insertBlockElement("H2")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold"
                >
                  H2
                </button>
                <button
                  onClick={() => insertBlockElement("H3")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold"
                >
                  H3
                </button>
                <button
                  onClick={() => applyFormat("insertUnorderedList")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434]"
                >
                  • List
                </button>
                <button
                  onClick={() => applyFormat("insertOrderedList")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434]"
                >
                  1. List
                </button>
                <button
                  onClick={() => insertBlockElement("BLOCKQUOTE")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434]"
                >
                  Quote
                </button>
                <button
                  onClick={() => insertBlockElement("PRE")}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434]"
                >
                  Code
                </button>
                <button
                  onClick={() => {
                    setShowCitationInput((v) => !v);
                    setShowVerifierForm(false);
                  }}
                  className="px-2 py-1 rounded border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434]"
                >
                  Link
                </button>
              </div>
            </div>

            <div className="h-px bg-[#353535] my-2" />

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setShowVerifierForm((v) => !v);
                  setShowCitationInput(false);
                }}
                className="px-2.5 py-1 rounded-md border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold"
              >
                Request Verifier
              </button>
              <button
                onClick={() => {
                  setShowCitationInput((v) => !v);
                  setShowVerifierForm(false);
                }}
                className="px-2.5 py-1 rounded-md border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold"
              >
                Add Citation
              </button>
              <button onClick={closeSelectionMenu} className="ml-auto text-[#9c9c9c] hover:text-white">
                Close
              </button>
            </div>

            {showCitationInput && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  value={citationUrl}
                  onChange={(event) => setCitationUrl(event.target.value)}
                  placeholder="https://..."
                  className="flex-1 border border-[#3a3a3a] rounded-md p-2 text-xs bg-[#2a2a2a] text-white placeholder:text-[#8f8f8f]"
                />
                <button
                  onClick={addCitation}
                  className="px-2.5 py-1 rounded-md border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold"
                >
                  Insert
                </button>
              </div>
            )}

            {showVerifierForm && (
              <div className="mt-2 space-y-2">
                <input
                  value={sectionLabel}
                  onChange={(event) => setSectionLabel(event.target.value)}
                  placeholder="Section label (optional)"
                  className="w-full border border-[#3a3a3a] rounded-md p-2 text-xs bg-[#2a2a2a] text-white placeholder:text-[#8f8f8f]"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    value={verifierName}
                    onChange={(event) => setVerifierName(event.target.value)}
                    placeholder="Verifier name"
                    className="w-full border border-[#3a3a3a] rounded-md p-2 text-xs bg-[#2a2a2a] text-white placeholder:text-[#8f8f8f]"
                  />
                  <input
                    value={verifierEmail}
                    onChange={(event) => setVerifierEmail(event.target.value)}
                    placeholder="Verifier email"
                    className="w-full border border-[#3a3a3a] rounded-md p-2 text-xs bg-[#2a2a2a] text-white placeholder:text-[#8f8f8f]"
                  />
                </div>
                <button
                  onClick={submitVerifierRequest}
                  disabled={isSubmittingVerifier}
                  className="px-2.5 py-1 rounded-md border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#343434] font-semibold disabled:opacity-50"
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
