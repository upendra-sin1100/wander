from __future__ import annotations

from typing import Any


class QueryGenerator:
    """Generates diverse mood-aware YouTube search queries via Gemini."""

    async def generate_queries(self, mood: str, genre: str, *, count: int = 5) -> list[str]:
        """Produce a set of varied search phrases for the given mood and genre."""
        # TODO: call Gemini API to generate diverse, non-duplicate query strings.
        return [f"{mood} {genre} vibes", f"{genre} {mood} recommendations", f"{mood} cinematic {genre}"][:count]

    async def generate_seed_queries(self, mood: str, genre_combo: str, *, count: int = 5) -> list[str]:
        """Generate queries using a combo-based selection rather than a single genre bucket."""
        # TODO: keep this isolated from routers and selection logic.
        return [f"{mood} {genre_combo} discovery"][:count]
