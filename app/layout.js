import localFont from "next/font/local";
import "./globals.css";

const marcellus = localFont({
  src: "./fonts/Marcellus.ttf",
  variable: "--font-marcellus",
  weight: "100 900",
});

export const metadata = {
  title: "BitHippie",
  description: "Full-Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
