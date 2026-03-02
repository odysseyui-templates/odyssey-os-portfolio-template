import React from "react";
import { PERSONAL, HERO_CODE_SNIPPET } from "@/global.config";

const HeroContent: React.FC<{ onOpenProjects: () => void }> = ({
  onOpenProjects,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center py-2 sm:py-4">
      <div className="flex-1 space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-600 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {PERSONAL.statusBadge}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1]">
          {PERSONAL.name}{" "}
          <span className="text-[#f3a033]">{PERSONAL.lastName}</span>.
        </h1>
        <p className="text-base sm:text-xl text-zinc-600 leading-relaxed font-medium">
          {PERSONAL.bio} Specializing in{" "}
          {PERSONAL.specializations.map((s, i) => (
            <React.Fragment key={s}>
              <span className="text-zinc-900 font-bold">{s}</span>
              {i < PERSONAL.specializations.length - 1 ? ", " : "."}
            </React.Fragment>
          ))}
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
          <button
            onClick={onOpenProjects}
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-tighter text-sm sm:text-base"
          >
            Explore Projects
          </button>
          <div className="group relative">
            <div className="flex items-center gap-2 sm:gap-3 bg-zinc-100 border border-zinc-200 px-3 py-3 sm:px-5 sm:py-4 rounded-xl text-xs sm:text-sm mono font-bold text-zinc-600">
              <span className="text-zinc-400">#</span> {PERSONAL.currentWork}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md hidden md:block">
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <span className="text-[10px] mono text-white/30 ml-2">
              summary.json
            </span>
          </div>
          <div className="p-6 mono text-sm leading-relaxed">
            <div className="text-blue-400">
              const{" "}
              <span className="text-purple-400">
                {HERO_CODE_SNIPPET.constName}
              </span>{" "}
              = {"{"}
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">focus:</span>{" "}
              <span className="text-green-400">
                &apos;{HERO_CODE_SNIPPET.focus}&apos;
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">experience:</span>{" "}
              <span className="text-green-400">
                &apos;{HERO_CODE_SNIPPET.experience}&apos;
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">goals:</span>{" "}
              <span className="text-green-400">
                [
                {HERO_CODE_SNIPPET.goals.map((g, i) => (
                  <React.Fragment key={g}>
                    &apos;{g}&apos;
                    {i < HERO_CODE_SNIPPET.goals.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                ]
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">tech:</span>{" "}
              <span className="text-green-400">
                [
                {HERO_CODE_SNIPPET.tech.map((t, i) => (
                  <React.Fragment key={t}>
                    &apos;{t}&apos;
                    {i < HERO_CODE_SNIPPET.tech.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                ]
              </span>
            </div>
            <div className="text-blue-400">{"}"}</div>
            <div className="mt-4 text-zinc-500 italic">
              {HERO_CODE_SNIPPET.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
