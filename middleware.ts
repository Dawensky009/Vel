import { NextRequest, NextResponse } from "next/server";

/**
 * Maintenance gate.
 *
 * When MAINTENANCE_MODE === "on", every page is rewritten to /maintenance
 * EXCEPT for the owner, who bypasses the gate. To become the owner, open the
 * site once with `?apercu=<MAINTENANCE_BYPASS_TOKEN>`: that sets a cookie so
 * the real site is visible everywhere on that device. `?apercu=off` clears it.
 *
 * Turn the gate off (at launch) by setting MAINTENANCE_MODE to anything other
 * than "on" (or removing it) in the host env, then redeploying. No code change.
 * The variable is absent in local `npm run dev`, so development is never gated.
 *
 * Edge-safe: only reads the query string and cookies (no Node-only APIs).
 */

const COOKIE = "vel_apercu";
const QUERY = "apercu";
const MAX_AGE = 60 * 60 * 24 * 60; // 60 days

export function middleware(req: NextRequest) {
  // Gate disabled → site behaves normally.
  if (process.env.MAINTENANCE_MODE !== "on") return NextResponse.next();

  const token = process.env.MAINTENANCE_BYPASS_TOKEN;
  const url = req.nextUrl;
  const param = url.searchParams.get(QUERY);

  // Owner arrives via the secret link → set (or clear) the cookie, then drop
  // the query so the token never lingers in the address bar or in history.
  if (param !== null) {
    const clean = url.clone();
    clean.searchParams.delete(QUERY);
    const res = NextResponse.redirect(clean);

    if (param === "off") {
      res.cookies.delete(COOKIE);
    } else if (token && param === token) {
      res.cookies.set(COOKIE, token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: MAX_AGE,
      });
    }
    return res;
  }

  // Approved owner (valid cookie) → real site.
  if (token && req.cookies.get(COOKIE)?.value === token) {
    return NextResponse.next();
  }

  // Everyone else → maintenance page, original URL preserved.
  const dest = url.clone();
  dest.pathname = "/maintenance";
  dest.search = "";
  return NextResponse.rewrite(dest);
}

export const config = {
  // Gate all routes except Next internals, the maintenance page itself, the
  // health endpoint (monitoring stays green), and the public assets the
  // maintenance page needs to render.
  matcher: [
    "/((?!maintenance|_next/static|_next/image|api/health|favicon.ico|icon.svg|Logo_vel.jpeg|Annonces.jpeg|images/).*)",
  ],
};
