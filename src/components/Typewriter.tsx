import { useEffect, useState } from "react";

/** Types out the given text once, then keeps a blinking caret. */
export function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, done, speed]);

  return (
    <span className="font-mono">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block w-[2px] self-stretch bg-primary align-middle ${
          done ? "animate-pulse" : ""
        } ${count === 0 ? "h-[1em]" : "h-[1em]"}`}
      >
        &nbsp;
      </span>
    </span>
  );
}
