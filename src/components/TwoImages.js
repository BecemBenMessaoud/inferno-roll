import React from "react";
import "./TwoImages.css";

const TwoImages = () => {
  const cards = [
    { title: " 1.27", text: "At High-Risk Homes in California " },
    { title: "844.000", text: "Single-family homes." },
    { title: "Areas in CA", text: "5 Most popular metropolitan statistical areas in CA :LA, SF, SD, RIV, SAC ." }
  ];

  return (
    <section className="twoimages">
      <div className="twoimages-container">
        {/* Images */}
        <img src="/images/states1.png" alt="Map" className="left-img" />
        <img src="/images/expand.png" alt="Expanded" className="right-img" />

        {/* Cards */}
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoImages;
