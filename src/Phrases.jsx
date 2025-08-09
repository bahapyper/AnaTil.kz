const phrases = [
  { kz: 'Сәлеметсіз бе?', ru: 'Здравствуйте' },
  { kz: 'Қалыңыз қалай?', ru: 'Как у вас дела?' },
  { kz: 'Рақмет', ru: 'Спасибо' },
  { kz: 'Кешіріңіз', ru: 'Извините' },
  { kz: 'Иә', ru: 'Да' },
  { kz: 'Жоқ', ru: 'Нет' },
];

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'kk-KZ'; 
  speechSynthesis.speak(utterance);
}

function Phrases() {
  return (
    <div className="container">
      <h2>Фразалар</h2>
      <ul className="phrase-list">
        {phrases.map((p, i) => (
          <li key={i} className="phrase-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{p.kz}</strong>
                <div>{p.ru}</div>
              </div>
              <button className="speak-btn" onClick={() => speak(p.kz)}>🔊</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Phrases;
