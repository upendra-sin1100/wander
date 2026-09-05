import { useState } from 'react'

import ActionBar from '../components/ActionBar'
import RabbitHoleTrail from '../components/RabbitHoleTrail'
import VideoCard from '../components/VideoCard'

const demoVideo = {
    id: 'demo-video-1',
    title: 'A slow morning in a quiet coastal town',
    channel_name: 'Hearth & Horizon',
    thumbnail_url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'A calm, nostalgic look at gentle routines and cinematic coastal mornings.',
    view_count: 124000,
    fit_score: 0.92,
    quality_score: 0.88,
    niche_score: 0.8,
}

export default function ResultPage() {
    const [video, setVideo] = useState(demoVideo)
    const [trail, setTrail] = useState(['nostalgic', 'indie'])

    function handleAnother() {
        setVideo({
            ...demoVideo,
            id: `demo-video-${Math.random().toString(36).slice(2, 8)}`,
            title: 'Another gentle discovery from the same mood',
        })
    }

    return (
        <main className="page page--result">
            <RabbitHoleTrail trail={trail} />
            <VideoCard
                video={video}
                onAnother={handleAnother}
                onSave={() => console.log('save video', video)}
                onMoreLikeThis={() => console.log('more like this', video)}
                onRabbitHole={() => console.log('rabbit hole', video)}
            />
            <ActionBar
                onAnother={handleAnother}
                onSave={() => console.log('save video', video)}
                onMoreLikeThis={() => console.log('more like this', video)}
                onRabbitHole={() => console.log('rabbit hole', video)}
            />
        </main>
    )
}
