export default function RabbitHoleTrail({ trail = [] }) {
    if (!trail.length) {
        return null
    }

    return (
        <nav className="rabbit-hole-trail" aria-label="Rabbit hole trail">
            {trail.map((item, index) => (
                <span key={`${item}-${index}`} className="trail-step">
                    {item}
                    {index < trail.length - 1 ? <span aria-hidden="true">→</span> : null}
                </span>
            ))}
        </nav>
    )
}
