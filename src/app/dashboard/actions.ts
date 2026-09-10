"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type CredentialsState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function updatePassword(
  _prevState: CredentialsState,
  formData: FormData,
): Promise<CredentialsState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const password = (formData.get("password") as string | null) ?? "";
  const confirmPassword = (formData.get("confirmPassword") as string | null) ?? "";

  if (password.length < 6) {
    return { status: "error", message: "Password must be at least 6 characters." };
  }

  if (password !== confirmPassword) {
    return { status: "error", message: "Passwords do not match." };
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return { status: "error", message: error.message };
  }

  revalidatePath("/dashboard/account");
  return { status: "success", message: "Your credentials have been updated." };
}

export type DeleteAccountState = {
  status: "idle" | "error";
  message?: string;
};

export async function deleteAccount(): Promise<DeleteAccountState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const admin = createAdminClient();

  if (!admin) {
    return {
      status: "error",
      message:
        "Account deletion isn't available yet. Please contact support@steyel.com and we'll take care of it.",
    };
  }

  const { error } = await admin.auth.admin.deleteUser(user.id);

  if (error) {
    return { status: "error", message: error.message };
  }

  await supabase.auth.signOut();
  redirect("/login?deleted=1");
}
