import React, { useState } from "react";
import { TERMINAL_CONFIG } from "@/global.config";

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    ...TERMINAL_CONFIG.welcomeMessages,
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = `sh: command not found: ${cmd}`;
    let type: "normal" | "error" | "info" = "normal";

    if (cmd === "help") {
      response = TERMINAL_CONFIG.commands.help;
      type = "info";
    } else if (cmd === "bio") {
      response = TERMINAL_CONFIG.commands.bio;
    } else if (cmd === "skills") {
      response = TERMINAL_CONFIG.commands.skills;
    } else if (cmd === "github") {
      response = TERMINAL_CONFIG.commands.github.message;
      type = "info";
      window.open(TERMINAL_CONFIG.commands.github.url, "_blank");
    } else if (cmd === "contact") {
      response = TERMINAL_CONFIG.commands.contact;
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      type = "error";
    }

    setHistory([
      ...history,
      `${TERMINAL_CONFIG.username}@portfolio:~$ ${input}`,
      `${type}:${response}`,
    ]);
    setInput("");
  };

  return (
    <div
      className="h-full w-full mono text-sm overflow-auto no-scrollbar font-medium p-4"
      style={{
        backgroundColor: "#1d2021", // Gruvbox bg0 hard
        color: "#ebdbb2", // Gruvbox fg1
      }}
    >
      {history.map((line, i) => {
        // Prompt line
        if (line.startsWith(`${TERMINAL_CONFIG.username}@portfolio`)) {
          return (
            <div key={i} style={{ color: "#b8bb26" }}>
              {line}
            </div>
          );
        }

        // Error line
        if (line.startsWith("error:")) {
          return (
            <div key={i} style={{ color: "#fb4934" }}>
              {line.replace("error:", "")}
            </div>
          );
        }

        // Info line
        if (line.startsWith("info:")) {
          return (
            <div key={i} style={{ color: "#83a598" }}>
              {line.replace("info:", "")}
            </div>
          );
        }

        // Normal output
        return (
          <div key={i} style={{ color: "#d5c4a1" }}>
            {line}
          </div>
        );
      })}

      <form onSubmit={handleCommand} className="flex gap-2 mt-2">
        <span style={{ color: "#b8bb26" }}>
          {TERMINAL_CONFIG.username}@portfolio:~$
        </span>
        <input
          autoFocus
          className="bg-transparent border-none outline-none flex-1"
          style={{ color: "#ebdbb2" }}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Terminal;
