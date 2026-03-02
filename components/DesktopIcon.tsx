import React from "react";
import { DesktopIconDef } from "../types";
import { FileText, Code2, Video, Mail } from "lucide-react";

interface DesktopIconProps {
  icon: DesktopIconDef;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, onClick }) => {
  const renderIcon = () => {
    const iconSize = 48;
    const iconClassName = "text-zinc-900";

    // Per-window custom icons
    if (icon.id === "hero") {
      // Summary
      return (
        <img
          src="/ticket.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "projects") {
      // Projects
      return (
        <img
          src="/attached-file.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "terminal") {
      // Terminal
      return (
        <img
          src="/command-line.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "signup") {
      // GitHub
      return (
        <img
          src="/github1.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "demo") {
    
      return (
        <img
          src="/work-in-progress.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "about") {
      // Education
      return (
        <img
          src="/graduation.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "resume") {
      // Experience
      return (
        <img
          src="/businessman.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "stack") {
      // Stack / skills
      return (
        <img
          src="/skills.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    if (icon.id === "contact") {
      // Contact
      return (
        <img
          src="/link.png"
          alt={icon.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      );
    }

    // Fallbacks by icon type
    switch (icon.iconType) {
      case "file":
        return <FileText size={iconSize} className={iconClassName} />;
      case "calc":
        return <Code2 size={iconSize} className={iconClassName} />;
      case "media":
        return <Video size={iconSize} className={iconClassName} />;
      case "mail":
        return <Mail size={iconSize} className={iconClassName} />;
      default:
        return <FileText size={iconSize} className={iconClassName} />;
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-1.5 cursor-pointer group w-24 py-3"
      onClick={onClick}
    >
      <div className="transition-transform group-hover:scale-110 active:scale-95">
        {renderIcon()}
      </div>
      <span className="text-[11px] font-bold text-zinc-900 bg-white/0 group-hover:bg-blue-600 group-hover:text-white px-1.5 py-0.5 rounded transition-colors desktop-icon-label whitespace-nowrap">
        {icon.label}
      </span>
    </div>
  );
};

export default DesktopIcon;
