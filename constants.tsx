import { DesktopIconDef, Project, WindowId, NavItem } from "./types";
import { TERMINAL_CONFIG } from "./global.config";
export { PROJECTS } from "./global.config";

export const DESKTOP_ICONS: DesktopIconDef[] = [
  { id: "hero", label: "summary.mdx", iconType: "file" },
  { id: "projects", label: "Projects", iconType: "folder" },
  { id: "stack", label: "Stack.json", iconType: "calc" },
  { id: "resume", label: "experience.mdx", iconType: "file" },
  { id: "demo", label: "demo.mov", iconType: "media" },
  { id: "about", label: "Education", iconType: "file" },
  { id: "contact", label: "Contact", iconType: "mail" },
  { id: "terminal", label: "Terminal", iconType: "chat" },
  { id: "signup", label: "GitHub ↗", iconType: "compass" },
];

export const INITIAL_WINDOWS: Record<
  WindowId,
  {
    title: string;
    size: { width: string; height: string };
    defaultOpen: boolean;
  }
> = {
  hero: {
    title: "summary.mdx",
    size: { width: "800px", height: "700px" },
    defaultOpen: false,
  },
  projects: {
    title: "Project Explorer",
    size: { width: "900px", height: "600px" },
    defaultOpen: false,
  },
  stack: {
    title: "Tech Stack",
    size: { width: "600px", height: "500px" },
    defaultOpen: false,
  },
  resume: {
    title: "experience.mdx",
    size: { width: "750px", height: "700px" },
    defaultOpen: false,
  },
  about: {
    title: "Education",
    size: { width: "600px", height: "550px" },
    defaultOpen: false,
  },
  contact: {
    title: "Contact Information",
    size: { width: "450px", height: "550px" },
    defaultOpen: false,
  },
  terminal: {
    title: `${TERMINAL_CONFIG.username}@portfolio: ~`,
    size: { width: "700px", height: "400px" },
    defaultOpen: true,
  },
  demo: {
    title: "demo.mov",
    size: { width: "800px", height: "550px" },
    defaultOpen: false,
  },
  // Unused in desktop icons but kept for type safety
  pricing: {
    title: "Pricing",
    size: { width: "500px", height: "400px" },
    defaultOpen: false,
  },
  customers: {
    title: "Customers",
    size: { width: "600px", height: "500px" },
    defaultOpen: false,
  },
  docs: {
    title: "Docs",
    size: { width: "700px", height: "600px" },
    defaultOpen: false,
  },
  signup: {
    title: "Sign Up",
    size: { width: "400px", height: "300px" },
    defaultOpen: false,
  },
};

export const NAV_LINKS: NavItem[] = [
  {
    label: "Explore",
    items: [
      { label: "Work", windowId: "projects" },
      { label: "Education", windowId: "about" },
      { label: "Stack", windowId: "stack" },
    ],
  },
  {
    label: "Experience",
    items: [
      { label: "Work History", windowId: "resume" },
      { label: "Demo Reel", windowId: "demo" },
    ],
  },
  { label: "Terminal", windowId: "terminal" },
];
