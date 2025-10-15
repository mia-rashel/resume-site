import { useEffect, useRef, useState } from "react";
import { Mail, Copy, X, ExternalLink } from "lucide-react";
import "../CSS/ContactSheet.css";

export default function ContactSheet({
  email = "muhammadrashel2015@gmail.com",
  subject = "Hello Muhammad",
  body = "Hi Muhammad,\n\nI came across your portfolio and would love to connect.",
  triggerClassName = "btn-secondary",
  children = "Contact Me",
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const panelRef = useRef(null);

  const enc = encodeURIComponent;
  const mailto  = `mailto:${email}?subject=${enc(subject)}&body=${enc(body)}`;
  const gmail   = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(email)}&su=${enc(subject)}&body=${enc(body)}`;
  const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${enc(email)}&subject=${enc(subject)}&body=${enc(body)}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const onClickAway = (e) => { if (panelRef.current && !panelRef.current.contains(e.target)) close(); };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickAway);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickAway);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <>
      <button type="button" className={triggerClassName} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div className="cs-overlay" role="dialog" aria-modal="true">
          <div ref={panelRef} className="cs-modal">
            {/* Header */}
            <div className="cs-header">
              <div>
                <h3 className="cs-title">Get in touch</h3>
                <p className="cs-email">{email}</p>
              </div>
              <button type="button" className="cs-close" onClick={close} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="cs-body">
              {/* Gmail */}
              <a href={gmail} target="_blank" rel="noopener noreferrer" className="cs-row">
                <div className="cs-icon" style={{ background: "rgba(201, 75, 75, .10)", color: "#c94b4b" }}>
                  <ExternalLink size={18} />
                </div>
                <div>
                  <div className="cs-row-title">Gmail (web)</div>
                  <div className="cs-row-sub">Open compose with your address prefilled</div>
                </div>
              </a>

              {/* Outlook */}
              <a href={outlook} target="_blank" rel="noopener noreferrer" className="cs-row">
                <div className="cs-icon" style={{ background: "rgba(15,108,189,.10)", color: "#0F6CBD" }}>
                  <ExternalLink size={18} />
                </div>
                <div>
                  <div className="cs-row-title">Outlook (web)</div>
                  <div className="cs-row-sub">Microsoft 365 &amp; Outlook.com</div>
                </div>
              </a>

              {/* Default mail app */}
              <a href={mailto} className="cs-row">
                <div className="cs-icon" style={{ background: "rgba(28,59,77,.10)", color: "#1c3b4d" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="cs-row-title">Default mail app</div>
                  <div className="cs-row-sub">Apple Mail, Thunderbird, native apps</div>
                </div>
              </a>

              {/* Copy */}
              <button type="button" onClick={copyEmail} className="cs-row" style={{ textAlign: "left" }}>
                <div className="cs-icon" style={{ background: "rgba(28,59,77,.10)", color: "#1c3b4d" }}>
                  <Copy size={18} />
                </div>
                <div>
                  <div className="cs-row-title">{copied ? "Copied!" : "Copy email"}</div>
                  <div className="cs-row-sub">Paste anywhere you like</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
