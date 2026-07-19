-- Run once in the Supabase SQL Editor.
-- One row per user mirroring the two localStorage sets.

create table public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  skills     text[]      not null default '{}',
  projects   text[]      not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "select own progress" on public.progress
  for select using (auth.uid() = user_id);

create policy "insert own progress" on public.progress
  for insert with check (auth.uid() = user_id);

create policy "update own progress" on public.progress
  for update using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
