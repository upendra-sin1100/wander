Scaffold a full-stack project called "Wander" — a mood-based YouTube video
discovery app. Frontend: React + Vite. Backend: Python + FastAPI. Do NOT put
everything in one file — create separate, task-specific files as laid out
below, each with a clear single responsibility.

## Visual direction
Calm, nostalgic, Pinterest-like feel — NOT a flashy app.
- Warm, muted color palette (soft creams, dusty blues/greens, no harsh
  saturated colors)
- Card-based layout, generous whitespace, soft shadows, rounded corners
- Serif or soft-sans pairing for headings, clean sans for body text
- One thing shown at a time (single video card), no cluttered dashboard feel
- Subtle transitions/fade animations between videos, nothing jarring

## Backend (FastAPI) — /backend
backend/
  main.py                     # FastAPI app entrypoint, CORS, router includes only
  config.py                   # env var loading (YOUTUBE_API_KEY, GEMINI_API_KEY, DB_URL)
  routers/
    recommend.py              # POST /recommend, /recommend/another, /recommend/more-like-this
    rabbit_hole.py            # GET /rabbit-hole/next
    boards.py                 # CRUD for boards/saved videos
    genres.py                 # GET /genres, /genre-combos
  services/
    youtube_client.py         # wraps YouTube Data API v3 (search.list, videos.list, channels.list)
    query_generator.py        # calls Gemini API to generate diverse search queries per mood
    curator.py                # calls Gemini API to score candidates (fit/quality/niche scores)
    selection.py               # pre-filtering + weighted random selection logic
  models/
    schemas.py                # Pydantic request/response models
    db_models.py               # SQLAlchemy models: videos, users, interactions, boards
  db/
    session.py                # DB session/engine setup
  requirements.txt

## Frontend (React + Vite) — /frontend
frontend/
  src/
    App.jsx                   # routing only, no page logic
    pages/
      MoodPickerPage.jsx       # genre/mood + combo selection screen
      ResultPage.jsx           # single video card + action buttons
      BoardsPage.jsx           # saved boards view
    components/
      GenreCard.jsx
      GenreComboPicker.jsx
      VideoCard.jsx             # the single result card (thumbnail, title, channel, actions)
      ActionBar.jsx             # Give Me Another / Save / More Like This / Rabbit Hole buttons
      RabbitHoleTrail.jsx        # breadcrumb of the current rabbit-hole chain
      BoardList.jsx
    hooks/
      useRecommendation.js      # API calls for recommend/another/more-like-this
      useBoards.js
    styles/
      theme.css                 # color palette, typography variables, shared tokens
    api/
      client.js                 # base fetch wrapper for backend calls
  index.html
  vite.config.js
  package.json

## Behavior notes for Copilot
- No autoplay queue, no infinite scroll feed — always a single deliberate card.
- Gemini API is used for two things only: (1) generating diverse search
  queries per mood/genre in query_generator.py, (2) scoring candidate videos
  for fit/quality/niche in curator.py. Keep these as isolated, swappable
  service functions (not hardcoded inline in routers).
- Use env vars for all API keys, never hardcode them.
- Set up a .env.example file listing YOUTUBE_API_KEY, GEMINI_API_KEY, DB_URL.
- Keep each file focused on one job — if a file starts doing two unrelated
  things, split it.

Start by generating the folder/file skeleton above with minimal working
stubs in each file (imports, function signatures, TODO comments where real
logic goes), then we'll fill in logic file by file.
