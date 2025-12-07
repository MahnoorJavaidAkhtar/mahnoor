from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException

from vector_store import qdrant, COLLECTION
from schemas import ChatRequest, ChatResponse

from embeddings import embed_text     # FREE embeddings

from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OpenAI client for CHAT ONLY (cheap)
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


# ---------------------------
#   MAIN CHAT ENDPOINT
# ---------------------------
@app.post("/ask", response_model=ChatResponse)
def ask_question(body: ChatRequest):

    # Step 1: FREE EMBEDDING (HuggingFace)
    try:
        vector = embed_text(body.question)
    except Exception as e:
        print("Embedding error:", e)
        raise HTTPException(status_code=500, detail="Embedding failed")


    # Step 2: QDRANT VECTOR SEARCH (updated syntax)
    try:
        qdrant_results = qdrant.query_points(
            collection_name=COLLECTION,
            query=vector,
            limit=5,
            with_payload=True
        )

        results = qdrant_results.points

    except Exception as e:
        print("Qdrant error:", e)
        raise HTTPException(status_code=500, detail="Vector DB search failed")


    # Step 3: Build context from results
    context = "\n\n".join([point.payload.get("text", "") for point in results])

    if not context.strip():
        context = "No relevant content found in the textbook."


    # Step 4: Build Chat Prompt
    prompt = f"""
You are an AI teaching assistant. Answer ONLY using the textbook content below:

--- TEXTBOOK CONTENT ---
{context}
------------------------

Question: {body.question}
"""


    # Step 5: OpenAI Chat Completion
    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful teaching assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        answer = completion.choices[0].message["content"]

    except Exception as e:
        print("OpenAI error:", e)
        raise HTTPException(status_code=500, detail="LLM request failed")

    return ChatResponse(answer=answer)





