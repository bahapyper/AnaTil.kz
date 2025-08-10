import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "40px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Қош келдіңіз! 👋</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
        Бұл сайт арқылы сіз қазақ тілін үйрене аласыз.
      </p>
      <Link to="/alphabet" className="start-button">📘 Сабақты бастау</Link>

      <div className="video-container" style={{
        margin: "48px auto 0",
        maxWidth: "560px",
        background: "linear-gradient(120deg, #e0f7fa 0%, #fefefe 100%)",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(0,119,204,0.10)",
        padding: "32px 16px"
      }}>
        <h2 style={{ color: "#0077cc", marginBottom: "18px" }}>Тренируйся на видеоуроках!</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px" }}>
          <iframe
            src=""
            title="Kazakh Language Lesson"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px"
            }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home