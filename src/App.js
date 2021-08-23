import './App.css';
import {arr} from './components/data'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <h1 className="head">Latana Knowledge Center</h1>
      <h6>Everything you need to know about the best brand tracking solution in the world.</h6>
      <div className="carousel-container">
        {arr && (
          arr.map((item, i) => {
            return (
              <div key={i} className="carousel-card">
                <img src={item.src} alt="" />
                <h2>{item.header}</h2>
                <p>{item.a}</p>
                <p>{item.b}</p>
                <p>{item.c}</p>
                <Button />
              </div>
            )
          })
        )}

      </div>


    </div>
  );
}

export default App;
