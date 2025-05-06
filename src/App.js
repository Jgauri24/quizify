import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import About from './pages/About';
import Quiz from "./pages/Quiz";
import "./App.css"
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/about" element={<About />}/>
      <Route path ="/quiz" element={<Quiz/>}/>
   

    </Routes>
  </Router>
  )
}

export default App