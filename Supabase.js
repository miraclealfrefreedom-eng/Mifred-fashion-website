// Mifred Fashion - Supabase connection

const SUPABASE_URL = "https://vrhckglaoilzqhghjhoc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyaGNrZ2xhb2lsenFoZ2hqaG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1NTc3MjQsImV4cCI6MjEwNzEzMzcyNH0.O6WKdcNdpUHBVH0LBuKZJL0KxH68GGFgdMPik4cZGIY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Mifred Fashion connected to Supabase!");