import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ICERIE 2025 | 8th International Conference on Engineering Research, Innovation and Education",
  description:
    "Join ICERIE 2025, the 8th International Conference on Engineering Research, Innovation and Education, showcasing the latest advances in engineering and technology.",
  keywords: [
    "ICERIE 2025",
    "Engineering Conference 2025",
    "Research Innovation",
    "Education in Engineering",
    "International Conference",
    "ICERIE",
    "Engineering Research",
    "Engineering Innovation",
    "Research Conference",
    "Conference 2025",
  ],
  openGraph: {
    title: "ICERIE 2025 | 8th International Conference on Engineering Research, Innovation and Education",
    description:
      "Discover the latest in engineering research and innovation at ICERIE 2025. Engage with global experts and explore groundbreaking ideas.",
    url: "https://icerie2025.sust.edu", 
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/djmgdgx86/image/upload/v1724840698/icerieLogo_zkafbk.jpg", 
        width: 1200,
        height: 630,
        alt: "ICERIE 2025 Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@icerie2025",
    title: "ICERIE 2025 | 8th International Conference on Engineering Research, Innovation and Education",
    description:
      "Join the ICERIE 2025 conference for groundbreaking discussions on engineering research, innovation, and education.",
    images: [
      {
        url: "https://res.cloudinary.com/djmgdgx86/image/upload/v1724840698/icerieLogo_zkafbk.jpg", 
        width: 1200,
        height: 630,
        alt: "ICERIE 2025 Conference",
      },
    ],
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
        <meta
          name="google-site-verification"
          content="W2s1_KkfRCUr13JIRNW_3mHuY_1FKWU48HYJ4W-15E4"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://icerie2025.sust.edu" />
        <link rel="icon" href="/icerieLogo.jpg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
