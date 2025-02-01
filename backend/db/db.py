from supabase import create_client, Client
import os
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_API_KEY = os.getenv("SUPABASE_API_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_API_KEY)

async def save_message(call_id, response_id, interaction_type, transcript, timestamp):
    """Save a message to the Supabase database."""
    data = {
        "call_id": call_id,
        "response_id": response_id,
        "interaction_type": interaction_type,
        "transcript": transcript,
        "timestamp": timestamp,
    }
    response = supabase.table("messages").insert(data).execute()
    return response

async def get_messages(call_id):
    """Retrieve all messages for a given call_id from the database."""
    response = supabase.table("messages").select("*").eq("call_id", call_id).execute()
    return response.data if response.data else []

# prolly later with ai agents
# async def store_transaction(mobile_number, amount, type, description):
#     """Stores a financial transaction for a user."""
#     # Fetch user ID using the mobile number
#     user_query = supabase.table("users").select("id").eq("mobile_number", mobile_number).execute()
#     user = user_query.data
#     if not user:
#         return {"error": "User not found"}
#     user_id = user[0]["id"]
    
#     # Store transaction
#     transaction_data = {
#         "user_id": user_id,
#         "amount": amount,
#         "type": type,
#         "description": description
#     }
#     response = supabase.table("transactions").insert(transaction_data).execute()
#     return response.data
