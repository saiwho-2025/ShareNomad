create table companies (
  id uuid primary key default gen_random_uuid(),
  ticker text not null,
  company_name text not null,
  country text,
  exchange text,
  website text,
  created_at timestamptz not null default now()
);

create table user_holdings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  company_id uuid not null references companies(id),
  shares numeric(20,6) not null check (shares > 0),
  purchase_date date,
  created_at timestamptz not null default now()
);

create table shareholder_benefits (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  title text not null,
  category text not null,
  description text,
  country text,
  city text,
  location text,
  benefit_type text not null,
  discount_value numeric(12,2),
  currency text default 'EUR',
  minimum_shares numeric(20,6),
  holding_period_days integer,
  valid_from date,
  valid_until date,
  verification_required boolean not null default true,
  status text not null default 'demo',
  created_at timestamptz not null default now()
);

create table benefit_sources (
  id uuid primary key default gen_random_uuid(),
  benefit_id uuid not null references shareholder_benefits(id) on delete cascade,
  source_type text not null,
  source_url text not null,
  source_title text,
  verified_at timestamptz,
  expiration_date date,
  confidence text not null default 'unknown'
);

create index benefits_location_idx on shareholder_benefits(city, country);
create index benefits_company_idx on shareholder_benefits(company_id);
