import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TMRW \u00d7 VRTUS \u2014 Partnership Proposal",
  description: "Integrated precision health for premium fitness partners.",
  robots: "noindex, nofollow",
  icons: {
    icon: "https://res.cloudinary.com/dkbhatjde/image/upload/v1774156339/TMRW_Monogram_Black_m8ld50.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Crimson Text', serif" }}
      >
        {children}
      </body>
    </html>
  );
}
