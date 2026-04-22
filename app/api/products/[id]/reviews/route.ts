import { NextResponse } from "next/server";

const BACKEND_BASE_URL = "https://werent-backend-production.up.railway.app";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);

  const upstreamParams = new URLSearchParams();
  const limit = searchParams.get("limit");
  const cursor = searchParams.get("cursor");

  if (limit) upstreamParams.set("limit", limit);
  if (cursor) upstreamParams.set("cursor", cursor);

  const queryString = upstreamParams.toString();
  const upstreamUrl = queryString
    ? `${BACKEND_BASE_URL}/products/${id}/reviews?${queryString}`
    : `${BACKEND_BASE_URL}/products/${id}/reviews`;

  try {
    const response = await fetch(upstreamUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const payload = await response.json();
    return NextResponse.json(payload, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch reviews from upstream" },
      { status: 502 },
    );
  }
}
