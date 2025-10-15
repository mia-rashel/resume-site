// src/utils/scrollToId.js
export const SCROLL_OFFSET = 84; // match your header height

export function scrollToId(id, { replaceHash = false } = {}) {
  const el = document.getElementById(id);
  if (!el) return;

  const y =
    el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;

  // Update the URL hash so refresh keeps position
  if (replaceHash) {
    history.replaceState(null, "", `#${id}`);
  } else {
    history.pushState(null, "", `#${id}`);
  }

  window.scrollTo({ top: y, behavior: "smooth" });
}
