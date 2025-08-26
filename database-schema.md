# Database Schema

This file contains all SQL queries for creating the database tables used in this application.

## Users Table

Creates a minimal `public.users` table that extends the built-in Supabase `auth.users` table. This table serves as the application-level user "profile" where app-specific fields live.

```sql
-- Create users table
create table public.users (
  id uuid references auth.users(id) primary key,
  email text
);

-- Enable Row Level Security
alter table public.users enable row level security;

-- Create policies
create policy "Users can view own profile" on public.users
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.users
  for update using (auth.uid() = id);

create policy "Users can insert own profile" on public.users
  for insert with check (auth.uid() = id);

-- Create function to automatically create a row in public.users (the profile) on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger to automatically create a public.users profile row on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
```