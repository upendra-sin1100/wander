from __future__ import annotations

from typing import Any

from pydantic import BaseModel, Field


class GenreSummary(BaseModel):
    id: str
    label: str
    description: str | None = None
    emoji: str | None = None


class GenreComboResponse(BaseModel):
    id: str
    label: str
    primary_genre: str
    secondary_genre: str | None = None
    description: str | None = None


class RecommendationRequest(BaseModel):
    mood: str = Field(..., min_length=1)
    genre: str = Field(..., min_length=1)
    combo: str | None = None
    region: str = "US"


class RecommendationAnotherRequest(BaseModel):
    mood: str = Field(..., min_length=1)
    genre: str = Field(..., min_length=1)
    current_video_id: str | None = None
    combo: str | None = None


class MoreLikeThisRequest(BaseModel):
    mood: str = Field(..., min_length=1)
    genre: str = Field(..., min_length=1)
    seed_video_id: str | None = None
    seed_channel_id: str | None = None


class VideoRecommendation(BaseModel):
    id: str
    title: str
    channel_name: str
    channel_id: str | None = None
    thumbnail_url: str | None = None
    description: str | None = None
    published_at: str | None = None
    view_count: int | None = None
    duration: str | None = None
    url: str | None = None
    fit_score: float | None = None
    quality_score: float | None = None
    niche_score: float | None = None


class RecommendationResponse(BaseModel):
    recommendation: VideoRecommendation
    mood: str
    genre: str
    combo: str | None = None
    rabbit_hole_path: list[str] = Field(default_factory=list)


class RabbitHoleNextRequest(BaseModel):
    current_video_id: str | None = None
    mood: str | None = None
    genre: str | None = None


class RabbitHoleNextResponse(BaseModel):
    next_video: VideoRecommendation | None = None
    trail: list[str] = Field(default_factory=list)
    next_label: str | None = None


class BoardCreateRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=80)
    description: str | None = None


class BoardResponse(BaseModel):
    id: str
    name: str
    description: str | None = None
    saved_videos: list[VideoRecommendation] = Field(default_factory=list)


class SaveVideoRequest(BaseModel):
    board_id: str
    video: VideoRecommendation
