import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();

  return NextResponse.json(data[0]); // JSON 形式で返す
}
