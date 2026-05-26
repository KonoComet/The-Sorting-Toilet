# The Sorting Toilet

A free-first browser-based static React + Vite app for the Blackthorn Sorting Toilet flow.

## Features

- Full flow: language select, name input, envelope animation, admission letter, Sorting Toilet entry, psychological test, judgment animation, result page, and 9:16 share card.
- Bilingual UI copy for Chinese and English.
- Test question data is structured as `{ zh, en }`; English question strings are intentionally left empty until translations are provided, with Chinese used as the current fallback.
- Exact scoring algorithm from `sorting-toilet-test-spec.md`.
- `localStorage` recovery for language, name, current step, question progress, answers, mute state, current result, and the current attempt registration.
- Global result statistics through Supabase `public.sorting_results`.
- No authentication, payment, analytics, paid services, or external asset downloads.
- Optional local audio slots in `public/audio/`; missing files fail silently.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Build the production bundle:

```bash
npm run build
```

Preview the production bundle:

```bash
npm run preview
```

## Environment Variables

Create a local `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

Set:

```txt
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Only use the Supabase publishable/anon key in the frontend. Never expose the database password, `service_role` key, secret key, or any admin credential.

## Supabase Setup

1. Create a Supabase project.
2. Open the Supabase SQL Editor.
3. Run this SQL:

```sql
create table if not exists public.sorting_results (
  id uuid primary key default gen_random_uuid(),
  house text not null check (house in ('A', 'B', 'C', 'D', 'E')),
  attempt_id text unique not null,
  language text check (language in ('zh', 'en')),
  created_at timestamptz not null default now()
);

alter table public.sorting_results enable row level security;

drop policy if exists "Allow anonymous insert valid sorting results"
on public.sorting_results;

create policy "Allow anonymous insert valid sorting results"
on public.sorting_results
for insert
to anon
with check (
  house in ('A', 'B', 'C', 'D', 'E')
  and attempt_id is not null
);

drop policy if exists "Allow anonymous read sorting results"
on public.sorting_results;

create policy "Allow anonymous read sorting results"
on public.sorting_results
for select
to anon
using (true);
```

4. Add your Supabase project URL and publishable/anon key to `.env.local`.
5. Restart the Vite dev server after changing environment variables.

The app stores only `house`, `attempt_id`, `language`, and Supabase's timestamp. It does not store answers, scores, names, IP addresses, device fingerprints, database passwords, or secret keys.

## Audio

Optional audio files may be added later:

```txt
public/audio/ui-click.mp3
public/audio/page-turn.mp3
public/audio/wax-seal.mp3
public/audio/toilet-lid.mp3
public/audio/flush.mp3
public/audio/stamp.mp3
```

The app starts muted and never requires audio to function.

## Deployment

### Vercel

1. Import this repository in Vercel.
2. Use the framework preset `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in project environment variables.
6. Redeploy after adding or changing environment variables.

### Netlify

1. Import this repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in site environment variables.
5. Redeploy after adding or changing environment variables.

### Static Hosting

Run:

```bash
npm run build
```

Upload the generated `dist/` folder to any static host that serves static files. Configure the same Vite environment variables before building.
