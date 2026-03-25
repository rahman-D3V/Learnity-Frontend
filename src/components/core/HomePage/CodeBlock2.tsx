import { useEffect, useState, useRef } from "react";

const code = `def get_users():
    users = ["Alice", "Bob", "Charlie"]

    return [
        {"name": user}
        for user in users
    ]

print(get_users())`;

// ── Tokenizer ──────────────────────────────────────────────────────────────
function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let rest = line;

  const push = (text: string, color: string) => {
    if (text) tokens.push({ text, color });
  };

  const wsMatch = rest.match(/^(\s+)/);
  if (wsMatch) {
    push(wsMatch[1], "#abb2bf");
    rest = rest.slice(wsMatch[1].length);
  }

  if (rest.startsWith("<!DOCTYPE")) {
    push("<!DOCTYPE ", "#abb2bf");
    push("html", "#e5c07b");
    push(">", "#abb2bf");
    return tokens;
  }

  const tagRe = /^(<\/?)([a-zA-Z][\w]*)([^>]*)(\/?>)(.*)/s;
  const tm = rest.match(tagRe);
  if (tm) {
    push(tm[1], "#abb2bf");
    push(tm[2], "#e06c75");
    tokenizeAttrs(tm[3]).forEach((t) => tokens.push(t));
    push(tm[4], "#abb2bf");
    if (tm[5]) tokenizeInline(tm[5]).forEach((t) => tokens.push(t));
    return tokens;
  }
  const pyKeywords = ["def", "return", "for", "in", "print"];

  const parts = rest.split(/(\s+|\(|\)|\{|\}|\.|,|:)/);

  parts.forEach((part) => {
    if (pyKeywords.includes(part)) {
      tokens.push({ text: part, color: "#ff7edb" }); // neon pink (keywords)
    } else if (/^".*"$/.test(part)) {
      tokens.push({ text: part, color: "#7ee787" }); // soft neon green (strings)
    } else if (/^\d+$/.test(part)) {
      tokens.push({ text: part, color: "#ffb86c" }); // warm orange (numbers)
    } else if (part === "get_users") {
      tokens.push({ text: part, color: "#79c0ff" }); // icy blue (function)
    } else if (part === "print") {
      tokens.push({ text: part, color: "#ffd866" }); // yellow highlight
    } else {
      tokens.push({ text: part, color: "#9aa4b2" }); // softer gray
    }
  });

  return tokens;
}

function tokenizeAttrs(str: string): Token[] {
  const tokens: Token[] = [];
  const re = /(\s+)([\w:-]+)(?:(=)("([^"]*)"))?/g;
  let last = 0,
    m;
  while ((m = re.exec(str)) !== null) {
    if (m.index > last)
      tokens.push({ text: str.slice(last, m.index), color: "#abb2bf" });
    tokens.push({ text: m[1], color: "#abb2bf" });
    tokens.push({ text: m[2], color: "#d19a66" });
    if (m[3]) {
      tokens.push({ text: "=", color: "#abb2bf" });
      tokens.push({ text: `"${m[5]}"`, color: "#98c379" });
    }
    last = m.index + m[0].length;
  }
  if (last < str.length)
    tokens.push({ text: str.slice(last), color: "#abb2bf" });
  return tokens;
}

function tokenizeInline(str: string): Token[] {
  const tokens: Token[] = [];
  const re = /(<\/?)([a-zA-Z][\w]*)([^>]*)(\/?>)/g;
  let last = 0,
    m;
  while ((m = re.exec(str)) !== null) {
    if (m.index > last)
      tokens.push({ text: str.slice(last, m.index), color: "#98c379" });
    tokens.push({ text: m[1], color: "#abb2bf" });
    tokens.push({ text: m[2], color: "#e06c75" });
    tokenizeAttrs(m[3]).forEach((t) => tokens.push(t));
    tokens.push({ text: m[4], color: "#abb2bf" });
    last = m.index + m[0].length;
  }
  if (last < str.length)
    tokens.push({ text: str.slice(last), color: "#98c379" });
  return tokens;
}

const LINES = code.split("\n");
const TOKENIZED = LINES.map(tokenizeLine);

