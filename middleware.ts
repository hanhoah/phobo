import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Sitemap-Dateien nicht weiterleiten
  if (pathname.startsWith("/sitemap") || pathname.startsWith("/robots.txt")) {
    return NextResponse.next();
  }

  // Sprache des Browsers ermitteln und weiterleiten
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "de";
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}
