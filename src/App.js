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
    document.body.style.backgroundColor = 'transparent'
    const rootElement = document.getElementById('root')
    rootElement.style.backgroundColor = '#ffd60a'
    rootElement.style.backgroundClip = background
    // rootElement.style.backgroundColor = 'transparent'
    const children = rootElement.childNodes
    for (const child of children) {
    }
  }, [])

  return (
  <div style={{
    overflow: 'scroll',
    backgroundColor: 'transparent'
  }}>
    <div style={{
      content: "",
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: `url(${background}) no-repeat center center fixed`,
      backgroundSize: 'cover',
      opacity: 0.36,
      zIndex: -1,  
    }}>
    </div>
    <div style={{
      marginTop: '30px',
      marginLeft: '35px',
      fontSize: '45px',
      fontWeight: 'bold',
      color: '#001d3d',
      backgroundColor: 'transparent'
    }}>
      Batman Gets an Apology
    </div>
    <div style={{
      backgroundColor: 'transparent',
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
  )
}

export { App }
