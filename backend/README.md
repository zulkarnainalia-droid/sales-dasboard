# Backend (Express)

## Setup
1. Copy `.env.example` to `.env` and update DB credentials.
2. `npm install`
3. Run migrations: import `../database/schema.sql` and `../database/seed.sql` into your DB.
4. `npm run dev` (requires nodemon) or `npm start`

Endpoints:
- GET /api/sales/kpi
- GET /api/sales/category-distribution
- GET /api/sales/top-customers
