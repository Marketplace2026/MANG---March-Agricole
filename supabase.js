// js/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://czbqmzclcxitxxfydadl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YnFtemNsY3hpdHh4ZnlkYWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwOTU1MTMsImV4cCI6MjA4MjY3MTUxM30.UyImvThNMpdg9Fooqo7Hy1flaAbPKeKkpuSaYLUc--E'

export const supabase = createClient(supabaseUrl, supabaseKey)