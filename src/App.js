import React, { useState, useEffect } from "react";

import { data } from "./components/data";
import Header from "./components/Header";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Overlay from "./components/Overlay";

import "./app.css";

function App() {
    const [cardsShown, setCardsShown] = useState(3);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    //Checking the device screen dimensions
    useEffect(() => {
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
        });
    }, []);

    //Determine how many cards to display according to screen size
    useEffect(() => {
        if (innerWidth < 768) {
            setCardsShown(1);
        } else if (720 < innerWidth && innerWidth < 1150) {
            setCardsShown(2);
        } else {
            setCardsShown(3);
        }
    }, [innerWidth]);

    return (
        <div className="page-wrapper">
            <Header />
            <div className="main">
                <Overlay />
                <Carousel cardsShown={cardsShown}>
                    {data.map((card, i) => {
                        return <Card card={card} key={i} />;
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default App;
