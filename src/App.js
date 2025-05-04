import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {ThemeProvider} from "./context/ThemeContext"


const App = () => {
  return (
<ThemeProvider>
  <Router>
  <div className="app">
    <Navbar/>
    <Routes>

    </Routes>
</div>
  </Router>
</ThemeProvider>
  )
}

export default App