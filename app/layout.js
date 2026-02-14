import "./globals.css";

import localFont from "next/font/local";

const marcellus = localFont({
  src: "../public/assets/fonts/Marcellus.ttf",
  variable: "--font-marcellus",
  weight: "100 900",
});

export const metadata = {
  url: "https://bithippie.com",
  image: "/assets/images/home/og_image.jpg",
  title: "Sustainable Data Platforms for BioTech with BitHippie",
  description:`Fractional Software, Data, and Cloud Engineering. Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling`,
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

        {/* Sets viewport width to device width and prevents initial zoom - essential for responsive mobile design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Content Security Policy - Only load resources from your own domain */}
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self';" />
        {/* Prevent MIME type sniffing */}
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        {/* Control referrer information sent to other sites */}
        <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        {/* Disable unused browser features */}
        <meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />


        {/* Facebook Meta Tags */}
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={metadata.url} />
        <meta property="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </head>

      <body className={`${marcellus.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
