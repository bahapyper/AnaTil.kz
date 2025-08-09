import { useState } from "react";

const questions = [
  {
    question: "«Сәлеметсіз бе» нені білдіреді?",
    options: ["До свидания", "Здравствуйте", "Пожалуйста"],
    correct: 1,
  },
  {
    question: "Қазақ тілінде 'екі' — бұл қандай сан?",
    options: ["Один", "Два", "Три"],
    correct: 1,
  },
  {
    question: "«Рақмет» дегеніміз...",
    options: ["Извините", "Пока", "Спасибо"],
    correct: 3,
  },
    {
    question: "«кет дегенимиз...",
    options: ["уйди", "иди", "Сгл"],
    correct: 3,
    
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="container">
        <h2>Нәтиже</h2>
        <p>Сіз {questions.length}-ден {score} дұрыс жауап бердіңіз ✅</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="container">
      <h2>Тест: {current + 1} / {questions.length}</h2>
      <p>{q.question}</p>
      <ul className="quiz-options">
        {q.options.map((opt, i) => (
          <li key={i} onClick={() => handleAnswer(i)}>{opt}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
