import "./globals.css";

import localFont from "next/font/local";

const marcellus = localFont({
  src: "../public/assets/fonts/Marcellus.ttf",
  variable: "--font-marcellus",
  weight: "100 900",
});

export const metadata = {
  title: "BitHippie",
  description:
    "Burst Capacity Software, Data, and Cloud Engineering Professionals Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="BitHippie" />
        <meta property="og:description" content="Burst Capacity Software, Data, and Cloud Engineering Professionals Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling" />
        <meta property="og:image" content="/assets/images/hero/sustainability.jpg" />
        <meta property="og:url" content="https://bithippie.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={`${marcellus.variable} antialiased `}>{children}</body>
    </html>
  );
}
