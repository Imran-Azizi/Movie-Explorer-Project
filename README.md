# Full-Stack Authentication & Authorization Starter

This project now includes two folders:

- `backend`: Django + Django REST Framework + PostgreSQL + JWT auth + role-based authorization.
- `frontend`: React + Vite + TailwindCSS + JWT authentication flow + protected routes.

## Backend setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Roles and authorization

- `user`: authenticated routes.
- `manager`: can list users.
- `admin`: can list users and update roles.

## API endpoints

- `POST /api/auth/register/`
- `POST /api/auth/login/`
- `POST /api/auth/refresh/`
- `POST /api/auth/logout/`
- `GET/PATCH /api/auth/me/`
- `GET /api/auth/users/` (manager/admin)
- `PATCH /api/auth/users/<id>/role/` (admin only)
