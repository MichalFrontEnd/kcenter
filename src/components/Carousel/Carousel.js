import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "./carousel.css";

const Carousel = ({ children, cardsShown }) => {
    const cardsNum = children.length;
    const [current, setCurrent] = useState(0);

    const nextCard = () => {
        if (current <= cardsNum - 1 - cardsShown) {
            setCurrent((prevIndex) => prevIndex + 1);
        }
    };

    const prevCard = () => {
        if (current !== 0) {
            setCurrent((prevIndex) => prevIndex - 1);
        }
    };

    //if should be continuous
  //const prevCard = () => {
  //      setCurrent(current === 0 ? length-1 : current - 1 )
  //}

  //const nextCard = () => {
  //  setCurrent(current === length -1? 0 : current + 1  )
  //}

    return (
        <div className="carousel">
            <div className="container">
                <div className="content-wrapper">
                    <div
                        className={`content show-${cardsShown}`}
                        style={{
                            transform: `translateX(-${current * (100 / cardsShown)}%)`,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div className="arrow-container">
                <BsArrowLeft className="prev" onClick={prevCard} />
                <BsArrowRight className="next" onClick={nextCard} />
            </div>
        </div>
    );
};

export default Carousel;
