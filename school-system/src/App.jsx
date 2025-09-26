import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/HeroPage/Hero';
import AboutHome from './Components/AboutPage/AboutHome';
import ContactPage from './Components/Contact/ContactPage';
import OurStories from './Components/AboutPage/OurStories';
import Almuni from './Components/AboutPage/Almuni';
import AcademicResults from './Components/AboutPage/AcademicResults';
import Blog from './Components/Blog&Newspage/Blog';
import News from './Components/Blog&Newspage/News';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element = {<AboutHome/>} />
        <Route path='/about/ourstories' element = {<OurStories/>} />
        <Route path= '/about/alumni' element = {<Almuni/>} />
        <Route path= '/about/academic-results' element = {<AcademicResults/>} />
        <Route path= '/blog' element = {<Blog/>} />
        <Route path= '/news' element = {<News/>} />
        <Route path='/contact' element = {<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
