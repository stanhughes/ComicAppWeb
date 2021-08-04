import logo from './logo.svg';
import './App.css';
import background from './img/background/marcin-lukasik-uYpOYyJdhRE-unsplash.jpeg'

import { CellCard } from './cards/CellCard'

function App() {

  return (
  <div>
    <div style={{
      marginTop: '20px',
      marginLeft: '35px',
      fontSize: '45px',
      fontWeight: 'bold'
    }}>
      Batman Gets an Apology
    </div>
    <CellCard />
    <CellCard />
    <CellCard />
    <CellCard />
    <CellCard />
    <CellCard />
    <CellCard />
  </div>
  )
  return (
    <div style={{
      backgroundImage: `url(${background}) no-repeat center center fixed`
    }}
    >
      Hello Stan
    </div>
  )
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mike Mercer</h1>
        <img src={background} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <div ></div>
      </body>
    </div>
  );
}

export default App;
