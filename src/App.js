import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  Component={Home}/>
          <Route path='/projects' exact Component={Projects}/>
          <Route path='/contact' exact Component={Contact}/>
          <Route path='/about' exact Component={About}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
