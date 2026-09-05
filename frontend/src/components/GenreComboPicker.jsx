export default function GenreComboPicker({ combos = [], value, onChange }) {
    return (
        <div className="genre-combo-picker">
            {combos.map((combo) => (
                <button
                    key={combo.id}
                    type="button"
                    className={`combo-pill ${value === combo.id ? 'selected' : ''}`}
                    onClick={() => onChange(combo.id)}
                >
                    {combo.label}
                </button>
            ))}
        </div>
    )
}
