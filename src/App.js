
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage';
import NotFound from './Components/NotFound';
import {Route,Routes} from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Routes>
<Route path="/" element={<LandingPage/>}/>
<Route path="/*" element={<NotFound/>}/>

      </Routes>
      </div>
     
      
      
  )
}

export default App
