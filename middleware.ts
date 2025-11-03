import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware untuk route protection
 *
 * Logic:
 * - Public routes: /login, /signup (bisa diakses tanpa auth)
 * - Protected routes: /dashboard dan semua sub-routes (require auth)
 * - Home page (/) akan redirect berdasarkan auth state (handled di page.tsx)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes - allow access tanpa authentication
  const publicRoutes = ['/login', '/signup'];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Protected routes - require authentication
  const isProtectedRoute = pathname.startsWith('/dashboard');

  // Allow public routes tanpa check
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Untuk protected routes, kita tidak bisa check auth di middleware
  // karena auth check perlu client-side dengan SDK
  // Jadi kita allow access, dan let page component handle redirect
  // Page component akan check auth state dan redirect jika perlu
  if (isProtectedRoute) {
    return NextResponse.next();
  }

  // Default: allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
