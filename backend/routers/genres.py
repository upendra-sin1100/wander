from fastapi import APIRouter, HTTPException, status

from backend.models.schemas import GenreSummary, GenreComboResponse

router = APIRouter(prefix="/genres", tags=["genres"])


@router.get("", response_model=list[GenreSummary], status_code=status.HTTP_200_OK)
async def get_genres() -> list[GenreSummary]:
    """Return the list of possible mood/genre entries for the picker UI."""
    # TODO: return a curated list from static config or DB-backed options.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")


@router.get("/genre-combos", response_model=list[GenreComboResponse], status_code=status.HTTP_200_OK)
async def get_genre_combos() -> list[GenreComboResponse]:
    """Return mood/genre combinations that can be used as seeded searches."""
    # TODO: compute or retrieve prebuilt combos from config or table.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
