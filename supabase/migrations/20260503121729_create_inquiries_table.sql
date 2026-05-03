/*
  # Create inquiries table for Fora landing page

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `full_name` (text) - Contact person name
      - `company_name` (text) - Company name
      - `email` (text) - Contact email
      - `project_description` (text) - Project details
      - `file_names` (text[]) - Names of uploaded files
      - `created_at` (timestamptz)
      - `status` (text) - 'new', 'reviewed', 'responded'

  2. Security
    - Enable RLS on `inquiries` table
    - Allow anonymous inserts (public form submissions)
    - Restrict reads to authenticated users only (admin access)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text NOT NULL,
  email text NOT NULL,
  project_description text NOT NULL,
  file_names text[] DEFAULT '{}',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);
