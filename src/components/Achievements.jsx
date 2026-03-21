import { useEffect, useState } from "react";

export function Achievements() {
  const [visible, setVisible] = useState([]);
  const [selected, setSelected] = useState(null);

  const data = [
    {
      title: "First Prize - Algorithm Competition",
      desc: "First prize of the Quang Binh provincial algorithm competition",
      year: "2020",
      medal: "🥇",
      highlight: true,
      image: "/cert1.jpg"
    },
    {
      title: "First Prize - Young IT",
      desc: "Won the first prize in young information technology in Quang Binh province",
      year: "2017",
      medal: "🥇",
      image: "/cert2.jpg"
    },
    {
      title: "National Youth Informatics Award",
      desc: "Won the National Youth Informatics Encouragement Award",
      year: "2017",
      medal: "🥉",
      image: "/cert3.jpg"
    }
  ];

  // scroll animation
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title">🏆 Achievements</h2>

        <div className="timeline">
          {data.map((item, i) => (
            <div
              key={i}
              className={`timeline-item ${item.highlight ? "highlight" : ""}`}
            >
              <div className="timeline-dot"></div>

              <div
                className="timeline-content"
                onClick={() => setSelected(item)}
              >
                <div className="top">
                  <span className="medal">{item.medal}</span>
                  <span className="year">{item.year}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <span className="view-more">View Certificate →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selected.title}</h3>
            <p>{selected.desc}</p>

            <img src={selected.image} alt="certificate" />

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
