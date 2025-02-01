from agents.prompt import begin_sentence, agent_prompt
import os
from openai import AsyncOpenAI
from custom_types import (
    ResponseRequiredRequest,
    ResponseResponse,
    Utterance,
)
from typing import List

openai_api_key = os.getenv("OPENAI_API_KEY")

class LLMClient:
    def __init__(self, retriever, embedding_model="sentence-transformers/paraphrase-MiniLM-L6-v2"):
        """
        Initialize the LLMClient with a retriever and embedding model.
        Args:
            retriever: Preloaded FAISS retriever instance.
            embedding_model: HuggingFace embedding model name for compatibility.
        """
        self.retriever = retriever
        self.embedding_model = embedding_model
        self.client = AsyncOpenAI(
            api_key=openai_api_key,
        )

