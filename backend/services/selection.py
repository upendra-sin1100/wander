from __future__ import annotations

import random
from typing import Any


def prefilter_candidates(candidates: list[dict[str, Any]], *, min_views: int = 0) -> list[dict[str, Any]]:
    """Remove obviously low-signal or low-quality items before selection."""
    # TODO: deduplicate by video ID, reject private/unavailable entries, and apply soft heuristics.
    return [item for item in candidates if item.get("view_count", 0) >= min_views]


def weighted_random_select(candidates: list[dict[str, Any]], *, bias: str = "balanced") -> dict[str, Any] | None:
    """Choose one candidate using weighted randomness rather than a flat queue."""
    # TODO: calculate weights from fit_score + quality_score + niche_score and pick a winner.
    if not candidates:
        return None
    return random.choice(candidates)
