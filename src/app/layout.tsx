import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FetchAPI — Free REST APIs for Developers",
    template: "%s | FetchAPI",
  },
  description:
    "Free fake REST APIs for testing and learning. 200+ records across users, products, posts, todos, jokes, quotes and countries. No auth, no signup — just fetch and build.",

  keywords: [
    "free rest api",
    "fake api",
    "dummy api",
    "mock api",
    "api for testing",
    "fake json api",
    "free api for developers",
    "users api",
    "products api",
    "nextjs api",
    "learn api",
    "practice api",
    "fetchapi",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="flex-1 flex flex-col mt-18">{children}</main>
          <Footer />
          <Toaster position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
