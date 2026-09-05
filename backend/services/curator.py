from __future__ import annotations

from typing import Any


class Curator:
    """Uses Gemini to score candidate videos for fit, quality, and niche value."""

    async def score_candidates(self, candidates: list[dict[str, Any]], mood: str, genre: str) -> list[dict[str, Any]]:
        """Score each candidate to determine which ones are worth surfacing.

        Each item should be returned with fit_quality, quality_score, niche_score, or similar keys.
        """
        # TODO: call Gemini API with a minimal prompt for fit/quality/niche scoring.
        scored = []
        for item in candidates:
            scored.append({
                **item,
                "fit_score": 0.0,
                "quality_score": 0.0,
                "niche_score": 0.0,
            })
        return scored
