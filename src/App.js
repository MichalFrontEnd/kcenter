import './App.css';
import {useState, useRef, useEffect} from 'react';
import {cards} from './components/data'
import Button from './components/Button'

function App() {
  const [current, setCurrent] = useState(0);
  const length = cards.length;
  const [x, setX] = useState(0);
  const cardRef = useRef()

  console.log('cardRef: ', cardRef);


  //get dynamic width

  const width = 240;


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
  //const printCurrent = (e) => {
  //  console.log('e.currentTarget: ', e.currentTarget.id);
  //  let clicked = e.currentTarget.id;
  //  console.log('clicked === current: ', clicked === current);
  //}

    //if should be continuous
  //const prevCard = () => {
  //      setCurrent(current === 0 ? length-1 : current - 1 )
  //}

  //const nextCard = () => {
  //  setCurrent(current === length -1? 0 : current + 1  )
  //}

  //console.log('current: ', current);

  return (
    <div className="App">
      <header className="head">
        <h1>Latana Knowledge Center</h1>
        <p>Everything you need to know about the best brand tracking solution in the world.</p>
      </header>
      <div className="opaque"></div>
      <div className="carousel-container">
        {cards && (
          cards.map((item, i) => {
            return (
              <div 
              key={i} 
              className= {i === current? "carousel-card active" : "carousel-card"}
              style={{transform: `translateX(${x}px)`}}
              ref={cardRef}
              >
                {i === current && (
                  <section>
                    <img src={item.src} alt="" />
                    <div className="card-text">
                      <h2>{item.header}</h2>
                      <p>{item.a}</p>
                      <p>{item.b}</p>
                      <p>{item.c}</p>
                    </div>
                    <Button to={item.href}/>
                  </section>
                )}
              </div>
            )
          })
        )}
      </div>
      <div className="arrow-container">
        <button className="prev" onClick={prevCard}>Prev</button>
        <button className="next" onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
