import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "zh", "ar"];
const defaultLocale = "en";

const excludedPaths = [
  "_next",
  "favicon.ico",
  "images",
  "videos",
  "api"
];

function getLocale(request: Request) {
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

   if (excludedPaths.some((p) => pathname.startsWith(`/${p}/`))) {
    return;
  }
  
  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detect locale
  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};
