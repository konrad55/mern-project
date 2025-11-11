# Modern MERN Project

A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js).
The project demonstrates a typical architecture for modern web apps, including authentication, routing, and CRUD operations.

## Tech Stack

- **Vite** - Fast build tool and development server
- **React 19** - Latest version of React
- **TypeScript** - Type-safe JavaScript
- **React Router v6** - Modern routing with hooks-based API
- **Tailwind CSS** - Utility-first CSS framework

## Summary

### Key Features:

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript coverage with proper interfaces
- **Modern Routing**: React Router v6 with declarative routing
- **Form Validation**: Custom form validation with TypeScript
- **Authentication**: Context-based authentication system
- **Navigation**: Responsive navigation with mobile drawer

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── shared/
│   ├── components/
│   │   ├── FormElements/     # Reusable form components
│   │   ├── Navigation/       # Navigation components
│   │   └── UIElements/       # Basic UI components
│   ├── context/              # React contexts
│   ├── hooks/                # Custom hooks
│   └── util/                 # Utility functions
├── user/                     # User-related pages and components
├── places/                   # Places-related pages and components
└── types/                    # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
