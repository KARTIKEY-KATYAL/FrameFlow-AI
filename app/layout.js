import "./globals.css";
import { Roboto } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Provider from "./provider.jsx"; // Make sure this is your custom context provider or any necessary provider

const robo = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "FrameFlow AI",
  description: "A next-gen AI video promo creator and editor.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <Provider>
        <html lang="en">
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body className={robo.className}>
            <SignedIn>
              {/* Show user content after sign-in */}
              <div>{children}</div>
            </SignedIn>
            <SignedOut>
              {/* Show sign-in button if user is not signed in */}
              <div className="text-center py-10">
                <h2 className="text-2xl font-semibold mb-4">
                  You are not signed in.
                </h2>
                <SignInButton className="btn btn-primary">Sign In</SignInButton>
              </div>
            </SignedOut>
          </body>
        </html>
      </Provider>
    </ClerkProvider>
  );
}
