import "./globals.css";

import localFont from "next/font/local";

const marcellus = localFont({
  src: "../public/assets/fonts/Marcellus.ttf",
  variable: "--font-marcellus",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://bithippie.com"),
  title: "Sustainable Data Platforms for BioTech with BitHippie",
  description: "Fractional Software, Data, and Cloud Engineering. Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling",
  openGraph: {
    url: "https://bithippie.com",
    type: "website",
    title: "Sustainable Data Platforms for BioTech with BitHippie",
    description: "Fractional Software, Data, and Cloud Engineering. Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling",
    images: "/assets/images/home/og_image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainable Data Platforms for BioTech with BitHippie",
    description: "Fractional Software, Data, and Cloud Engineering. Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling",
    images: "/assets/images/home/og_image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
        <link rel="shortcut icon" href="/assets/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png"/>

        {/* Security Headers */}
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; frame-src https://calendar.google.com;" />
        )}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
      </head>

      <body className={`${marcellus.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
