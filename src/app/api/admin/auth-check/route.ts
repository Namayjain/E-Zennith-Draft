import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/adminAuth";
import { isSupabaseConfigured } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const authenticated = await isAuthenticatedAdmin(req);

  return NextResponse.json({
    authenticated,
    isSupabaseConfigured,
  });
}
