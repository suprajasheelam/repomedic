# RepoMedic

**AI-Powered Technical Debt Diagnosis & Modernization Copilot**

Built with IBM Bob for the IBM Bob Hackathon 2026.

## What is RepoMedic?

RepoMedic helps engineering teams turn technical debt into action. Using IBM Bob's repository-aware understanding, it:

1. **Diagnoses** — Scans codebases to find dangerous technical debt hotspots
2. **Prioritizes** — Ranks issues by severity, impact, and fix effort
3. **Plans** — Generates safe modernization plans with file order and edge cases
4. **Modernizes** — Helps implement refactors with updated tests and docs

## How IBM Bob Was Used

- **Ask Mode** — Analyzed repository structure, identified 12 security vulnerabilities, found duplicated logic across 3 files, mapped 7 architecture violations, and ranked priority fixes
- **Plan Mode** — Created a 5-step modernization plan with file dependencies, edge cases, and test requirements
- **Code Mode** — Implemented pricing service refactor, generated 21-test suite, created documentation, and built this dashboard

## Repositories

- **RepoMedic Dashboard**: This repo
- **Sample Analyzed Repo**: https://github.com/anishbellamkonda01/messy-ecommerce-api (includes bob_sessions folder with all exported task reports)

## How to Run

```bash
git clone https://github.com/anishbellamkonda01/repomedic.git
cd repomedic
npm install
npm start
```

Open http://localhost:3000

## Tech Stack

- React.js (frontend dashboard)
- Tailwind CSS (styling)
- IBM Bob (AI analysis engine - Ask, Plan, Code modes)

## License

MIT
