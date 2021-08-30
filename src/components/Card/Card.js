import React from "react";
import "./card.css";

const Card = ({ card }) => {
    return (
        <div className="carousel-card">
            <img src={card.src} alt="card" />
            <h2>{card.header}</h2>
            {card.sub.map((text, index) => {
                return <p key={index}>{text}</p>;
            })}
            <button className="card-btn">Learn More</button>
        </div>
    );
};

export default Card;
