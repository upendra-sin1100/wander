export default function BoardList({ boards = [] }) {
    if (!boards.length) {
        return <p className="empty-state">No boards yet. Save a few favorite discoveries to start building your collection.</p>
    }

    return (
        <ul className="board-list">
            {boards.map((board) => (
                <li key={board.id} className="board-item">
                    <h3>{board.name}</h3>
                    {board.description ? <p>{board.description}</p> : null}
                    <span>{board.saved_videos?.length || 0} saved</span>
                </li>
            ))}
        </ul>
    )
}
