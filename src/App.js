import React, { useState, useEffect } from 'react'

import './App.css';
import background from './img/background/marcin-lukasik-uYpOYyJdhRE-unsplash.jpeg'

import { CellCard } from './cards/CellCard'

 let staticListOfImages = [
   { image: null, index: 1 },
   { image: null, index: 2 }
 ]

const importAll = (fileObjects) => {
  return fileObjects.keys().map(fileObjects)
}

const App = () => {
  const [listOfImages, setListOfImages] = useState(staticListOfImages)

  useEffect(() => {
    const performAsync = async () => {
      const listOfImages = 
        await importAll(require.context('./img/', true, /\.png$/))
      setListOfImages(listOfImages)      
    }

    performAsync()
  }, [])

  return (
  <article>
  <div style={{
    overflowY: 'scroll',
    backgroundColor: 'brown'
  }}>
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
    <div style={{
      overflowY: 'scroll',
      backgroundColor: 'blue'
    }}>
    {
      listOfImages 
      ? listOfImages.map(
        (image) => CellCard(image)
      )
      : null
    }
    </div>
  </div>
  </article>
  )
}

export { App }
