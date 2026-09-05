export default function GenreCard({ label, description, emoji, selected, onSelect }) {
    return (
        <button
            type="button"
            className={`genre-card ${selected ? 'selected' : ''}`}
            onClick={onSelect}
        >
            <span className="genre-card__emoji" aria-hidden="true">{emoji || '✦'}</span>
            <strong>{label}</strong>
            {description ? <small>{description}</small> : null}
        </button>
    )
}
