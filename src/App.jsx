
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Quiz from './pages/Quiz'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
