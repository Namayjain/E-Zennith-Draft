import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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
