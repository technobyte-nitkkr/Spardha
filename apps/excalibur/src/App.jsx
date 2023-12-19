import './App.css'
import Background from './Background/Background'
import Countdown from './Countdown/Countdown'
import Navbar from './navbar/Navbar'
import MyTypeform from './Typeform/MyTypeform'
import Event from './Event/Event'
import TimeLine from './Timeline/Timeline'
function App() {
  return (
    <div className='excalibur'>
      <Navbar />
      <h1>EXCALIBUR</h1>
      {/* <MyTypeform /> */}
      <Countdown />
      <Event />
      <TimeLine />
      <Background />
    </div>
  )
}

export default App
