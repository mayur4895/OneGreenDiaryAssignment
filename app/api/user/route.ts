import { NextResponse } from "next/server";
import axios from "axios";

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the incoming request body

    // Forward the request to the external API
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", body);

    // Return the response from the external API
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error forwarding request:", error);
    return NextResponse.json({ error: "Failed to add user." }, { status: 500 });
  }
}
