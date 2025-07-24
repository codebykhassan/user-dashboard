# User Management Dashboard

A modern user management dashboard built with Next.js 15, TypeScript, and TailwindCSS.

## Features

-  View all users in a clean card layout
-  Detailed user profiles with full information
-  Create new users with a simple form
-  Loading states and error handling
-  Fully responsive design
-  Server-side rendering with Next.js App Router

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **JSONPlaceholder API** - Mock data

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/src/lib` - API utilities and helpers
- `/src/types` - TypeScript type definitions

## API Integration

The app uses the JSONPlaceholder API for demo data:
- GET `/users` - List all users
- GET `/users/:id` - Get specific user
- POST `/users` - Create new user (simulated)