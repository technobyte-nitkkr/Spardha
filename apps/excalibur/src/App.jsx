import './App.css'
import Background from './Background/Background'
import Navbar from './navbar/Navbar'
import MyTypeform from './Typeform/MyTypeform'
function App() {
  return (
    <div className='excalibur'>
      <Navbar />
      <h1>EXCALIBUR</h1>
      <MyTypeform />
      <Background />
    </div>
  )
}

export default App
