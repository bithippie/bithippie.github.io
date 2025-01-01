import "./globals.css";

import localFont from "next/font/local";

const marcellus = localFont({
  src: "../public/assets/fonts/Marcellus.ttf",
  variable: "--font-marcellus",
  weight: "100 900",
});

export const metadata = {
  url: "https://bithippie.com",
  image: "/assets/images/hero/og_image.png",
  title: "Sustainable Data Platforms for BioTech with BitHippie",
  description:` 
    Fractional Software, Data, and Cloud Engineering. 
    Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* HTML Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>

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

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body className={`${marcellus.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
