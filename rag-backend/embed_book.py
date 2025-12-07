import os
import glob
import uuid
from dotenv import load_dotenv

from embeddings import embed_text     # FREE embeddings
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, Distance, VectorParams

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
COLLECTION = "textbook_vectors"

client = QdrantClient(QDRANT_URL, api_key=QDRANT_API_KEY)


def chunk_text(text, max_words=300):
    words = text.split()
    chunks, temp = [], []

    for w in words:
        temp.append(w)
        if len(temp) >= max_words:
            chunks.append(" ".join(temp))
            temp = []
    if temp:
        chunks.append(" ".join(temp))

    return chunks


def load_markdown_files():
    files = glob.glob("../my-website/docs/**/*.md", recursive=True)
    files += glob.glob("../my-website/docs/**/*.mdx", recursive=True)
    return files


def ensure_collection():
    test_vector = embed_text("test vector")
    vector_size = len(test_vector)

    client.recreate_collection(
        collection_name=COLLECTION,
        vectors_config=VectorParams(
            size=vector_size,
            distance=Distance.COSINE
        )
    )
    print("🔥 Collection recreated with vector size:", vector_size)


def upload_embeddings():
    ensure_collection()

    files = load_markdown_files()
    print(f"📚 Found {len(files)} files")

    for path in files:
        with open(path, "r", encoding="utf-8") as f:
            text = f.read()

        chunks = chunk_text(text)

        points = []
        for chunk in chunks:
            vector = embed_text(chunk)

            points.append(PointStruct(
                id=str(uuid.uuid4()),
                vector=vector,
                payload={"text": chunk}
            ))

        client.upsert(
            collection_name=COLLECTION,
            points=points
        )

    print("🎉 Upload DONE with FREE embeddings!")


if __name__ == "__main__":
    upload_embeddings()


