"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <>
        {/* On admin routes, do NOT render consumer site Navbar, Footer, or WhatsApp widget */}
        {children}
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Loader />
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
