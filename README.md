# Job Portal Front End

A secure web application for job portal

# Tech Stack

Frontend: Angular

Backend: Spring Boot(look up to the project job-portal-api inside the repo)

Auth: JWT (JSON Web Token)

Database: MySQL

# Setup Instruction

Prerequisites

- Node.js & Angular CLI Installed

```
# Frontend
cd frontend/
npm install
ng serve
```

# Features

| Feature          | Status  | Notes                                                       |
| ---------------- | ------- | ----------------------------------------------------------- |
| Angular Setup    | ✅ Done | Project initialized with Angular CLI                        |
| Routing          | ✅ Done | Pages for Home, Login, Register                             |
| Auth Integration | ✅ Done | Connects to backend using HTTPClient                        |
| JWT Storage      | ✅ Done | Stored in `localStorage`                                    |
| Route Guard      | ✅ Done | Blocks access to protected routes for unauthenticated users |

# 🔐 Auth Flow Summary

- Users register or log in through Angular forms.

- HTTPClient sends credentials to Spring Boot endpoint.

- JWT is returned and stored in frontend.

- Route guard checks for JWT before allowing access to private pages.

# Route Guard

Even though the backend handles the real gatekeeping, adding role-based route guards on the frontend gives us:

- Early blocking: Prevents users from even seeing the page layout, loading components, or making unnecessary API calls.

- Cleaner UX: Shows relevant pages only. For example, job seekers won't accidentally stumble on employer pages and wonder what’s going on.

- Performance: Saves the app from fetching protected data just to get rejected later by the backend.

- Fail-safe: Defense in depth. If backend rules change or there's a bug, frontend guards act as an extra layer.
