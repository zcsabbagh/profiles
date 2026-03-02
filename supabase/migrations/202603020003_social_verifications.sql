-- Social verifications: LinkedIn/GitHub identity verification per profile
create table public.social_verifications (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  provider text not null check (provider in ('linkedin', 'github')),
  provider_user_id text,
  provider_profile_url text,
  display_name text,
  verified_at timestamptz not null default now(),
  browserbase_context_id text,
  raw_metadata jsonb default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(slug, provider),
  constraint social_verifications_slug_fk
    foreign key (slug) references public.profile_claims(slug) on delete cascade
);

-- Social connections: scraped connections for enrichment
create table public.social_connections (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  provider text not null check (provider in ('linkedin', 'github')),
  connection_name text not null,
  connection_headline text,
  connection_profile_url text,
  connection_username text,
  matched_slug text,
  scraped_at timestamptz not null default now(),
  constraint social_connections_slug_fk
    foreign key (slug) references public.profile_claims(slug) on delete cascade
);

create index social_connections_slug_idx on public.social_connections(slug, provider);
create index social_connections_matched_idx on public.social_connections(matched_slug) where matched_slug is not null;

-- RLS
alter table public.social_verifications enable row level security;
alter table public.social_connections enable row level security;

-- Verifications: public read (for badge display), owner write
create policy social_verifications_select_public on public.social_verifications
  for select to anon, authenticated using (true);

create policy social_verifications_insert_owner on public.social_verifications
  for insert to authenticated
  with check (exists (
    select 1 from public.profile_claims c
    where c.slug = social_verifications.slug
      and c.clerk_user_id = (select auth.jwt()->>'sub')
  ));

create policy social_verifications_update_owner on public.social_verifications
  for update to authenticated
  using (exists (
    select 1 from public.profile_claims c
    where c.slug = social_verifications.slug
      and c.clerk_user_id = (select auth.jwt()->>'sub')
  ));

-- Connections: owner-only read/write (private data)
create policy social_connections_select_owner on public.social_connections
  for select to authenticated
  using (exists (
    select 1 from public.profile_claims c
    where c.slug = social_connections.slug
      and c.clerk_user_id = (select auth.jwt()->>'sub')
  ));

create policy social_connections_insert_owner on public.social_connections
  for insert to authenticated
  with check (exists (
    select 1 from public.profile_claims c
    where c.slug = social_connections.slug
      and c.clerk_user_id = (select auth.jwt()->>'sub')
  ));

-- updated_at trigger (reuse existing function from earlier migration)
create trigger set_social_verifications_updated_at
  before update on public.social_verifications
  for each row
  execute function public.set_row_updated_at();
