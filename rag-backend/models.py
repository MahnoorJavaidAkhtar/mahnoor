from sqlalchemy import Column, Integer, String, Text, DateTime, func
from sqlalchemy.orm import declarative_base
from database import engine

Base = declarative_base()


class ChatLog(Base):
    __tablename__ = "chat_logs"

    id = Column(Integer, primary_key=True, index=True)
    
    # user question
    question = Column(Text, nullable=False)
    
    # model answer
    answer = Column(Text, nullable=False)

    # timestamp
    created_at = Column(DateTime(timezone=True), server_default=func.now())


# Create DB tables
Base.metadata.create_all(bind=engine)
