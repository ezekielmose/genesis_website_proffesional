# Genesis Digital Full Redesign

## Main website routes

- `/`
- `/solutions`
- `/features`
- `/resources`
- `/pricing`
- `/about`
- `/contact`
- `/staff-login`

## AI Reliability submenu

- `/ai-reliability`
- `/ai-reliability/solutions`
- `/ai-reliability/features`
- `/ai-reliability/resources`
- `/ai-reliability/pricing`
- `/ai-reliability/get-started`

## Setup

1. Run:
   `npm install`

2. Create `.env`:
   `DATABASE_URL="YOUR_NEON_DATABASE_URL"`

3. Run:
   `npx prisma format`

4. Run:
   `npx prisma validate`

5. Run:
   `npx prisma generate`

6. Run:
   `npx prisma migrate dev --name init`

7. Start:
   `npm run dev`

8. Open:
   `http://localhost:3000`

## Staff Login

The Staff Login page is intentionally a placeholder. Add authentication later using Auth.js/NextAuth, Prisma users, roles and protected routes.

## Light / Dark Mode

The theme toggle stores the selected theme in localStorage under `genesis-theme`.
