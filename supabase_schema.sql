-- ==============================================================================
-- E ZENNITH - SUPABASE DATABASE SCHEMA MIGRATION SCRIPT
-- Copy and paste this entire script into your Supabase SQL Editor and click RUN.
-- ==============================================================================

-- 1. Create EXTENSIONS (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. TABLE: contact_submissions (Contact Form Leads)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT DEFAULT 'General Inquiry',
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'converted', 'archived'
    notes TEXT DEFAULT ''
);

-- Index for faster search and chronological ordering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions (status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions (email);

-- Enable RLS for contact_submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous users to insert contact form submissions
CREATE POLICY "Allow public insert into contact_submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Allow full access for anon, authenticated and service_role
CREATE POLICY "Allow full access for service_role and admin on contact_submissions"
ON public.contact_submissions
FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);


-- ==============================================================================
-- 3. TABLE: jobs (Career Openings Managed by Admin)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT NOT NULL DEFAULT 'Remote',
    type TEXT NOT NULL DEFAULT 'Full-Time',
    experience TEXT NOT NULL DEFAULT '2+ Years',
    summary TEXT NOT NULL,
    responsibilities TEXT[] DEFAULT '{}',
    skills TEXT[] DEFAULT '{}',
    is_hot BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true
);

-- Index for filtering active jobs by department
CREATE INDEX IF NOT EXISTS idx_jobs_is_active ON public.jobs (is_active);
CREATE INDEX IF NOT EXISTS idx_jobs_department ON public.jobs (department);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON public.jobs (created_at DESC);

-- Enable RLS for jobs
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read active jobs
CREATE POLICY "Allow public select on active jobs"
ON public.jobs
FOR SELECT
TO anon, authenticated
USING (is_active = true);

-- Policy: Allow full CRUD access for admin and service_role
CREATE POLICY "Allow full access for service_role and admin on jobs"
ON public.jobs
FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);


-- ==============================================================================
-- 4. TABLE: job_applications (Candidates Applying for Jobs)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
    job_title TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    portfolio TEXT,
    experience TEXT DEFAULT '3-5 years',
    note TEXT,
    status TEXT DEFAULT 'new', -- 'new', 'reviewing', 'shortlisted', 'rejected', 'hired'
    notes TEXT DEFAULT ''
);

-- Index for querying applications
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON public.job_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON public.job_applications (status);
CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON public.job_applications (job_id);

-- Enable RLS for job_applications
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous applicants to insert application
CREATE POLICY "Allow public insert into job_applications"
ON public.job_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Allow full access for admin and service_role on job_applications
CREATE POLICY "Allow full access for service_role and admin on job_applications"
ON public.job_applications
FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);
