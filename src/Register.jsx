import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setSuccess(true);
  };

  return (
    <div className="register-container">
      <h2>Тіркелу</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Атыңыз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Құпиясөз"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="start-button">Тіркелу</button>
      </form>
      {success && <Link to="/">Басты бетке өту</Link>}
    </div>
  );
}

export default Register;