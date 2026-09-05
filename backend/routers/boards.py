from fastapi import APIRouter, HTTPException, status

from backend.models.schemas import BoardCreateRequest, BoardResponse, SaveVideoRequest

router = APIRouter(prefix="/boards", tags=["boards"])


@router.get("", response_model=list[BoardResponse], status_code=status.HTTP_200_OK)
async def list_boards() -> list[BoardResponse]:
    """List saved boards for the current user."""
    # TODO: query database for boards and saved videos.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")


@router.post("", response_model=BoardResponse, status_code=status.HTTP_201_CREATED)
async def create_board(payload: BoardCreateRequest) -> BoardResponse:
    """Create a board for saving favorite discoveries."""
    # TODO: persist a new board row in the DB.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")


@router.post("/save", response_model=BoardResponse, status_code=status.HTTP_201_CREATED)
async def save_video(payload: SaveVideoRequest) -> BoardResponse:
    """Save a video to a selected board."""
    # TODO: insert into saved_videos-related table and return updated board state.
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
