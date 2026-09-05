from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers import boards, genres, rabbit_hole, recommend

app = FastAPI(
    title="Wander API",
    description="Mood-based YouTube discovery service",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(recommend.router)
app.include_router(rabbit_hole.router)
app.include_router(boards.router)
app.include_router(genres.router)


@app.get("/health")
async def healthcheck() -> dict:
    return {"status": "ok", "service": "wander-backend"}
