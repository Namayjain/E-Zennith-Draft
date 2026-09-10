import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    // 1. Name validation
    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // 3. Phone validation
    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone || phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Please provide a valid contact phone number with at least 10 digits." },
        { status: 400 }
      );
    }

    // 4. Message validation
    if (!trimmedMessage || trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Please provide a project description of at least 10 characters." },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured) {
      console.warn("Supabase credentials not configured in .env.local. Received lead:", {
        name,
        email,
        phone,
        service,
        budget,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Submission received. (Configure Supabase keys in .env.local to persist directly to DB)",
      });
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Failed to initialize database client" },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || null,
          service: service || "General Inquiry",
          budget: budget || null,
          message: message.trim(),
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error for contact form:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save submission" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      leadId: data?.id,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
