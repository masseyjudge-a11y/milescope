-- Milescope accounts: run this once in Supabase → SQL Editor → New query.
-- One row per user holding their saved wallet, cards, trips and home airport.
-- Row-level security means each signed-in user can only see and change
-- their own row; the public anon key can't read anyone else's data.

create table if not exists public.profiles (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "read own profile"   on public.profiles;
drop policy if exists "insert own profile" on public.profiles;
drop policy if exists "update own profile" on public.profiles;
drop policy if exists "delete own profile" on public.profiles;

create policy "read own profile"   on public.profiles for select using (auth.uid() = user_id);
create policy "insert own profile" on public.profiles for insert with check (auth.uid() = user_id);
create policy "update own profile" on public.profiles for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own profile" on public.profiles for delete using (auth.uid() = user_id);
