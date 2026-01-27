import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://farazabir.github.io/farazahmedabir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faraz Ahmed Abir | Software Engineer",
    template: "%s | Faraz Ahmed Abir",
  },
  description:
    "Software Engineer specializing in full-stack development, AI/ML solutions, and scalable backend systems. Building impactful EdTech and enterprise applications.",
  keywords: [
    "Faraz Ahmed Abir",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "AI/ML Engineer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Java Developer",
    "Bangladesh Developer",
    "EdTech Developer",
    "Web Development",
    "Mobile App Developer",
  ],
  authors: [{ name: "Faraz Ahmed Abir", url: siteUrl }],
  creator: "Faraz Ahmed Abir",
  publisher: "Faraz Ahmed Abir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Faraz Ahmed Abir - Portfolio",
    title: "Faraz Ahmed Abir | Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, AI/ML solutions, and scalable backend systems. Available for exciting projects.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Faraz Ahmed Abir - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Ahmed Abir | Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, AI/ML solutions, and scalable backend systems.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@farazabir",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faraz Ahmed Abir",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, AI/ML solutions, and scalable backend systems.",
  email: "farazabir50@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mymensingh",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://github.com/farazabir",
    "https://linkedin.com/in/faraz-ahmed-abir-57167a1ab",
  ],
  knowsAbout: [
    "Full Stack Development",
    "Backend Development",
    "AI/ML",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Spring Boot",
    "Django",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="mKyeeHUs8roA9g8NhLQHh353RnEuiFHyUHqEgw5AfXg"
        />
        <link rel="icon" href="/farazahmedabir/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/farazahmedabir/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
