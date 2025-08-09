import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Alphabet from './Alphabet'
import Phrases from './Phrases'
import Numbers from './Numbers'
import Quiz from './Quiz'
import Register from "./Register";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : ''
  }, [darkMode])

  return (
    <div>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphabet" element={<Alphabet />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
