import { useEffect, useState } from 'react'

import BoardList from '../components/BoardList'

const demoBoards = [
    {
        id: 'board-1',
        name: 'Late Night Drift',
        description: 'Warm tracks and soft, moody visuals',
        saved_videos: [{ id: 'video-1', title: 'Slow blues for rain-soaked cities' }],
    },
    {
        id: 'board-2',
        name: 'Coffeehouse recollections',
        description: 'Quiet indie rituals and gentle acoustic textures',
        saved_videos: [{ id: 'video-2', title: 'Morning rituals with old records' }],
    },
]

export default function BoardsPage() {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        setBoards(demoBoards)
    }, [])

    return (
        <main className="page page--boards">
            <header className="page-header">
                <p className="eyebrow">Saved Boards</p>
                <h1>Your wanderings</h1>
            </header>
            <BoardList boards={boards} />
        </main>
    )
}
