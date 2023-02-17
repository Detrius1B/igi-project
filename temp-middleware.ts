import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ACCESS_TOKEN = 'accessToken';

export function middleware(request: NextRequest) {
  const authorization = request.cookies.get(ACCESS_TOKEN);

  console.log(authorization);

  if (request.nextUrl.pathname.startsWith('/about')) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }

  return NextResponse
}

// export const config = {
//   matcher: ['/about/:path*', '/dashboard/:path*']
// };
