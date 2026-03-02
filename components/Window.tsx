import React, { useState, useRef, useEffect } from "react";
import { X, Minus, Maximize2 } from "lucide-react";
import { WindowId, WindowState } from "../types";

interface WindowProps {
  window: WindowState;
  onClose: (id: WindowId) => void;
  onFocus: (id: WindowId) => void;
  onMinimize: (id: WindowId) => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  window,
  onClose,
  onFocus,
  onMinimize,
  children,
}) => {
  const [pos, setPos] = useState(window.position);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(window.id);
    if ((e.target as HTMLElement).closest(".window-header")) {
      setIsDragging(true);
      dragStart.current = {
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPos({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!window.isOpen) return null;

  return (
    <div
      className={`absolute transition-opacity duration-200 bg-white backdrop-blur-lg rounded-lg overflow-hidden window-shadow flex flex-col pointer-events-auto
        max-sm:!fixed max-sm:!left-0 max-sm:!top-14 max-sm:!w-full max-sm:!h-[calc(100svh-3.5rem)] max-sm:!rounded-none
        ${isDragging ? "opacity-90 select-none" : "opacity-100"}`}
      style={{
        left: pos.x,
        top: pos.y,
        width: window.size.width,
        height: window.size.height,
        zIndex: window.zIndex,
      }}
      onMouseDown={() => onFocus(window.id)}
    >
      {/* Header Bar */}
      <div
        className="window-header h-10 bg-zinc-800 border-b border-zinc-900 flex items-center justify-between px-4 sm:cursor-grab sm:active:cursor-grabbing shrink-0 text-white relative"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onClose(window.id)}
            className="w-4 h-4 rounded-full bg-red-400 border border-black hover:bg-red-500 transition-colors flex items-center justify-center group"
          >
            <X
              className="w-3 h-3 text-black opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={3}
            />
          </button>
          <button
            onClick={() => onMinimize(window.id)}
            className="w-4 h-4 rounded-full bg-yellow-400 border border-black hover:bg-yellow-500 transition-colors flex items-center justify-center group"
          >
            <Minus
              className="w-3 h-3 text-black opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={3}
            />
          </button>
          <button className="w-4 h-4 rounded-full bg-green-400 border border-black hover:bg-green-500 transition-colors flex items-center justify-center group">
            <Maximize2
              className="w-3 h-3 text-black opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={3}
            />
          </button>
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-xs font-bold text-zinc-100 mono uppercase tracking-tighter truncate max-w-[200px]">
          {window.title}
        </span>
      </div>

      {/* Content Area */}
      <div
        className={`flex-1 overflow-y-auto no-scrollbar ${
          window.id === "terminal"
            ? "bg-transparent p-0"
            : "bg-white p-4 sm:p-6"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;
