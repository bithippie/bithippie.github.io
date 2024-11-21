import "./globals.css";

import localFont from "next/font/local";

const marcellus = localFont({
  src: "./fonts/Marcellus.ttf",
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
      <body className={`${marcellus.variable} antialiased`}>{children}</body>
    </html>
  );
}
