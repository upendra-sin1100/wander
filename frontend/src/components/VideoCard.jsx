export default function VideoCard({ video, onSave, onAnother, onMoreLikeThis, onRabbitHole }) {
    if (!video) {
        return <div className="video-card video-card--empty">Pick a mood and discover your next wander.</div>
    }

    return (
        <article className="video-card">
            <div className="video-card__media">
                <img src={video.thumbnail_url || 'https://images.unsplash.com/...'} alt={video.title} />
            </div>

            <div className="video-card__content">
                <p className="eyebrow">{video.channel_name || 'Curated for you'}</p>
                <h2>{video.title}</h2>
                <p className="video-card__meta">
                    {video.view_count ? `${video.view_count.toLocaleString()} views` : 'Fresh discovery'}
                </p>
                <p className="video-card__description">{video.description || 'A thoughtful recommendation tuned to your current mood.'}</p>
            </div>

            <div className="video-card__actions">
                <button type="button" onClick={onAnother}>Give Me Another</button>
                <button type="button" onClick={() => onSave && onSave(video)}>Save</button>
                <button type="button" onClick={() => onMoreLikeThis && onMoreLikeThis(video)}>More Like This</button>
                <button type="button" onClick={() => onRabbitHole && onRabbitHole(video)}>Rabbit Hole</button>
            </div>
        </article>
    )
}
