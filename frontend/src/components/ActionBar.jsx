export default function ActionBar({ onAnother, onSave, onMoreLikeThis, onRabbitHole }) {
    return (
        <div className="action-bar">
            <button type="button" onClick={onAnother}>Give Me Another</button>
            <button type="button" onClick={onSave}>Save</button>
            <button type="button" onClick={onMoreLikeThis}>More Like This</button>
            <button type="button" onClick={onRabbitHole}>Rabbit Hole</button>
        </div>
    )
}
