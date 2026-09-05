const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export async function apiRequest(path, { method = 'GET', body, headers = {} } = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Request failed')
    }

    return response.status === 204 ? null : response.json()
}
