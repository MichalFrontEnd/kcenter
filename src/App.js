import React, { useState, useEffect } from "react";
import {data} from "./components/data"
import Header from "./components/Header";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Overlay from "./components/Overlay";

import "./app.css";


function App() {
  const [cardsShown, setCardsShown] = useState(3);

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
