import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "./carousel.css";

const Carousel = ({ children, cardsShown }) => {
    const cardsNum = children.length;
    const [current, setCurrent] = useState(0);

    //disables "buttons" if reached beginning/end
    const style = {
        opacity: 0.3,
    };

    const nextCard = () => {
        if (current <= cardsNum - 1 - cardsShown) {
            setCurrent((prevIndex) => prevIndex + 1);
        }
        //if should be continuous
        //setCurrent(current === cardsNum -cardsShown? 0 : current + 1)
    };

    const prevCard = () => {
        if (current !== 0) {
            setCurrent((prevIndex) => prevIndex - 1);
        }
        //if should be continuous
        //setCurrent(current === 0 ? cardsNum-cardsShown : current - 1 )
    };

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
                <BsArrowLeft className="prev" onClick={prevCard} style={current === 0 ? style : null} />
                <BsArrowRight className="next" onClick={nextCard} style={current === cardsNum - cardsShown ? style : null} />
            </div>
        </div>
    );
};

export default Carousel;
