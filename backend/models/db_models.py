from __future__ import annotations

from sqlalchemy import Boolean, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    created_at: Mapped[str | None] = mapped_column(DateTime, nullable=True)

    boards: Mapped[list["Board"]] = relationship(back_populates="user")
    interactions: Mapped[list["Interaction"]] = relationship(back_populates="user")


class Video(Base):
    __tablename__ = "videos"

    id: Mapped[str] = mapped_column(String(128), primary_key=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    channel_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    channel_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    thumbnail_url: Mapped[str | None] = mapped_column(Text, nullable=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    url: Mapped[str | None] = mapped_column(Text, nullable=True)
    view_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    duration: Mapped[str | None] = mapped_column(String(64), nullable=True)
    fit_score: Mapped[float | None] = mapped_column(Float, nullable=True)
    quality_score: Mapped[float | None] = mapped_column(Float, nullable=True)
    niche_score: Mapped[float | None] = mapped_column(Float, nullable=True)

    boards: Mapped[list["BoardVideo"]] = relationship(back_populates="video")
    interactions: Mapped[list["Interaction"]] = relationship(back_populates="video")


class Interaction(Base):
    __tablename__ = "interactions"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    user_id: Mapped[str | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    video_id: Mapped[str | None] = mapped_column(ForeignKey("videos.id"), nullable=True)
    interaction_type: Mapped[str] = mapped_column(String(32), nullable=False)
    mood: Mapped[str | None] = mapped_column(String(64), nullable=True)
    genre: Mapped[str | None] = mapped_column(String(64), nullable=True)
    created_at: Mapped[str | None] = mapped_column(DateTime, nullable=True)

    user: Mapped[User | None] = relationship(back_populates="interactions")
    video: Mapped[Video | None] = relationship(back_populates="interactions")


class Board(Base):
    __tablename__ = "boards"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    user_id: Mapped[str | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)

    user: Mapped[User | None] = relationship(back_populates="boards")
    videos: Mapped[list["BoardVideo"]] = relationship(back_populates="board")


class BoardVideo(Base):
    __tablename__ = "board_videos"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    board_id: Mapped[str] = mapped_column(ForeignKey("boards.id"), nullable=False)
    video_id: Mapped[str] = mapped_column(ForeignKey("videos.id"), nullable=False)
    saved_at: Mapped[str | None] = mapped_column(DateTime, nullable=True)

    board: Mapped[Board] = relationship(back_populates="videos")
    video: Mapped[Video] = relationship(back_populates="boards")
