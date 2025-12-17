# React Role-Based Routing App

A React application demonstrating authentication, role-based access control,
and nested routing using React Router and Context API.

## Features

- Authentication with React Context
- Role-based authorization (Admin / User)
- Protected routes
- Nested layouts
- Lazy loading with React.lazy
- Error Boundary support
- LocalStorage persistence

## Installation

```bash
npm install
npm run dev
```

# Roles

## Example user object:

{
id: 1,
name: 'nana',
role: 'admin'
}

# Routes

- `/` → Home
- `/login` → Login page
- `/admin` → Admin dashboard (admin only)
- `/admin/setting` → Admin settings
- `/user` → User profile (user only)
- `/user/details` → User details
- `/forbidden` → Access denied page
- `*` → Not found page

# License

MIT
