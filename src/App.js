import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {ThemeProvider} from "./context/ThemeContext"
import Login from './pages/Login';


const App = () => {
  return (
<ThemeProvider>
  <Router>
  <div className="app">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Login />} />
    </Routes>
</div>
  </Router>
</ThemeProvider>
  )
}

export default App