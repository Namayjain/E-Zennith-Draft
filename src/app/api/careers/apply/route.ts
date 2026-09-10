import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { job_id, job_title, name, email, phone, portfolio, experience, note } = body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedJobTitle = typeof job_title === "string" ? job_title.trim() : "";

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!trimmedJobTitle) {
      return NextResponse.json(
        { error: "Job title is required." },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured) {
      console.warn("Supabase credentials not configured in .env.local. Received application:", {
        job_title,
        name,
        email,
        phone,
        portfolio,
        experience,
        note,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Application submitted. (Configure Supabase keys in .env.local to persist directly to DB)",
      });
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "DB client unavailable" }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("job_applications")
      .insert([
        {
          job_id: job_id || null,
          job_title: job_title.trim(),
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || null,
          portfolio: portfolio?.trim() || null,
          experience: experience || "3-5 years",
          note: note?.trim() || null,
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error submitting job application:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      applicationId: data?.id,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Job apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
