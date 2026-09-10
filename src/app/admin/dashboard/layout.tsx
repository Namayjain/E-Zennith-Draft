import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/adminAuth";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isAuthenticatedAdmin();

  if (!isAuth) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
