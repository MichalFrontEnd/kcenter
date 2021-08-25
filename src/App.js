import './App.css';
import {useState} from 'react';
import {cards} from './components/data'
import Button from './components/Button'

function App() {
  const [current, setCurrent] = useState(0);
  const length = cards.length;
  const [isFirst, setIsFirst] = useState(null);

  const prevCard = () => {
        setCurrent(current === 0 ? 0 : current - 1 )
  }

  const nextCard = () => {
    setCurrent(current === length -1? length-1 : current + 1  )
  }

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
      <div className="carousel-container">
        {cards && (
          cards.map((item) => {
            return (
              <div 
              key={item.id} 
              className="carousel-card" 
              id={item.id} 
              //onClick={printCurrent}
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
      <div className="opaque"></div>
      </div>
      <button className="prev" onClick={prevCard}>Prev</button>
      <button className="next" onClick={nextCard}>Next</button>
    </div>
  );
}

export default App;
