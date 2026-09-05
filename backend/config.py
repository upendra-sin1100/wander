import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[1] / ".env")


class Settings:
    YOUTUBE_API_KEY: str = os.getenv("YOUTUBE_API_KEY", "")
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    DB_URL: str = os.getenv("DB_URL", "sqlite:///./wander.db")


settings = Settings()

# TODO: add validation helpers for required env keys in production.
