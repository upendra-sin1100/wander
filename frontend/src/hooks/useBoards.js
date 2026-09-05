import { useState } from 'react'
import { apiRequest } from '../api/client'

export function useBoards() {
    const [boards, setBoards] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchBoards() {
        setLoading(true)
        try {
            const data = await apiRequest('/boards')
            setBoards(data)
            return data
        } finally {
            setLoading(false)
        }
    }

    async function saveVideo(boardId, video) {
        return apiRequest('/boards/save', {
            method: 'POST',
            body: {
                board_id: boardId,
                video,
            },
        })
    }

    return { boards, loading, fetchBoards, saveVideo }
}
