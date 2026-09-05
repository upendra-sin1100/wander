from fastapi import APIRouter, HTTPException, status

from backend.models.schemas import (
    RecommendationRequest,
    RecommendationResponse,
    RecommendationAnotherRequest,
    MoreLikeThisRequest,
)

router = APIRouter(prefix="/recommend", tags=["recommendations"])


@router.post("", response_model=RecommendationResponse, status_code=status.HTTP_200_OK)
async def recommend_videos(payload: RecommendationRequest) -> RecommendationResponse:
    """Return an initial recommendation for a mood and genre selection."""
    # TODO: validate inputs, call query generation and selection services, return a single recommendation.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")


@router.post("/another", response_model=RecommendationResponse, status_code=status.HTTP_200_OK)
async def recommend_another(payload: RecommendationAnotherRequest) -> RecommendationResponse:
    """Return a new recommendation while preserving the current mood context."""
    # TODO: generate a fresh video distinct from the current one.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")


@router.post("/more-like-this", response_model=RecommendationResponse, status_code=status.HTTP_200_OK)
async def recommend_more_like_this(payload: MoreLikeThisRequest) -> RecommendationResponse:
    """Return a recommendation closely aligned with a specific video or playlist context."""
    # TODO: use current video metadata or a seed video ID to narrow the pool.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