// Flat char array for animation
const CHARS: Char[] = [];
for (let li = 0; li < TOKENIZED.length; li++) {
  for (const tok of TOKENIZED[li]) {
    for (const ch of tok.text) {
      CHARS.push({ char: ch, color: tok.color, line: li });
    }
  }
  if (li < TOKENIZED.length - 1) {
    CHARS.push({ char: "\n", color: "#abb2bf", line: li });
  }
}

// ── Component ──────────────────────────────────────────────────────────────
export default function CodeBlock2() {
  const [revealed, setRevealed] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const restartRef = useRef<boolean>(false);

  const SPEED = 22;
  const PAUSE_MS = 2600;

  useEffect(() => {
    function animate(ts: number) {
      if (restartRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const target = Math.min(
        Math.floor((elapsed * SPEED) / 1000),
        CHARS.length,
      );
      setRevealed(target);
      if (target < CHARS.length) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        restartRef.current = true;
        setTimeout(() => {
          setRevealed(0);
          startRef.current = null;
          restartRef.current = false;
          rafRef.current = requestAnimationFrame(animate);
        }, PAUSE_MS);
      }
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  const lineContents: { char: string; color: string }[][] = Array.from(
    { length: LINES.length },
    () => [],
  );
  for (let i = 0; i < revealed; i++) {
    const { char, color, line } = CHARS[i];
    if (char !== "\n") lineContents[line].push({ char, color });
  }

  const cursorLine =
    revealed < CHARS.length
      ? (CHARS[revealed]?.line ?? LINES.length - 1)
      : LINES.length - 1;

  return (
    <div className=" relative flex items-center justify-center bg-[#070b12] font-mono">
        <div className="absolute inset-5 bg-gradient-to-r from-green-400 via-black to-black blur-3xl z-10 opacity-20"></div>
      <div className="relative w-full max-w-[680px] mx-6">
        {/* Ambient glow */}
        <div
          className="absolute -inset-[60px] pointer-events-none 
        bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(97,175,239,0.07)_0%,transparent_70%)]"
        />

        {/* Card */}
        <div
          className="relative rounded-[18px] overflow-hidden
        bg-[linear-gradient(160deg,#0e1420_0%,#0b0f19_100%)]
        border border-white/10
        shadow-[0_32px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          {/* Titlebar */}
          <div
            className="flex items-center gap-2 px-5 py-[13px]
          border-b border-white/10 bg-white/[0.025]"
          >
            {[
              ["#ff5f57", "#ff5f5755"],
              ["#febc2e", "#febc2e55"],
              ["#28c840", "#28c84055"],
            ].map(([c, glow], i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: c,
                  boxShadow: `0 0 6px ${glow}`,
                }}
              />
            ))}

            <span className="ml-auto text-xs tracking-widest text-white/20">
              main.py
            </span>
          </div>

          {/* Code body */}
          <div className="flex px-6 pt-6 pb-7 overflow-x-auto">
            {/* Line numbers */}
            <div className="pr-6 text-sm leading-[26px] text-right select-none min-w-[28px] shrink-0">
              {LINES.map((_, i) => (
                <div
                  key={i}
                  className={`transition-colors duration-150 ${
                    i === cursorLine ? "text-white/40" : "text-white/20"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code lines */}
            <div className="flex-1 text-sm leading-[26px]">
              {LINES.map((_, li) => {
                const chars = lineContents[li] || [];
                const isActive = li === cursorLine;

                return (
                  <div
                    key={li}
                    className={`min-h-[26px] whitespace-pre rounded px-[2px] transition-all duration-150 ${
                      isActive ? "bg-[#61afef]/10" : ""
                    }`}
                  >
                    {chars.map(({ char, color }, ci) => (
                      <span key={ci} style={{ color }}>
                        {char === " " ? "\u00a0" : char}
                      </span>
                    ))}

                    {isActive && revealed < CHARS.length && (
                      <span
                        className={`inline-block w-[2px] h-[0.9em] ml-[1px] rounded 
                        align-bottom transition-all duration-150 ${
                          showCursor
                            ? "bg-[#61afef] shadow-[0_0_8px_#61afef99]"
                            : "bg-transparent"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Token = {
  text: string;
  color: string;
};

type Char = {
  char: string;
  color: string;
  line: number;
};
