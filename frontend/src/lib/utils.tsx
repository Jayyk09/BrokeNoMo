import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Retell from 'retell-sdk';
import dotenv from 'dotenv';
dotenv.config();
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const client = new Retell({
  apiKey: process.env.RETELL_API_KEY || '',
});

export async function listCalls(number: string) {
  const callResponses = await client.call.list({
    filter_criteria:{
      from_number: [number],
    },
    limit: 9,
  });

  console.log(callResponses);
}

export default cn;
