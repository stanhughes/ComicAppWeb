import logo from './logo.svg';
import './App.css';
import background from './img/background/marcin-lukasik-uYpOYyJdhRE-unsplash.jpeg'

function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${background})`}}>
      <header className="App-header">
        <h1>Mike Mercer</h1>
        <img src={background} />
        <img src={background} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      </div>
    </div>
  );
}

export default App;
