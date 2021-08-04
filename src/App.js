import './App.css';
import background from './img/background/marcin-lukasik-uYpOYyJdhRE-unsplash.jpeg'

import { CellCard } from './cards/CellCard'

let listOfImages = []

const importAll = (urls) => {
  return urls.keys().map(urls)
}

const App = () => {


  return (
  <div>
    <div style={{
      marginTop: '30px',
      marginLeft: '35px',
      fontSize: '45px',
      fontWeight: 'bold',
      color: '#ffc300',
      color: '#e0ac00',
      color: '#001d3d',
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
}

export { App }
