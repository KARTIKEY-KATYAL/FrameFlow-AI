import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

// Middleware logic
export default clerkMiddleware((auth, request) => {
  // Protect all non-public routes
  if (!isPublicRoute(request)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Protect all routes except static files and Next.js internals
    "/((?!_next/|.*\\..*).*)",
    // Always apply middleware to API and tRPC routes
    "/(api|trpc)(.*)",
  ],
};
