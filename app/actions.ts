"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutHandler() {
  console.log("logoutHandler called");
  cookies().delete("auth");
  redirect("/");
}
