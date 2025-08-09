import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h1>Қош келдіңіз!</h1>
      <p>Бұл сайт арқылы сіз қазақ тілін үйрене аласыз.</p>
      <Link to="/alphabet" className="start-button">📘 Сабақты бастау</Link>
       
    </div>
  )
}

export default Home
