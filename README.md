# Sales Performance Dashboard - Technical Test Scaffold

This repository is a ready-to-run scaffold for the technical test described in the provided image.
It contains:
- backend/ : Node.js + Express API (API tidak jalan karena terkendala fitur gratis)
- frontend/: React (Vite) minimal dashboard (KPI cards, charts placeholders)
- database/: SQL schema and sample seed
- README files for instructions

## Quick start (development)
1. Install Node.js (v18+) and npm/yarn.
2. Backend: https://dashboard-backend-zeta-three.vercel.app/
   - `cd backend`
   - `npm install`
   - configure `.env` (see `.env.example`)
   - `npm run dev`
3. Frontend: https://frontend-nine-alpha-65.vercel.app/
   - `cd frontend`
   - `npm install`
   - `npm run dev`
4. Database:
   - Import `database/schema.sql` into your MySQL/Postgres DB and run `database/seed.sql`.

See detailed README files inside `backend/` and `frontend/`.
