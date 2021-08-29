import './App.css';
import {useState, useRef, useEffect} from 'react';
import {cards} from './components/data'
import Button from './components/Button'
import { BsArrowRight, BsArrowLeft} from 'react-icons/bs'


function App() {
  const [current, setCurrent] = useState(0);
  const length = cards.length;
  const [x, setX] = useState(0);

  //get dynamic width

  const width = 400;
  const style = {
    width:`${width}px`, 
    transform: `translateX(${x}px)`
  }


  const prevCard = () => {
    if (current !== 0) {
      setCurrent(current - 1)
      setX(x+width)
    } else {
      setCurrent(0)
    }
        //setCurrent(current === 0 ? 0 : current - 1)
  }

  const nextCard = () => {
    if (current !== length -1) {
      setCurrent(current + 1)
      setX(x-width)
    } else {
      setCurrent(length -1)
    }
    //setCurrent(current === length -1? length-1 : current + 1 )
  }
  console.log('x: ', x);

    //if should be continuous
  //const prevCard = () => {
  //      setCurrent(current === 0 ? length-1 : current - 1 )
  //}

  //const nextCard = () => {
  //  setCurrent(current === length -1? 0 : current + 1  )
  //}

  //console.log('current: ', current);

  return (
    <>
      <header className="head">
        <h1>Latana Knowledge Center</h1>
        <p>Everything you need to know about the best brand tracking solution in the world.</p>
      </header>
      <div className="opaque"></div>
      <div className="carousel-container">
        <div className="opaque"></div>
        {cards && (
          cards.map((item, i) => {
            return (
              <div 
              key={i} 
              className= {i === current? "carousel-card active" : "carousel-card"} 
              style={style}
              >
                <img src={item.src} alt="" />
                <div className="card-text">
                  <h2>{item.header}</h2>
                  <p>{item.a}</p>
                  <p>{item.b}</p>
                  <p>{item.c}</p>
                </div>
                <Button to={item.href}/>
              </div>
            )
          })
        )}
      </div>
      <div className="arrow-container">
        <BsArrowLeft className="prev" onClick={prevCard} />
        <BsArrowRight className="next" onClick={nextCard} />
      </div>
    </>
  );
}

export default App;
