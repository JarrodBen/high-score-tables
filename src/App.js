import React, { useState } from 'react'
import './App.css';
import allCountryScores from './scores'
import HighScoreTable from './components/HighScoreTable';
import WorldRecords from './components/WorldRecords';

function App() {
  const [descending, setDescending] = useState(true)

  const switchScoreOrder = () => {
    setDescending(!descending)
  }
  
  const descendingOrder = (a,b) => {
    return (b.s - a.s)
  }

  const ascendingOrder = (a,b) => {
      return (a.s - b.s)
  }

  return (
    <div className="container">
      <button className="btn" onClick={switchScoreOrder}>
        {descending ? 'Scores by Ascending' : 'Scores by Descending'}
      </button>
      <WorldRecords 
        descending={descending}
        descendingOrder={descendingOrder}
        ascendingOrder={ascendingOrder}
      />
      <h1>High Scores per Country</h1>

      {
        allCountryScores.sort((a,b) => a.name.localeCompare(b.name)).map(country => {
          const {name, scores} = country

          return <HighScoreTable name={name} scores={scores}
                  descending={descending}
                  descendingOrder={descendingOrder}
                  ascendingOrder={ascendingOrder} />
        })
      }
    </div>
  );
}

export default App;
