import { useState } from "react";

export function Certificates() {
  const [open, setOpen] = useState(false);

  return (
    <section id="certificates" className="section languages">
      <div className="container">

        <h2 className="languages-title">Certificates</h2>

        <div className="languages-card">

          {/* Info */}
          <div className="language-info">
            <h3>English</h3>
            <p className="score">TOEIC 465</p>

            {/* progress */}
            <div className="lang-bar">
              <div className="lang-progress" style={{ width: "55%" }}></div>
            </div>

            <button onClick={() => setOpen(true)}>
              View Certificate
            </button>
          </div>

          {/* Image preview */}
          <div className="language-image" onClick={() => setOpen(true)}>
            <img src="/toeic.jpg" alt="TOEIC Certificate" />
          </div>

        </div>

        {/* MODAL */}
        {open && (
          <div className="modal" onClick={() => setOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src="/toeic.jpg" alt="TOEIC" />
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
