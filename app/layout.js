import "./globals.css";
import { Roboto } from "next/font/google";

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
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={robo.className}>{children}</body>
    </html>
  );
}
