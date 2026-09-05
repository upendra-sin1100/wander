from __future__ import annotations

from typing import Any


class YouTubeClient:
    """Thin wrapper around the YouTube Data API v3."""

    def __init__(self, api_key: str | None = None) -> None:
        self.api_key = api_key or ""

    async def search(self, query: str, *, max_results: int = 10, region_code: str = "US") -> list[dict[str, Any]]:
        """Search YouTube for videos matching a text query."""
        # TODO: call youtube.search.list with query, type=video, safeSearch, relevanceLanguage, regionCode.
        return []

    async def get_video_details(self, video_ids: list[str]) -> list[dict[str, Any]]:
        """Fetch enriched video metadata for the supplied video ids."""
        # TODO: call videos.list with part=snippet,statistics,contentDetails.
        return []

    async def get_channel_details(self, channel_ids: list[str]) -> list[dict[str, Any]]:
        """Fetch channel metadata used for context and display."""
        # TODO: call channels.list with part=snippet,statistics.
        return []
