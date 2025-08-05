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

| Feature           | Status    | Notes                                                   |
|------------------|-----------|----------------------------------------------------------|
| Angular Setup     | ✅ Done     | Project initialized with Angular CLI                     |
| Routing           | ✅ Done     | Pages for Home, Login, Register                          |
| Auth Integration  | ✅ Done     | Connects to backend using HTTPClient                     |
| JWT Storage       | ✅ Done     | Stored in `localStorage`                                |
| Route Guard       | ⏳ Pending | Blocks access to protected routes for unauthenticated users |

# 🔐 Auth Flow Summary
- Users register or log in through Angular forms.

- HTTPClient sends credentials to Spring Boot endpoint.

- JWT is returned and stored in frontend.

- Route guard checks for JWT before allowing access to private pages.






