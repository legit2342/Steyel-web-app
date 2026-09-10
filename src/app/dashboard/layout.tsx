import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import BodyBackground from "@/components/home/BodyBackground";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#08060d] md:flex-row">
      <BodyBackground color="#08060d" />
      <DashboardSidebar />
      <main className="flex-1 px-6 py-10 sm:px-10 lg:px-14">{children}</main>
    </div>
  );
}
