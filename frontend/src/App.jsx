import { Route, Routes } from 'react-router-dom'

import MoodPickerPage from './pages/MoodPickerPage'
import ResultPage from './pages/ResultPage'
import BoardsPage from './pages/BoardsPage'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MoodPickerPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/boards" element={<BoardsPage />} />
        </Routes>
    )
}
