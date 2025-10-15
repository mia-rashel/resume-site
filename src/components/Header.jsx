import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import NavigationOverlay from "./NavigationOverlay.jsx";
import Logo from "./Logo.jsx"
import { scrollToId } from "../utils/scrollToId";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#navigation") {
      setOpen(true);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-[#f3e6dd] z-50">
      {/* Logo */}
      <a
  href="#home"
  className="flex items-center"
  onClick={(e) => {
    e.preventDefault();
    // if overlay hash is present, clear it first
    if (window.location.hash === "#navigation") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    scrollToId("home");
    setOpen(false);
  }}
>
  <Logo className="h-10 w-10 md:h-14 md:w-14" />
</a>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="bg-[#f3e6dd] p-2 rounded-md text-[#1c3b4d] focus:outline-none hover:bg-[#e9d7c7]"
      >
        <Menu size={28} />
        <span className="sr-only">Menu</span>
      </button>

      {/* Overlay */}
      <NavigationOverlay open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
