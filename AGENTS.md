<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

# TicTacToe V1 — AI Coding Context

## Project Overview

Build a production-ready TicTacToe AI web app using:

- Next.js App Router
- TypeScript
- Tailwind CSS

This is V1 only.

Focus:

- clean architecture
- reusable React components
- responsive UI
- minimax AI
- production readiness
- stable deployment

---

# Core Rules

## Keep Everything Simple

DO:

- implement small focused features
- prefer readability over abstraction
- use reusable components
- use strict TypeScript
- keep files small
- separate UI and logic

DO NOT:

- overengineer
- add unnecessary libraries
- add backend services
- add multiplayer
- add authentication
- add database
- add websocket logic
- add Docker
- add AWS infrastructure

---

# Final V1 Scope

## Included

- Player vs AI
- Minimax AI
- Score tracking
- Restart game
- Winner detection
- Draw detection
- Dark theme
- Responsive design
- GitHub Actions
- Vercel deployment

## Excluded

- Multiplayer
- Login/auth
- Chat
- Matchmaking
- Database
- Online sync
- API-heavy architecture

---

# Tech Stack

## Framework

- Next.js App Router

## Language

- TypeScript

## Styling

- Tailwind CSS

## State

- React hooks only

## Deployment

- Vercel

## CI/CD

- GitHub Actions

---

# Folder Structure

```txt
src/
  app/
  components/
  lib/
  hooks/
  types/
  constants/

public/

.github/workflows/
```

---

# Architecture Rules

## UI Components

Keep components:

- reusable
- typed
- small
- focused

Examples:

- Board
- Square
- ScoreBoard
- GameStatus
- ControlPanel

Avoid:

- giant components
- deeply nested props
- duplicated UI logic

---

# Logic Separation

## src/lib/

Place pure logic here:

- winner calculation
- minimax algorithm
- board utilities
- game helpers

UI components must NOT contain large algorithmic logic.

---

# State Management Rules

Use:

- useState
- useEffect
- derived state

Do NOT use:

- Redux
- Zustand
- Context for everything

Keep state local and minimal.

---

# Styling Rules

## UI Direction

Design must be:

- modern
- dark themed
- responsive
- minimal
- smooth
- cleanly spaced

Allowed:

- subtle gradients
- hover effects
- small animations
- transition effects

Avoid:

- excessive animation
- cluttered layouts
- random colors
- inconsistent spacing

---

# Game Rules

## Core Logic

Implement:

- turn switching
- move validation
- winner detection
- draw detection
- restart game
- score tracking

Prevent:

- repeated clicks
- invalid board updates
- stale state issues

---

# AI Requirements

## Minimax AI

AI must:

- never lose
- block winning moves
- prioritize winning paths
- respond instantly

Implementation:

- recursive minimax
- isolated inside:

```txt
src/lib/minimax.ts
```

Keep implementation beginner-readable.

---

# Accessibility Rules

Ensure:

- semantic buttons
- keyboard usability
- proper contrast
- accessible labels

---

# Performance Rules

Avoid:

- unnecessary rerenders
- deeply nested state
- expensive calculations inside render

Keep:

- renders predictable
- components lightweight

---

# Git Workflow

## Branch Strategy

Never work directly on main.

Use:

```bash
git checkout -b feature/feature-name
```

Examples:

```txt
feature/base-ui
feature/game-logic
feature/minimax-ai
feature/ui-polish
```

---

# Development Workflow

For every feature:

```txt
Create branch
→ implement feature
→ run locally
→ fix errors
→ lint
→ build
→ commit
→ merge
```

---

# Required Commands

## Development

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

## Production Build

```bash
npm run build
```

Build must pass before merge.

---

# Git Commit Convention

Use:

```txt
feat:
fix:
refactor:
docs:
style:
ci:
chore:
```

Examples:

```txt
feat: implement minimax ai
fix: resolve draw detection issue
refactor: simplify board utilities
style: improve responsive layout
```

---

# CI/CD Rules

## GitHub Actions

Pipeline must:

- install dependencies
- run lint
- run production build

Keep workflow simple.

---

# Deployment Rules

## Hosting

- Vercel only for V1

Before deployment:

- no TypeScript errors
- no lint errors
- no console warnings
- responsive on mobile

---

# AI Coding Rules

When generating code:

DO:

- generate incremental changes
- preserve existing architecture
- maintain strict typing
- use clean naming
- keep code modular

DO NOT:

- rewrite unrelated files
- introduce unnecessary abstractions
- install random dependencies
- change architecture without reason
- generate entire app at once

---

# Preferred Coding Style

## TypeScript

Prefer:

- explicit types
- typed props
- utility functions
- predictable state flow

Avoid:

- any
- giant interfaces
- overly generic abstractions

---

# File Organization Rules

## Components

One responsibility per component.

## Utilities

Pure functions only.

## Hooks

Reusable stateful behavior only.

---

# Error Prevention

Before finalizing any feature:

- test locally
- test mobile responsiveness
- run lint
- run build
- verify no console errors

---

# Production Readiness Checklist

Before considering V1 complete:

- AI never loses
- UI responsive
- build passes
- lint passes
- no hydration issues
- no runtime warnings
- reusable components
- clean folder structure
- deployed successfully

---

# Final Principle

Optimize for:

- clarity
- maintainability
- stable functionality
- clean architecture
- production readiness

Do not optimize for unnecessary complexity.
