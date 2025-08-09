const letters = [
  { k: 'А а', p: 'a' }, { k: 'Ә ә', p: 'ä' }, { k: 'Б б', p: 'b' },
  { k: 'Г г', p: 'g' }, { k: 'Ғ ғ', p: 'ğ' }, { k: 'Д д', p: 'd' },
  { k: 'Е е', p: 'e' }, { k: 'Ж ж', p: 'j' }, { k: 'З з', p: 'z' },
  { k: 'И и', p: 'i' }, { k: 'Й й', p: 'y' }, { k: 'К к', p: 'k' },
  { k: 'Қ қ', p: 'q' }, { k: 'Л л', p: 'l' }, { k: 'М м', p: 'm' },
  { k: 'Н н', p: 'n' }, { k: 'Ң ң', p: 'ñ' }, { k: 'О о', p: 'o' },
  { k: 'Ө ө', p: 'ö' }, { k: 'П п', p: 'p' }, { k: 'Р р', p: 'r' },
  { k: 'С с', p: 's' }, { k: 'Т т', p: 't' }, { k: 'У у', p: 'u' },
  { k: 'Ұ ұ', p: 'ū' }, { k: 'Ү ү', p: 'ü' }, { k: 'Ф ф', p: 'f' },
  { k: 'Х х', p: 'h' }, { k: 'Һ һ', p: 'h̓' }, { k: 'Ц ц', p: 'ts' },
  { k: 'Ч ч', p: 'ch' }, { k: 'Ш ш', p: 'sh' }, { k: 'Щ щ', p: 'shch' },
  { k: 'Ы ы', p: 'ı' }, { k: 'І і', p: 'i' }, { k: 'Э э', p: 'e' }
]

function Alphabet() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Қазақ әліпбиі</h2>
      <ul className="grid grid-cols-4 gap-2">
        {letters.map((l, i) => (
          <li key={i} className="bg-white shadow rounded p-2 text-center">
            <strong>{l.k}</strong><div>{l.p}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Alphabet
