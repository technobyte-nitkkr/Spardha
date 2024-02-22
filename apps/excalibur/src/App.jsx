import './App.css'
import Background from './Background/Background'
import Countdown from './Countdown/Countdown'
import Navbar from './navbar/Navbar'
import Event from './Event/Event'
import TimeLine from './Timeline/Timeline'
import Themes from './Themes/Themes'
// import Sponsors from './Sponsors/Sponsors'
import Footer from './Footer/Footer'
import Rules from './Rules/Rules'
import ContactUs from './ContactUs/ContactUs'

function App() {
  return (
    <div className='excalibur'>
      <Navbar />
      <h1>EXCALIBUR</h1>
      <div className="slogan">DESIGN | DEVELOP | DOMINATE</div>
      <Countdown />
      {/* <Sponsors /> */}
      <Event />
      <Themes />
      <TimeLine />
      <Rules />
      <ContactUs />
      <Background />
      <Footer />
    </div>
  )
}

export default App
