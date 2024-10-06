import './App.css'
import Orrery from './Orrery';

function App() {
  return (
    <>
      <div>
        <div className='hero'>
          <video autoPlay loop muted playsInline className='video'>
            <source src="/space1.mp4" type="video/mp4" />
          </video>
          <div className='content'>
            <h1 className='title'>Orrery Wep App</h1>
          </div>
        </div>
      </div>
      <Orrery />
    </>
  )
}

export default App;