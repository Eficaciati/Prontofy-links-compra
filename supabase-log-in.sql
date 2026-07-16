create table if not exists public."log-in" (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  phone text,
  origin text not null,
  created_at timestamptz not null default now()
);

alter table public."log-in" enable row level security;

drop policy if exists "allow account form inserts" on public."log-in";

create policy "allow account form inserts"
on public."log-in"
for insert
to anon, authenticated
with check (true);
