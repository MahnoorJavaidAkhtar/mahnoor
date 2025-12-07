import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# -----------------------------------------
#  Qdrant Client (CLOUD SAFE + clean)
# -----------------------------------------
qdrant = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY,
    prefer_grpc=False,
    check_compatibility=False    # Removes warning
)

COLLECTION = "textbook_vectors"


# -----------------------------------------
#  Create Collection (only first time)
# -----------------------------------------
def ensure_collection(vector_size=384):   # 384 = MiniLM embedding size
    collections = qdrant.get_collections().collections
    existing = [c.name for c in collections]

    if COLLECTION not in existing:
        qdrant.recreate_collection(
            collection_name=COLLECTION,
            vectors_config=VectorParams(
                size=vector_size,
                distance=Distance.COSINE
            )
        )
        print(f"✅ Created Qdrant Collection: {COLLECTION}")
    else:
        print(f"ℹ️ Qdrant Collection already exists: {COLLECTION}")


