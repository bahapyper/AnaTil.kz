import { Link } from 'react-router-dom'

function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="navbar">
          <Link to="/Register">Тіркелу</Link>
      <Link to="/">🏠 Басты бет</Link>
      <Link to="/alphabet">🔤 Әліпби</Link>
      <Link to="/phrases">💬 Фразалар</Link>
      <Link to="/numbers">🔢 Сандар</Link>
      <Link to="/quiz">📝 Тест</Link>

      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '🌞' : '🌙'}
      </button>
    </nav>
  )
}

export default Navbar
