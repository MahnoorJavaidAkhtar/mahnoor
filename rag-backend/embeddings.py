from sentence_transformers import SentenceTransformer

# FREE model — fast + accurate
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

def embed_text(text: str):
    """
    Returns a vector embedding for given text using a FREE HuggingFace model.
    """
    return model.encode(text).tolist()
