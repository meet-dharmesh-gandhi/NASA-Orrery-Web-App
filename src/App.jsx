import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <div className='hero'>
        <video autoPlay loop muted playsInline>
          <source src="/space1.mp4" type="video/mp4" />
        </video>
        <div className='content'>
          <h1 className='title'>Orrery Wep App</h1>
        </div>
      </div>
    </div>
  )
}

export default App
