import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

function App() {
  // states
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)

  // effect loops infinite loop
  useEffect( () => {
    startGame()
  }, [])

  // rewrite den configuration every 1500 ms
  function startGame() {
    setInterval(() => {
      setDens(getDensState())
    }, 1500)
  }

  // loops through dens to re-assign visibility status randomly
  function getDensState() {
    return new Array(9).fill({}).map(() => {
      return {
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }

  // adds a point on function call
  function onMoleWhacked() {
    setPoints(points + 1)
  }

  // loops through dens and returns Mole components with associated prop values
  const denElements = dens.map((den, index) => {
    return (
      <Mole key={`mole-${index}`} visible={dens[index]['isMoleVisible']} onMoleWhacked={onMoleWhacked} />
    )
  })

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: { points }</h2>
      <div className="dens">
        { denElements }
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App
