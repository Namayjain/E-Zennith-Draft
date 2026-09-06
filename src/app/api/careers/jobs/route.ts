import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase";
import { isAuthenticatedAdmin } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  try {
    const isAdmin = await isAuthenticatedAdmin(req);
    const { searchParams } = new URL(req.url);
    const department = searchParams.get("department");

    if (!isSupabaseConfigured) {
      // In development when Supabase is not connected yet, return empty list (no dummy data)
      return NextResponse.json({
        jobs: [],
        isSupabaseConfigured: false,
      });
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ jobs: [], error: "DB client unavailable" });
    }

    let query = supabase.from("jobs").select("*").order("created_at", { ascending: false });

    // Non-admin can only see active jobs
    if (!isAdmin) {
      query = query.eq("is_active", true);
    }

    if (department && department !== "All Openings") {
      query = query.eq("department", department);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching jobs:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      jobs: data || [],
      isSupabaseConfigured: true,
    });
  } catch (error) {
    console.error("Jobs API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAdmin = await isAuthenticatedAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      title,
      department,
      location,
      type,
      experience,
      summary,
      responsibilities,
      skills,
      is_hot,
      is_active,
    } = body;

    if (!title || !department || !summary) {
      return NextResponse.json(
        { error: "Title, department, and summary are required." },
        { status: 400 }
      );
    }

    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: "Supabase credentials are not configured in .env.local yet." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "DB client unavailable" }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("jobs")
      .insert([
        {
          title: title.trim(),
          department: department.trim(),
          location: location?.trim() || "Remote",
          type: type?.trim() || "Full-Time",
          experience: experience?.trim() || "2+ Years",
          summary: summary.trim(),
          responsibilities: Array.isArray(responsibilities) ? responsibilities : [],
          skills: Array.isArray(skills) ? skills : [],
          is_hot: Boolean(is_hot),
          is_active: is_active !== undefined ? Boolean(is_active) : true,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating job:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, job: data });
  } catch (error) {
    console.error("Create job error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const isAdmin = await isAuthenticatedAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: "Supabase credentials not configured in .env.local." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "DB client unavailable" }, { status: 500 });
    }

    const { data, error } = await supabase
      .from("jobs")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating job:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, job: data });
  } catch (error) {
    console.error("Update job error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const isAdmin = await isAuthenticatedAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: "Supabase credentials not configured in .env.local." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ error: "DB client unavailable" }, { status: 500 });
    }

    const { error } = await supabase.from("jobs").delete().eq("id", id);

    if (error) {
      console.error("Error deleting job:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete job error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
