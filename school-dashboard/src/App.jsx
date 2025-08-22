import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavbarComponents/Navbar';
import Overview from './components/OverviewComponents/Overview';
import BlogPage from './components/BlogFeautures/BlogPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path= '/' element = {<Overview/>} />
          <Route path= '/admin/blogs' element = {<BlogPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
