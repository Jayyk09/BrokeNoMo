# all the imports

from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter, SentenceTransformersTokenTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings 
from PyPDF2 import PdfReader
from langchain.schema import Document
import os
from openai import OpenAI

openai_api_key = os.getenv("OPENAI_API_KEY")

def load_or_create_faiss_index(pdf_paths, retriever_path, embedding_model="sentence-transformers/paraphrase-MiniLM-L6-v2"):
    """
    Load FAISS index if it exists; otherwise, create and save it.
    Args:
        pdf_paths (list of str): Paths to PDF files to process.
        retriever_path (str): Path to save/retrieve the FAISS index.
    Returns:
        FAISS: The loaded or newly created FAISS index.
    """
    embeddings = HuggingFaceEmbeddings(model_name=embedding_model)
    if os.path.exists(retriever_path):
        retriever = FAISS.load_local(retriever_path, embeddings, allow_dangerous_deserialization=True)
    else:
        chunks = preprocess_data(pdf_paths)
        retriever = create_faiss_index(chunks, embedding_model)
        retriever.save_local(retriever_path)
    return retriever
