import type { Metadata } from "next";
import "./globals.css";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "EZennith - Elevating Your Digital Presence",
  description: "Premium services for E-commerce, Web Development, Content Creation, and Digital Marketing.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
