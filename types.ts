export type WindowId =
  | "hero"
  | "about"
  | "projects"
  | "resume"
  | "contact"
  | "terminal"
  | "stack"
  | "pricing"
  | "customers"
  | "demo"
  | "docs"
  | "signup";

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: string | number; height: string | number };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  video?: string;
  link: string;
}

export interface DesktopIconDef {
  id: WindowId;
  label: string;
  iconType:
    | "file"
    | "folder"
    | "app"
    | "media"
    | "mail"
    | "chat"
    | "compass"
    | "calc";
}

// Added NavItem interface to support navigation components
export interface NavItem {
  label: string;
  windowId?: WindowId;
  externalLink?: string;
  items?: NavItem[];
}
