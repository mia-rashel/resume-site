import { useState, useMemo } from "react";

function isMobileUA() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
    navigator.userAgent
  );
}

export default function SmartEmailButton({
  to,
  subject = "",
  body = "",
  className = "",
  children = "Contact Me",
}) {
  const [open, setOpen] = useState(false);

  const urls = useMemo(() => {
    const toEnc = encodeURIComponent(to);
    const suEnc = encodeURIComponent(subject);
    const bodyEnc = encodeURIComponent(body);

    return {
      mailto: `mailto:${to}?subject=${suEnc}&body=${bodyEnc}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${toEnc}&su=${suEnc}&body=${bodyEnc}`,
      outlook: `https://outlook.office.com/mail/deeplink/compose?to=${toEnc}&subject=${suEnc}&body=${bodyEnc}`,
      yahoo: `https://compose.mail.yahoo.com/?to=${toEnc}&subject=${suEnc}&body=${bodyEnc}`,
    };
  }, [to, subject, body]);

  const openUrl = (url) => {
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = url; // popup blocked → fallback
  };

  const handlePreferredOpen = (e) => {
    e.preventDefault();

    // Mobile: always use the default mail app
    if (isMobileUA()) {
      window.location.href = urls.mailto;
      return;
    }

    // Desktop: check saved preference
    const pref = localStorage.getItem("emailPref");
    if (!pref) {
      setOpen(true); // show chooser
      return;
    }

    const map = { gmail: urls.gmail, outlook: urls.outlook, yahoo: urls.yahoo, default: urls.mailto };
    openUrl(map[pref] || urls.mailto);
  };

  const choose = (pref) => {
    localStorage.setItem("emailPref", pref);
    const map = { gmail: urls.gmail, outlook: urls.outlook, yahoo: urls.yahoo, default: urls.mailto };
    openUrl(map[pref] || urls.mailto);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <a href={urls.mailto} onClick={handlePreferredOpen} className={className}>
        {children}
      </a>

      {/* Tiny chooser popover */}
      {open && (
        <div
          className="absolute z-[100] mt-2 w-56 rounded-lg border border-[#1c3b4d]/15 bg-white shadow-lg p-2"
          style={{ left: 0 }}
        >
          <p className="text-sm text-[#1c3b4d]/70 px-2 pb-2">Open with:</p>
          <button
            onClick={() => choose("gmail")}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-[#f3e6dd] text-[#1c3b4d]"
          >
            Gmail (web)
          </button>
          <button
            onClick={() => choose("outlook")}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-[#f3e6dd] text-[#1c3b4d]"
          >
            Outlook (web)
          </button>
          <button
            onClick={() => choose("yahoo")}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-[#f3e6dd] text-[#1c3b4d]"
          >
            Yahoo Mail (web)
          </button>
          <button
            onClick={() => choose("default")}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-[#f3e6dd] text-[#1c3b4d]"
          >
            Default Mail App
          </button>
        </div>
      )}
    </div>
  );
}
