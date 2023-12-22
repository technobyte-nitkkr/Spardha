import './App.css'
import Background from './Background/Background'
import Countdown from './Countdown/Countdown'
import Navbar from './navbar/Navbar'
import Event from './Event/Event'
import TimeLine from './Timeline/Timeline'
import Themes from './Themes/Themes'
import Sponsors from './Sponsors/sponsors'
import Footer from './Footer/Footer'
import Rules from './Rules/Rules'

function App() {
  return (
    <div className='excalibur'>
      <Navbar />
      <h1>EXCALIBUR</h1>
      <Countdown />
      <Sponsors />
      <Event />
      <Themes />
      <TimeLine />
      <Rules />
      <Background />
      <Footer />
    </div>
  )
}

export default App
