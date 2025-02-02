import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Retell from 'retell-sdk';
import dotenv from 'dotenv';
dotenv.config();
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const client = new Retell({
  apiKey: process.env.RETELL_API_KEY,
});

async function listCalls() {
  const callResponses = await client.call.list();

  console.log(callResponses);
}

export default cn;
