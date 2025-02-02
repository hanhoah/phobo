import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|sitemap-de.xml|sitemap-en.xml|sitemap-ja.xml|sitemap-vi.xml|sitemap-0.xml).*)",
  ],
};
