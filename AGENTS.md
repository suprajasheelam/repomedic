# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project Overview
- Standard Create React App (React 19.2.6) with Tailwind CSS 3.3.6
- Uses npm (not yarn/pnpm)

## Commands
- Run single test: `npm test -- --testNamePattern="test name pattern"`
- Run tests for specific file: `npm test -- App.test.js`

## Code Style (Non-Obvious)
- **Dual CSS approach**: Project uses both Tailwind (in index.css) AND traditional CSS modules (App.css)
  - Tailwind directives are in `src/index.css` only
  - Component-specific styles use traditional CSS (e.g., `App.css`)
  - This is intentional - don't convert existing CSS classes to Tailwind without discussion

## Testing
- Jest + React Testing Library
- Test files use `.test.js` suffix (not `.spec.js`)
- Tests are co-located with source files in `src/`