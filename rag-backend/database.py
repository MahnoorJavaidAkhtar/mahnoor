from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os

load_dotenv()

# ---------------------------
#  LOAD DATABASE URL
# ---------------------------
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("❌ DATABASE_URL is missing in .env file")


# ---------------------------
#  CREATE SQLALCHEMY ENGINE
# ---------------------------
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,          # Avoid stale connections
    pool_size=10,
    max_overflow=20,
)

# ---------------------------
#  SESSION FACTORY
# ---------------------------
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# ---------------------------
#  BASE CLASS FOR MODELS
# ---------------------------
Base = declarative_base()


# ---------------------------
# Dependency injection for FastAPI
# ---------------------------
def get_db():
    """Provide a database session for FastAPI routes"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

