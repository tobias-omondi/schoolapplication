import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavbarComponents/Navbar';
import Overview from './components/OverviewComponents/Overview';
import BlogPage from './components/BlogFeautures/BlogPage';
import NewsPage from './components/NewsFeautures/NewsPage';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path= '/' element = {<Overview/>} />
          <Route path= '/admin/blogs' element = {<BlogPage />} />
          <Route path= '/admin/news' element = {<NewsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
