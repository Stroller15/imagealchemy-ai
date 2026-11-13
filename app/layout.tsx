import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "ImageAlchemy — Restore, erase and extend your photos",
  description:
    "Restore old photos, remove objects or backgrounds, recolor, and extend images to new aspect ratios in the browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#171717",
          borderRadius: "8px",
          fontFamily: "var(--font-geist-sans)",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={cn(GeistSans.variable, GeistMono.variable)}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
