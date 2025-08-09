const numbers = [
  { kz: 'Бір', ru: 'Один' },
  { kz: 'Екі', ru: 'Два' },
  { kz: 'Үш', ru: 'Три' },
  { kz: 'Төрт', ru: 'Четыре' },
  { kz: 'Бес', ru: 'Пять' },
  { kz: 'Алты', ru: 'Шесть' },
  { kz: 'Жеті', ru: 'Семь' },
  { kz: 'Сегіз', ru: 'Восемь' },
  { kz: 'Тоғыз', ru: 'Девять' },
  { kz: 'Он', ru: 'Десять' },
]

function Numbers() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Сандар</h2>
      <ul className="grid grid-cols-2 gap-3">
        {numbers.map((n, i) => (
          <li key={i} className="bg-white p-3 shadow rounded">
            <div><strong>{n.kz}</strong></div>
            <div className="text-gray-500">{n.ru}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Numbers
