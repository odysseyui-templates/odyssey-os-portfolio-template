import React, { useState } from "react";
import { AlertCircle, Menu, X } from "lucide-react";
import { WindowId } from "../types";
import { Facehash } from "facehash";
interface NavbarProps {
  onOpenWindow: (id: WindowId) => void;
  onToggleNowBuilding?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onOpenWindow,
  onToggleNowBuilding,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Work", windowId: "projects" },
    { label: "Stack", windowId: "stack" },
    { label: "Education", windowId: "about" },
    { label: "Experience", windowId: "resume" },
    { label: "Terminal", windowId: "terminal" },
    { label: "Summary", windowId: "hero" },
  ];

  const handleMenuItemClick = (windowId: string) => {
    onOpenWindow(windowId as WindowId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-14 bg-[#e6e4d9] border-b border-zinc-400/30 z-[10000] flex items-center px-4 justify-between select-none">
        <div className="flex items-center gap-3 sm:gap-6">
          <div
            className="flex flex-col gap-0.5 cursor-pointer hover:opacity-80 transition-opacity rounded-md"
            onClick={() => onOpenWindow("hero")}
          >
            <div className="flex gap-0.5">
              <Facehash
                name="shrek"
                variant="gradient"
                className=" rounded-full text-black"
                colors={[`#b8bb26`]}
                size={32}
              />
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map(item => (
              <button
                key={item.label}
                onClick={() => onOpenWindow(item.windowId as WindowId)}
                className="text-[15px] font-semibold text-zinc-800 hover:text-black transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-1.5 hover:bg-zinc-800/10 rounded-md transition-colors text-zinc-800"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Right Side Actions */}

        <div className="flex items-center gap-4">
          <button
            className="contact-btn"
            onClick={() => onOpenWindow("contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              width="36px"
              height="36px"
            >
              <rect width="36" height="36" x="0" y="0" fill="#fdd835" />
              <path
                fill="#e53935"
                d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
              />
              <path
                fill="#b71c1c"
                d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
              />
              <path
                fill="#212121"
                d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
              />
              <path
                fill="#01579b"
                d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
              />
              <path
                fill="#212121"
                d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
              />
              <path
                fill="#81d4fa"
                d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
              />
              <path
                fill="#212121"
                d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z"
              />
              <path
                fill="#e1f5fe"
                d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
              />
            </svg>

            <span className="now">me</span>
            <span className="play">contact</span>
          </button>

          {/* Icons */}
          <div className="flex items-center gap-3 text-zinc-700">
            <button
              className="p-1.5 hover:bg-zinc-800/5 rounded-md transition-colors"
              onClick={onToggleNowBuilding}
            >
              <AlertCircle className="w-5 h-5" />
            </button>

            <button
              className="p-1 hover:bg-zinc-800/5 rounded-full transition-colors"
              onClick={() => onOpenWindow("hero")}
            >
              <div className="w-7 h-7 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-14 left-0 right-0 bg-[#e6e4d9] border-b border-zinc-400/30 z-[9999] select-none animate-fade-in">
          <div className="flex flex-col py-2">
            {menuItems.map(item => (
              <button
                key={item.label}
                onClick={() => handleMenuItemClick(item.windowId)}
                className="w-full text-left px-5 py-3 text-[15px] font-semibold text-zinc-800 hover:bg-zinc-800/10 hover:text-black transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
