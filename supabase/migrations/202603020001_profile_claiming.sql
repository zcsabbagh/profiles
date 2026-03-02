create extension if not exists pgcrypto;

create or replace function public.set_row_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.profile_claims (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  clerk_user_id text not null unique,
  claimed_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.profile_contents (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  html_content text not null check (char_length(html_content) between 1 and 120000),
  updated_by text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint profile_contents_slug_fk
    foreign key (slug) references public.profile_claims(slug) on delete cascade
);

create table if not exists public.verifier_requests (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  snippet text not null check (char_length(snippet) between 3 and 1000),
  section_label text,
  verifier_name text not null check (char_length(verifier_name) between 2 and 120),
  verifier_email text not null check (char_length(verifier_email) <= 320),
  requested_by text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists verifier_requests_slug_created_at_idx
on public.verifier_requests (slug, created_at desc);

drop trigger if exists profile_claims_set_updated_at on public.profile_claims;
create trigger profile_claims_set_updated_at
before update on public.profile_claims
for each row
execute function public.set_row_updated_at();

drop trigger if exists profile_contents_set_updated_at on public.profile_contents;
create trigger profile_contents_set_updated_at
before update on public.profile_contents
for each row
execute function public.set_row_updated_at();

alter table public.profile_claims enable row level security;
alter table public.profile_contents enable row level security;
alter table public.verifier_requests enable row level security;

drop policy if exists profile_claims_select_public on public.profile_claims;
create policy profile_claims_select_public
on public.profile_claims
for select
to anon, authenticated
using (true);

drop policy if exists profile_claims_insert_owner_only on public.profile_claims;
create policy profile_claims_insert_owner_only
on public.profile_claims
for insert
to authenticated
with check (
  clerk_user_id = (select auth.jwt()->>'sub')
  and not exists (
    select 1 from public.profile_claims existing
    where existing.slug = profile_claims.slug
  )
  and not exists (
    select 1 from public.profile_claims existing
    where existing.clerk_user_id = (select auth.jwt()->>'sub')
  )
);

drop policy if exists profile_contents_select_public on public.profile_contents;
create policy profile_contents_select_public
on public.profile_contents
for select
to anon, authenticated
using (true);

drop policy if exists profile_contents_insert_owner_only on public.profile_contents;
create policy profile_contents_insert_owner_only
on public.profile_contents
for insert
to authenticated
with check (
  updated_by = (select auth.jwt()->>'sub')
  and exists (
    select 1 from public.profile_claims claim
    where claim.slug = profile_contents.slug
      and claim.clerk_user_id = (select auth.jwt()->>'sub')
  )
);

drop policy if exists profile_contents_update_owner_only on public.profile_contents;
create policy profile_contents_update_owner_only
on public.profile_contents
for update
to authenticated
using (
  exists (
    select 1 from public.profile_claims claim
    where claim.slug = profile_contents.slug
      and claim.clerk_user_id = (select auth.jwt()->>'sub')
  )
)
with check (
  updated_by = (select auth.jwt()->>'sub')
  and exists (
    select 1 from public.profile_claims claim
    where claim.slug = profile_contents.slug
      and claim.clerk_user_id = (select auth.jwt()->>'sub')
  )
);

drop policy if exists verifier_requests_select_owner_only on public.verifier_requests;
create policy verifier_requests_select_owner_only
on public.verifier_requests
for select
to authenticated
using (
  exists (
    select 1 from public.profile_claims claim
    where claim.slug = verifier_requests.slug
      and claim.clerk_user_id = (select auth.jwt()->>'sub')
  )
);

drop policy if exists verifier_requests_insert_owner_only on public.verifier_requests;
create policy verifier_requests_insert_owner_only
on public.verifier_requests
for insert
to authenticated
with check (
  requested_by = (select auth.jwt()->>'sub')
  and exists (
    select 1 from public.profile_claims claim
    where claim.slug = verifier_requests.slug
      and claim.clerk_user_id = (select auth.jwt()->>'sub')
  )
);
