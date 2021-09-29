import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Welcome from './components/Welcome'
import MyFooter from './components/MyFooter'
import LatestRelease from './components/LatestRelease'

function App() {
 
  
  return (
    <div>
      <MyNavbar brand="strivebooks" />
      <div className="container">
      <Welcome />
      <LatestRelease />
      </div>
      <MyFooter />
    </div>
  )
}

export default App
