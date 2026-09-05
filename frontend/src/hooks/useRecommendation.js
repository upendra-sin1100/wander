import { useState } from 'react'
import { apiRequest } from '../api/client'

export function useRecommendation() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)

    async function requestRecommendation(payload, endpoint = '/recommend') {
        setLoading(true)
        setError(null)

        try {
            const data = await apiRequest(endpoint, {
                method: 'POST',
                body: payload,
            })
            setResult(data)
            return data
        } catch (err) {
            setError(err)
            return null
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, result, requestRecommendation }
}
