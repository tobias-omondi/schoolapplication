import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/HeroPage/Hero';
import TeachersLogin from './Components/Teachers/TeachersLogin';
import StudentLogin from './Components/Students/StudentLogin';
import AboutHome from './Components/AboutPage/AboutHome';
import ContactPage from './Components/Contact/ContactPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element = {<AboutHome/>} />
        <Route path='/teachers/panel/login' element = {<TeachersLogin/>} />
        <Route path='/student/portfolio/login' element = {<StudentLogin />} />
        <Route path='/contact' element = {<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
