import React, { useState } from 'react'
import {
    Home,
    Shuffle,
    Waves,
    Bookmark,
    Clock,
    Settings,
    ChevronDown,
    Sparkles,
    Leaf,
    Search,
    Smile,
    Dices,
    ArrowRight,
    Music2,
    Landmark,
    Ghost,
    Film,
    Mountain,
    MoreHorizontal,
    Quote as QuoteIcon,
} from 'lucide-react'

const NAV = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'surprise', label: 'Surprise Me', icon: Shuffle },
    { id: 'rabbit', label: 'Rabbit Hole', icon: Waves },
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'settings', label: 'Settings', icon: Settings },
]

const FEELINGS = [
    { id: 'nostalgic', label: 'Nostalgic', icon: Clock, tint: '#F3E1D8', ink: '#A6613A' },
    { id: 'chill', label: 'Chill', icon: Leaf, tint: '#E7EFE1', ink: '#5B7A52' },
    { id: 'inspired', label: 'Inspired', icon: Sparkles, tint: '#F5EAD1', ink: '#B08A2E' },
    { id: 'curious', label: 'Curious', icon: Search, tint: '#E1E8F0', ink: '#4E6C8A' },
    { id: 'entertained', label: 'Entertained', icon: Film, tint: '#F3DEDA', ink: '#B0554A' },
    { id: 'thoughtful', label: 'Thoughtful', icon: Smile, tint: '#E9E1EF', ink: '#7A5E96' },
    { id: 'random', label: 'Random', icon: Dices, tint: '#EFEBE0', ink: '#6B6656' },
]

const CATEGORIES = [
    { label: 'Philosophy & Life', icon: Mountain },
    { label: 'Documentary', icon: Film },
    { label: 'Motivation', icon: Sparkles },
    { label: 'Entertainment', icon: Smile },
    { label: 'Music', icon: Music2 },
    { label: 'History', icon: Landmark },
    { label: 'Mystery', icon: Ghost },
    { label: 'More', icon: MoreHorizontal },
]

const COMBOS = [
    { label: 'Information + Entertainment', tint: '#F3E1D8' },
    { label: 'Education + Chill', tint: '#E7EFE1' },
    { label: 'Nostalgic + Indie', tint: '#F3DEDA' },
    { label: 'Thoughtful + Documentary', tint: '#E9E1EF' },
]

const VIDEOS = [
    { title: 'The Beauty of Growing Up in the 90s', duration: '28:34', tags: ['Nostalgia', 'Documentary'], tint: '#6E5B47' },
    { title: 'Why We Romanticize the Past', duration: '22:17', tags: ['Philosophy', 'Thoughtful'], tint: '#2E2B26' },
    { title: 'The Story of a Photograph', duration: '31:05', tags: ['Documentary', 'Storytelling'], tint: '#4E6C8A' },
    { title: 'A Film About Doing Nothing', duration: '17:42', tags: ['Chill', 'Short Film'], tint: '#7A6647' },
    { title: 'The Rise of Indie Music', duration: '45:11', tags: ['Music', 'Indie'], tint: '#3A2E2A' },
]

