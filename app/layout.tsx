import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { siteUrl } from "./site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "Oleksandr",
    title: "Oleksandr | Full-Stack Engineer with AI expertise",
    description:
      "Oleksandr builds practical AI products and full-stack software, including Jelaksy and Lurkk.",
  },
  twitter: { card: "summary_large_image" },
  title: {
    template: "%s | Oleksandr",
    default: "Oleksandr | Full-Stack Engineer with AI expertise",
  },
  description:
    "Oleksandr builds practical AI products and full-stack software, including Jelaksy and Lurkk.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="site-main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
