"use client";

import * as React from "react";

export function useTypingText(
  phrases: readonly string[],
  typingSpeed = 70,
  pauseMs = 1600,
) {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);

  React.useEffect(() => {
    if (phrases.length === 0) return;

    const target = phrases[phraseIndex % phrases.length] ?? "";
    let i = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const type = () => {
      if (i <= target.length) {
        setText(target.slice(0, i));
        i += 1;
        timeout = setTimeout(type, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }, pauseMs);
      }
    };

    type();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [phraseIndex, phrases, typingSpeed, pauseMs]);

  return text;
}
