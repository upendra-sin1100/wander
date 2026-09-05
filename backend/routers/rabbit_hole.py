from fastapi import APIRouter, HTTPException, status

from backend.models.schemas import RabbitHoleNextRequest, RabbitHoleNextResponse

router = APIRouter(prefix="/rabbit-hole", tags=["rabbit-hole"])


@router.get("/next", response_model=RabbitHoleNextResponse, status_code=status.HTTP_200_OK)
async def rabbit_hole_next() -> RabbitHoleNextResponse:
    """Return the next item in the current rabbit-hole trail or a default recommendation."""
    # TODO: read session/board context and return a next video or mood branch.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