export default function MoodPickerPage() {
    const [activeNav, setActiveNav] = useState('home')
    const [feeling, setFeeling] = useState(null)
    const [category, setCategory] = useState(null)
    const [combo, setCombo] = useState(null)
    const [highlighted, setHighlighted] = useState(null)

    const handleDiscover = () => {
        const i = Math.floor(Math.random() * VIDEOS.length)
        setHighlighted(i)
        window.setTimeout(() => setHighlighted(null), 1400)
    }

    return (
        <div className="wl-root">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=Instrument+Sans:wght@400;500;600&display=swap');

        .wl-root {
          --paper: #F7F1E6;
          --card: #FFFCF6;
          --ink: #2B2A22;
          --ink-soft: #7A7566;
          --line: rgba(43,42,34,0.10);
          --moss: #2F3B2E;
          --amber: #C97B3D;

          display: flex;
          min-height: 100%;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Instrument Sans', ui-sans-serif, sans-serif;
        }

        .wl-sidebar {
          width: 216px;
          flex-shrink: 0;
          background: var(--card);
          border-right: 1px solid var(--line);
          padding: 24px 16px;
          box-sizing: border-box;
        }
        .wl-logo {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 21px;
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 28px;
          padding-left: 4px;
        }
        .wl-nav { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
        .wl-nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 12px;
          font-size: 14px; color: var(--ink-soft);
          cursor: pointer; border: none; background: none; width: 100%; text-align: left;
          font-family: inherit;
          transition: background 140ms ease, color 140ms ease;
        }
        .wl-nav-item.active { background: #EFE4CE; color: var(--amber); font-weight: 500; }
        .wl-nav-item:hover:not(.active) { background: rgba(43,42,34,0.04); }

        .wl-main { flex: 1; padding: 28px 40px 60px; min-width: 0; }
        .wl-topbar { display: flex; justify-content: flex-end; margin-bottom: 12px; }
        .wl-profile {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; color: var(--ink);
          background: var(--card); border: 1px solid var(--line);
          padding: 6px 12px 6px 6px; border-radius: 999px;
        }
        .wl-avatar { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg,#8A9B7C,#57748A); }

        .wl-hero { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; margin-bottom: 28px; }
        .wl-headline {
          font-family: 'Fraunces', serif; font-weight: 500;
          font-size: 44px; line-height: 1.12; margin: 0 0 14px;
        }
        .wl-headline .accent { color: var(--amber); font-style: italic; }
        .wl-sub { color: var(--ink-soft); font-size: 15.5px; line-height: 1.55; max-width: 40ch; margin: 0; }

        .wl-hero-art {
          position: relative; height: 190px; border-radius: 22px;
          background: linear-gradient(135deg, #D8C7A8, #8C7A5C);
          overflow: hidden;
        }
        .wl-quote {
          position: absolute; right: 16px; bottom: 16px; max-width: 210px;
          background: var(--card); border: 1px solid var(--line);
          border-radius: 14px; padding: 12px 14px;
          font-size: 12.5px; line-height: 1.4;
        }
        .wl-quote em { font-style: italic; }
        .wl-quote-attr { display: block; margin-top: 6px; color: var(--ink-soft); font-size: 11.5px; }

        .wl-picker {
          background: var(--card); border: 1px solid var(--line);
          border-radius: 22px; padding: 26px 28px; margin-bottom: 34px;
        }
        .wl-label { font-size: 13.5px; font-weight: 600; margin: 0 0 12px; }
        .wl-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }

        .wl-pill {
          display: inline-flex; align-items: center; gap: 7px;
          border: 1px solid var(--line); border-radius: 999px;
          padding: 9px 15px; font-size: 13.5px; font-family: inherit;
          cursor: pointer; background: var(--card); color: var(--ink);
          transition: transform 140ms ease, box-shadow 140ms ease;
        }
        .wl-pill:hover { transform: translateY(-1px); }
        .wl-pill.selected { box-shadow: inset 0 0 0 1.5px var(--ink); }
        .wl-pill.dashed { border-style: dashed; color: var(--ink-soft); }

        .wl-discover-wrap { text-align: center; }
        .wl-discover {
          border: none; background: var(--moss); color: #fff;
          font-family: inherit; font-size: 15px; font-weight: 500;
          padding: 15px 34px; border-radius: 999px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
          transition: transform 120ms ease;
        }
        .wl-discover:active { transform: scale(0.97); }
        .wl-discover-note { margin: 10px 0 0; font-size: 12.5px; color: var(--ink-soft); }

        .wl-section-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; }
        .wl-section-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px; color: var(--amber); margin: 0; }
        .wl-view-all { font-size: 13px; color: var(--ink-soft); background: var(--card); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px; cursor: pointer; font-family: inherit; }

        .wl-carousel-wrap { position: relative; }
        .wl-carousel { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
        .wl-carousel::-webkit-scrollbar { display: none; }
        .wl-video-card { flex: 0 0 220px; cursor: default; }
        .wl-thumb {
          height: 130px; border-radius: 16px; position: relative; margin-bottom: 10px;
          transition: transform 380ms cubic-bezier(.22,1,.36,1), box-shadow 380ms ease;
        }
        .wl-video-card.hi .wl-thumb { transform: scale(1.03); box-shadow: 0 10px 24px rgba(43,42,34,0.18); }
        .wl-duration {
          position: absolute; right: 8px; bottom: 8px;
          background: rgba(0,0,0,0.55); color: #fff; font-size: 11px;
          padding: 2px 6px; border-radius: 6px;
        }
        .wl-video-title { font-size: 14px; font-weight: 500; margin: 0 0 8px; line-height: 1.35; }
        .wl-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .wl-tag { font-size: 11px; color: var(--ink-soft); background: var(--paper); border-radius: 999px; padding: 3px 9px; }

        .wl-scroll-btn {
          position: absolute; right: -14px; top: 50px;
          width: 34px; height: 34px; border-radius: 50%;
          background: var(--card); border: 1px solid var(--line);
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }

        @media (max-width: 860px) {
          .wl-root { flex-direction: column; }
          .wl-sidebar { width: auto; display: flex; align-items: center; gap: 16px; overflow-x: auto; }
          .wl-nav { flex-direction: row; }
          .wl-hero { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wl-thumb, .wl-pill, .wl-discover { transition: none !important; }
        }
      `}</style>

            <aside className="wl-sidebar">
                <div className="wl-logo">✦ Wander</div>
                <ul className="wl-nav">
                    {NAV.map(({ id, label, icon: Icon }) => (
                        <li key={id}>
                            <button
                                className={`wl-nav-item ${activeNav === id ? 'active' : ''}`}
                                onClick={() => setActiveNav(id)}
                            >
                                <Icon size={17} /> {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="wl-main">
                <div className="wl-topbar">
                    <div className="wl-profile">
                        <div className="wl-avatar" />
                        Wanderer <ChevronDown size={14} />
                    </div>
                </div>

                <div className="wl-hero">
                    <div>
                        <h1 className="wl-headline">
                            Find something<br />
                            <span className="accent">worth</span> watching.
                        </h1>
                        <p className="wl-sub">
                            Pick a mood, or two. We'll find something worth watching —
                            nothing to search for.
                        </p>
                    </div>
                    <div className="wl-hero-art">
                        <div className="wl-quote">
                            <QuoteIcon size={12} style={{ marginBottom: 4, opacity: 0.5 }} />
                            <div><em>Not all those who wander are lost.</em></div>
                            <span className="wl-quote-attr">— J.R.R. Tolkien</span>
                        </div>
                    </div>
                </div>

                <div className="wl-picker">
                    <p className="wl-label">How are you feeling?</p>
                    <div className="wl-row">
                        {FEELINGS.map((f) => (
                            <button
                                key={f.id}
                                className={`wl-pill ${feeling === f.id ? 'selected' : ''}`}
                                style={{ background: f.tint, color: f.ink, borderColor: 'transparent' }}
                                onClick={() => setFeeling(f.id)}
                            >
                                <f.icon size={15} /> {f.label}
                            </button>
                        ))}
                    </div>

                    <p className="wl-label">Browse by category</p>
                    <div className="wl-row">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c.label}
                                className={`wl-pill ${category === c.label ? 'selected' : ''}`}
                                onClick={() => setCategory(c.label)}
                            >
                                <c.icon size={15} /> {c.label}
                            </button>
                        ))}
                    </div>

                    <p className="wl-label">Or combine two moods</p>
                    <div className="wl-row">
                        {COMBOS.map((c) => (
                            <button
                                key={c.label}
                                className={`wl-pill ${combo === c.label ? 'selected' : ''}`}
                                style={{ background: c.tint, borderColor: 'transparent' }}
                                onClick={() => setCombo(c.label)}
                            >
                                {c.label}
                            </button>
                        ))}
                        <button className="wl-pill dashed" onClick={() => setCombo('shuffled')}>
                            <Shuffle size={15} /> Shuffle Combo
                        </button>
                    </div>

                    <div className="wl-discover-wrap">
                        <button className="wl-discover" onClick={handleDiscover}>
                            Discover Something <Sparkles size={16} />
                        </button>
                        <p className="wl-discover-note">One click. Infinite stories.</p>
                    </div>
                </div>

                <div className="wl-section-head">
                    <h3 className="wl-section-title">Handpicked for your vibe</h3>
                    <button className="wl-view-all">View all</button>
                </div>
                <div className="wl-carousel-wrap">
                    <div className="wl-carousel">
                        {VIDEOS.map((v, i) => (
                            <div key={v.title} className={`wl-video-card ${highlighted === i ? 'hi' : ''}`}>
                                <div className="wl-thumb" style={{ background: `linear-gradient(135deg, ${v.tint}, ${v.tint}AA)` }}>
                                    <span className="wl-duration">{v.duration}</span>
                                </div>
                                <p className="wl-video-title">{v.title}</p>
                                <div className="wl-tags">
                                    {v.tags.map((t) => <span key={t} className="wl-tag">{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="wl-scroll-btn"><ArrowRight size={16} /></button>
                </div>
            </main>
        </div>
    )
}
