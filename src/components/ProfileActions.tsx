"use client";

import { useMemo, useRef, useState } from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import type { RuntimeProfileState } from "@/lib/profile-state";
import { renderMarkdownToHtml } from "@/lib/markdown-shared";

interface ProfileActionsProps {
  slug: string;
  initialState: RuntimeProfileState;
  isSignedIn: boolean;
}

type SelectionState = {
  start: number;
  end: number;
  snippet: string;
};

export default function ProfileActions({
  slug,
  initialState,
  isSignedIn,
}: ProfileActionsProps) {
  const [state, setState] = useState(initialState);
  const [markdown, setMarkdown] = useState(initialState.editableContent);
  const [isSaving, setIsSaving] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isSubmittingVerifier, setIsSubmittingVerifier] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [selection, setSelection] = useState<SelectionState | null>(null);
  const [showVerifierForm, setShowVerifierForm] = useState(false);
  const [showCitationInput, setShowCitationInput] = useState(false);
  const [citationUrl, setCitationUrl] = useState("");
  const [sectionLabel, setSectionLabel] = useState("");
  const [verifierName, setVerifierName] = useState("");
  const [verifierEmail, setVerifierEmail] = useState("");

  const editorRef = useRef<HTMLTextAreaElement>(null);

  const claimStatusText = useMemo(() => {
    if (!state.claimedByUserId) return "Unclaimed";
    if (state.isOwner) return "Claimed by you";
    return "Claimed";
  }, [state.claimedByUserId, state.isOwner]);

  const previewHtml = useMemo(() => renderMarkdownToHtml(markdown), [markdown]);

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
      setMarkdown(json.editableContent ?? "");
      setIsDirty(false);
      setSelection(null);
      setShowVerifierForm(false);
      setShowCitationInput(false);
      setCitationUrl("");
    }

    return json;
  };

  const claimProfile = async () => {
    try {
      setIsClaiming(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/claim`, { method: "POST" });
      setMessage("Profile claimed. You can now edit in markdown.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to claim profile");
    } finally {
      setIsClaiming(false);
    }
  };

  const saveContent = async (successMessage = "Profile text updated.") => {
    try {
      setIsSaving(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/content`, {
        method: "PUT",
        body: JSON.stringify({ humanContent: markdown }),
      });
      setMessage(successMessage);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save profile text");
    } finally {
      setIsSaving(false);
    }
  };

  const refreshSelection = () => {
    const textarea = editorRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) {
      setSelection(null);
      setShowVerifierForm(false);
      setShowCitationInput(false);
      return;
    }

    const snippet = markdown.slice(start, end).trim();
    if (!snippet || snippet.length < 3) {
      setSelection(null);
      setShowVerifierForm(false);
      setShowCitationInput(false);
      return;
    }

    setSelection({ start, end, snippet: snippet.slice(0, 1000) });
  };

  const addCitation = () => {
    if (!selection) return;

    try {
      const parsed = new URL(citationUrl.trim());
      const safeUrl = parsed.toString();
      const selectedText = markdown.slice(selection.start, selection.end);
      const linked = `[${selectedText}](${safeUrl})`;
      const nextMarkdown =
        markdown.slice(0, selection.start) + linked + markdown.slice(selection.end);

      setMarkdown(nextMarkdown);
      setIsDirty(true);
      setMessage("Citation inserted in markdown. Save to persist and update references.");
      setCitationUrl("");
      setShowCitationInput(false);
      setSelection(null);
      void saveContent("Citation added and references updated.");
    } catch {
      setMessage("Enter a valid URL (including https://)");
    }
  };

  const submitVerifierRequest = async () => {
    if (!selection) return;

    try {
      setIsSubmittingVerifier(true);
      setMessage(null);
      await runAction(`/api/profiles/${slug}/verifiers`, {
        method: "POST",
        body: JSON.stringify({
          snippet: selection.snippet,
          sectionLabel: sectionLabel || undefined,
          verifierName,
          verifierEmail,
        }),
      });
      setSectionLabel("");
      setVerifierName("");
      setVerifierEmail("");
      setSelection(null);
      setShowVerifierForm(false);
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
                    onClick={() => saveContent()}
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
            Edit in markdown below. Highlight selected markdown text to open the citation/verifier toolbar.
          </div>
        )}

        {message && <div className="mt-2 text-xs text-muted">{message}</div>}
      </div>

      {state.isOwner && (
        <div className="mb-4 border border-border bg-white p-3 rounded-sm font-sans">
          <div className="text-xs font-semibold mb-2">Markdown Editor</div>
          <textarea
            ref={editorRef}
            value={markdown}
            onChange={(event) => {
              setMarkdown(event.target.value);
              setIsDirty(true);
            }}
            onMouseUp={refreshSelection}
            onKeyUp={refreshSelection}
            className="w-full min-h-72 border border-border p-2 font-mono text-sm bg-white"
          />

          {selection && (
            <div className="mt-3 border border-border rounded-md bg-[#f8f7f5] p-3">
              <div className="text-xs text-muted line-clamp-2 mb-2">“{selection.snippet}”</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setShowVerifierForm((v) => !v);
                    setShowCitationInput(false);
                  }}
                  className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold"
                >
                  Request Verifier
                </button>
                <button
                  onClick={() => {
                    setShowCitationInput((v) => !v);
                    setShowVerifierForm(false);
                  }}
                  className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold"
                >
                  Add Citation
                </button>
                <button
                  onClick={() => {
                    setSelection(null);
                    setShowVerifierForm(false);
                    setShowCitationInput(false);
                  }}
                  className="ml-auto text-muted hover:text-foreground"
                >
                  Close
                </button>
              </div>

              {showCitationInput && (
                <div className="mt-2 flex items-center gap-2">
                  <input
                    value={citationUrl}
                    onChange={(event) => setCitationUrl(event.target.value)}
                    placeholder="https://..."
                    className="flex-1 border border-border p-2 text-xs bg-white"
                  />
                  <button
                    onClick={addCitation}
                    className="px-2.5 py-1 border border-border bg-white hover:bg-[#efece4] transition-colors text-xs font-semibold"
                  >
                    Insert Link
                  </button>
                </div>
              )}

              {showVerifierForm && (
                <div className="mt-2 space-y-2">
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
                    {isSubmittingVerifier ? "Submitting..." : "Send Request"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="human-content" dangerouslySetInnerHTML={{ __html: previewHtml }} />

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
