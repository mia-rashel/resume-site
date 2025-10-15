// src/components/NavigationOverlay.jsx
import { useEffect } from "react";
import { X } from "lucide-react";
import "../CSS/NavigationOverlay.css";

/** Header height offset so the target isn't hidden under the fixed header */
const SCROLL_OFFSET = 84;

/** Scroll to an element by id with header offset + update the URL hash */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
  history.pushState(null, "", `#${id}`);
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function NavigationOverlay({ open, onClose }) {
  // Lock background scroll + show #navigation while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // show an overlay hash so back/refresh shows the overlay state
      if (window.location.hash !== "#navigation") {
        history.pushState(null, "", "#navigation");
      }
    } else {
      document.body.style.overflow = "";
      if (window.location.hash === "#navigation") {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    scrollToId(id);
    onClose();
  };

  return (
    <div className={`overlay ${open ? "overlay-open" : ""}`} role="dialog" aria-modal="true">
      {/* Close */}
      <button className="close-btn" onClick={onClose} aria-label="Close navigation">
        <X size={28} />
      </button>

      {/* Links */}
      <nav className={`nav-links ${open ? "animate-links" : ""}`} aria-label="Site">
        <button onClick={() => go("home")} className="nav-link-btn">Home</button>
        <button onClick={() => go("about")} className="nav-link-btn">About</button>
        <button onClick={() => go("skills")} className="nav-link-btn">Skills</button>
        <button onClick={() => go("projects")} className="nav-link-btn">Projects</button>
        <button onClick={() => go("contact")} className="nav-link-btn">Contact</button>
      </nav>
    </div>
  );
}
