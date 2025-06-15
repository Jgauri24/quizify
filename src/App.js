import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import {useAuth} from "./context/AuthContext"
import Landing from './pages/Landing';

import About from './pages/About';
import Quiz from "./pages/Quiz";
import QuizSetup from "./pages/QuizSetup"
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Review from './pages/Review';
import Result from "./pages/Result";

const App = () => {
  const  currentUser  = useAuth();
  return (
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/login" element={!currentUser?<Login/>:<Navigate to="/"/>} />
    <Route path="/signup" element={!currentUser?<Signup/>:<Navigate to="/"/>} />
    <Route path="/" element={currentUser?<Landing/>:<Navigate to="/login"/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/quiz-setup" element={currentUser?<QuizSetup/>:<Navigate to="/login"/>} />
    <Route path="/quiz" element={currentUser?<Quiz/>:<Navigate to="/login"/>} />
    <Route path="/result" element={currentUser?<Result/>:<Navigate to="/login"/>} />
    <Route path="/review" element={currentUser?<Review/>:<Navigate to="/login"/>} />
    </Routes>
  </Router>
  )
}

export default App