import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from 'next/server'
{/* taken directly from previously used web-ui, will be alrtered as needed */}

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
}

const customMiddleware = async (request: NextRequest) => {
  // Allow all origins for development purposes
  const origin = request.headers.get('origin') ?? '*';
  const isPreflight = request.method === 'OPTIONS';

  const headers = {
    'Access-Control-Allow-Origin': origin,
    ...corsOptions,
  };

  if (isPreflight) {
    return NextResponse.json({}, { headers });
  }

  const response = NextResponse.next();

  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export default clerkMiddleware((auth, req) => {
  return customMiddleware(req);
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};