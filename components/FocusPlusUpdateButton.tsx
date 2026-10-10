"use client";

import { useState } from "react";

const COMMAND = "Update Focus+ to today";
const HREF = `https://cursor.com/link/prompt?text=${encodeURIComponent(COMMAND)}`;

export default function FocusPlusUpdateButton() {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-2 sm:max-w-lg">
      <a
        href={HREF}
        onClick={onClick}
        className="inline-flex w-fit rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700"
      >
        {COMMAND}
      </a>
      <p className="text-xs text-sage-800/55">
        {copied
          ? "Command copied. Send it in Cursor chat if the prompt box does not open."
          : "Copies the command and opens it in Cursor chat. Send it from there."}
      </p>
    </div>
  );
}
