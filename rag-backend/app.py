from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import ChatRequest, ChatResponse
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("OPENAI_API_KEY is missing")

app = FastAPI()

@app.get("/")
def health():
    return {"status": "ok"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# lazy globals
qdrant = None
COLLECTION = None
embed_text = None

@app.post("/ask", response_model=ChatResponse)
def ask_question(body: ChatRequest):
    global qdrant, COLLECTION, embed_text

    # 🔥 LAZY LOAD (FIRST REQUEST ONLY)
    if embed_text is None:
        from embeddings import embed_text as _embed_text
        embed_text = _embed_text

    if qdrant is None:
        from vector_store import qdrant as _qdrant, COLLECTION as _COLLECTION
        qdrant = _qdrant
        COLLECTION = _COLLECTION

    try:
        vector = embed_text(body.question)
    except Exception:
        raise HTTPException(status_code=500, detail="Embedding failed")

    try:
        qdrant_results = qdrant.query_points(
            collection_name=COLLECTION,
            query=vector,
            limit=5,
            with_payload=True
        )
        results = qdrant_results.points
    except Exception:
        raise HTTPException(status_code=500, detail="Vector DB search failed")

    context = "\n\n".join(
        [p.payload.get("text", "") for p in results]
    ) or "No relevant content found in the textbook."

    prompt = f"""
You are an AI teaching assistant. Answer ONLY using the textbook content below:

--- TEXTBOOK CONTENT ---
{context}
------------------------

Question: {body.question}
"""

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful teaching assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        answer = completion.choices[0].message["content"]
    except Exception:
        raise HTTPException(status_code=500, detail="LLM request failed")

    return ChatResponse(answer=answer)




