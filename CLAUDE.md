# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15+ application with Supabase integration, built as a starter template for full-stack web applications. It uses the App Router architecture with TypeScript, Tailwind CSS, and shadcn/ui components.

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

### UI Components
- Uses shadcn/ui components in `components/ui/`
- Theme switching with next-themes
- Form components for authentication flows
- Responsive layout with Tailwind CSS

### File Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utilities and Supabase client configurations
- Authentication forms and UI in dedicated component files