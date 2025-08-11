import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Hero from './Components/HeroPage/Hero';
import TeachersLogin from './Teachers/TeachersLogin';
import StudentLogin from './Students/StudentLogin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/teachers/panel/login' element = {<TeachersLogin/>} />
        <Route path='/student/portfolio/login' element = {<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
