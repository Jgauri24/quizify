import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Quiz from "./pages/Quiz";
import QuizSetup from "./pages/QuizSetup"
import Login from "./pages/Login";
import Leaderboard from "./pages/Leaderboard";
import "./App.css"
const App = () => {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/about" element={<About/>}/>
      <Route path ="/quiz" element={<Quiz/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/setup" element={<QuizSetup/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>

    </Routes>
  </Router>
  )
}

export default App