import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavbarComponents/Navbar';
import Overview from './components/OverviewComponents/Overview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path= '/' element = {<Overview/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
