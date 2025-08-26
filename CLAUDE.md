# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketplace application built with Next.js 15+ and Supabase integration. The project uses App Router architecture with TypeScript, Tailwind CSS, and shadcn/ui components.

### Development Workflow

**Draft Folder (`/draft`)**: Frontend-only brainstorming and prototyping
- No backend connections or Supabase integration
- Used for testing UI/UX flows and component designs
- Static/mock data only for visual development
- Components here are experimental and not production-ready

**App Folder (`/app`)**: Production-ready application
- Full Supabase integration and authentication
- Components ported from draft folder after approval
- Database connections and real data handling
- Production-ready code with proper error handling

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Setup

The application requires Supabase environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY` - Supabase publishable key

Copy `.env.example` to `.env.local` and configure these values for local development.

## Application Architecture

### Authentication Flow
The app implements cookie-based authentication with Supabase:
- **Middleware** (`middleware.ts`): Uses `updateSession` from `lib/supabase/middleware.ts` to handle auth state
- **Protected routes**: Middleware redirects unauthenticated users to `/auth/login`
- **Client patterns**: 
  - Server components use `lib/supabase/server.ts` 
  - Client components use `lib/supabase/client.ts`

### Route Structure
- `/` - Public landing page
- `/auth/*` - Authentication pages (login, signup, password reset)
- `/protected` - Protected area with navigation layout

### Key Patterns
- **Server Client Creation**: Always create new Supabase server clients per request (never global)
- **Auth Middleware**: Critical to call `supabase.auth.getClaims()` in middleware for SSR
- **Cookie Management**: Middleware handles cookie synchronization between client/server

### Database Schema
The application uses a simple user profile system:
- `public.users` table extends `auth.users` with application-specific fields
- Automatic profile creation via database trigger on user signup
- Row Level Security (RLS) policies for user data protection
- Database schema documented in `database-schema.md`

### UI Components
- Uses shadcn/ui components in `components/ui/`
- Theme switching with next-themes (`ThemeProvider` in root layout)
- Form components for authentication flows
- Responsive layout with Tailwind CSS

### File Organization
- `app/` - Production Next.js App Router pages and layouts with full backend integration
- `draft/` - Frontend-only prototyping folder for marketplace UI experiments
- `components/` - Reusable UI components (production-ready)
- `lib/` - Utilities and Supabase client configurations
- Authentication forms and UI in dedicated component files
- `lovable-example/` - Contains example React components (separate from main app)

### Key Development Patterns
- **Draft-first approach**: Design and test marketplace UI in `/draft` folder first
- **Port when ready**: Move approved components from `/draft` to `/app` with backend integration
- **Mock data in drafts**: Use static/mock data for frontend flow testing
- **Real data in app**: Implement proper Supabase queries and error handling in production code