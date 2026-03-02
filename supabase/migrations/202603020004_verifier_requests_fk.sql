-- Add foreign key constraint on verifier_requests.slug
-- This prevents orphaned rows if accessed outside the application layer.
alter table public.verifier_requests
  add constraint verifier_requests_slug_fk
  foreign key (slug) references public.profile_claims(slug) on delete cascade;
