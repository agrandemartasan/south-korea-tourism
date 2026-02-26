import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for:
    // - /api routes
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - all files with extensions (e.g. favicon.ico)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
