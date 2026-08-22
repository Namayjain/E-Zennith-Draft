import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "EZennith - Elevating Your Digital Presence",
  description: "Premium services for E-commerce, Web Development, Content Creation, and Digital Marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          <Loader />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
