import { redirect } from "next/navigation";
import { isAuthenticatedAdmin } from "@/lib/adminAuth";

export default async function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isAuthenticatedAdmin();

  if (isAuth) {
    redirect("/admin/dashboard");
  }

  return <>{children}</>;
}
