import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Node.js runtime endpoint — useful for uptime monitoring and as the seam where a
 * future reservation/Airtable integration would live.
 */
export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "vacances-en-livres",
    event: {
      name: "Vacances en livres",
      date: "2026-08-15",
      venue: "Palais Municipal de Delmas, Ouest, Haïti",
    },
    time: new Date().toISOString(),
  });
}
