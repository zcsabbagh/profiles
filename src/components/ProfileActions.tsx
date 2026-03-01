"use client";

import { useMemo, useRef, useState } from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import type { RuntimeProfileState } from "@/lib/profile-state";

interface ProfileActionsProps {
  slug: string;
  initialState: RuntimeProfileState;
  isSignedIn: boolean;
}

export default function ProfileActions({
  slug,
  initialState,
  isSignedIn,
}: ProfileActionsProps) {
  const [state, setState] = useState(initialState);
  const [isSaving, setIsSaving] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isSubmittingVerifier, setIsSubmittingVerifier] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [draftHtml, setDraftHtml] = useState(initialState.humanContent);
  const [selectedSnippet, setSelectedSnippet] = useState("");
  const [sectionLabel, setSectionLabel] = useState("");
  const [verifierName, setVerifierName] = useState("");
  const [verifierEmail, setVerifierEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const articleRef = useRef<HTMLDivElement>(null);

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
      setDraftHtml(json.humanContent);
    }

    return json;
  };

  const claimProfile = async () => {
    try {
      setIsClaiming(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/claim`, { method: "POST" });
      setMessage("Profile claimed. You can now edit and request verifiers.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to claim profile");
    } finally {
      setIsClaiming(false);
    }
  };

  const saveContent = async () => {
    try {
      setIsSaving(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/content`, {
        method: "PUT",
        body: JSON.stringify({ humanContent: draftHtml }),
      });
      setIsEditing(false);
      setMessage("Profile text updated.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save profile text");
    } finally {
      setIsSaving(false);
    }
  };

  const captureSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      setMessage("Select text in the profile article first.");
      return;
    }

    const range = selection.getRangeAt(0);
    if (!articleRef.current?.contains(range.commonAncestorContainer)) {
      setMessage("Select text from this profile article.");
      return;
    }

    const text = selection.toString().trim();
    if (!text) {
      setMessage("Selected text is empty.");
      return;
    }

    setSelectedSnippet(text.slice(0, 1000));
    setMessage("Selected text added for verifier request.");
  };

  const submitVerifierRequest = async () => {
    try {
      setIsSubmittingVerifier(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/verifiers`, {
        method: "POST",
        body: JSON.stringify({
          snippet: selectedSnippet,
          sectionLabel: sectionLabel || undefined,
          verifierName,
          verifierEmail,
        }),
      });
      setSectionLabel("");
      setVerifierName("");
      setVerifierEmail("");
      setSelectedSnippet("");
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
              </>
            )}
          </div>
        </div>

        {state.isOwner && (
          <div className="mt-3 pt-3 border-t border-border">
            <div className="font-semibold mb-2">Owner Controls</div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <button
                onClick={() => setIsEditing((value) => !value)}
                className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold"
              >
                {isEditing ? "Cancel Edit" : "Edit Text"}
              </button>
              <button
                onClick={captureSelection}
                className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold"
              >
                Use Selected Text
              </button>
            </div>

            {isEditing && (
              <div className="space-y-2 mb-3">
                <textarea
                  value={draftHtml}
                  onChange={(event) => setDraftHtml(event.target.value)}
                  className="w-full min-h-56 border border-border p-2 font-mono text-xs bg-white"
                />
                <button
                  onClick={saveContent}
                  disabled={isSaving}
                  className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}

            <div className="space-y-2">
              <input
                value={selectedSnippet}
                onChange={(event) => setSelectedSnippet(event.target.value)}
                placeholder="Selected text snippet"
                className="w-full border border-border p-2 text-xs bg-white"
              />
              <input
                value={sectionLabel}
                onChange={(event) => setSectionLabel(event.target.value)}
                placeholder="Section label (optional)"
                className="w-full border border-border p-2 text-xs bg-white"
              />
              <div className="grid sm:grid-cols-2 gap-2">
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
                className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold disabled:opacity-50"
              >
                {isSubmittingVerifier ? "Submitting..." : "Request Verifier"}
              </button>
            </div>
          </div>
        )}

        {message && <div className="mt-2 text-xs text-muted">{message}</div>}
      </div>

      <div ref={articleRef} className="human-content" dangerouslySetInnerHTML={{ __html: state.humanContent }} />

      {state.verifierRequests.length > 0 && (
        <div className="mt-6 border-t border-border pt-4 font-sans">
          <h2 className="text-base font-semibold mb-2">Verifier Requests</h2>
          <ul className="space-y-2 text-xs">
            {state.verifierRequests.map((request) => (
              <li key={request.id} className="border border-border bg-[#f6f4ef] p-2">
                <div className="font-semibold">{request.sectionLabel || "Unlabeled section"}</div>
                <div className="text-muted">{request.verifierName} ({request.verifierEmail})</div>
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
