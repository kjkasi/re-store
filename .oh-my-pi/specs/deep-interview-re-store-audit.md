## Deep-Interview Spec: re-store-audit

Profile: standard | Version: 1.0 | Phase: deep-interview
Created: 2026-09-18 | Updated: 2026-09-18
Slug: re-store-audit | Ambiguity score: 0.10 (≤ 0.20) | Recommended handoff: ralph

### Intent
Fix vulnerabilities in outdated packages for the re-store (CRA 3 / React 16 / Redux 4) bookstore application.

### Outcome Clarity
- Only `npm audit fix` (non-forced, non-breaking) applied.
- Source files (`src/`) remain untouched.
- `npm run build` remains broken (CRA 3 + Node 24 / OpenSSL) — out of scope.
- No modernizations (React 18, Redux Toolkit, Router 6, test additions) — out of scope.

### Scope Clarity
- In scope: `package-lock.json` updates from `npm audit fix`.
- Out of scope (non-goals): source rewrites, reducer fixes, build fix, modernizations, new tests.

### Constraint / Context Clarity
- Project: React 16.13.1, Redux 4.0.5, react-router-dom 5.1.2, react-scripts 3.4.1.
- No TypeScript. Mock service layer. No existing tests.
- Audit reduced: 224 → 182 vulnerabilities (5 critical, 40 high, 129 moderate, 8 low) after non-forced fix.
- Breaking `npm audit fix --force` rejected (would upgrade react-scripts to 5.0.1).

### Decision Boundaries
- Only package updates via safe audit fix.
- Build failure and broken reducers (`updateBookList` / `updateShoppingCart`) intentionally not addressed.

### Residual Risk
- 182 vulnerabilities remain (critical/high from webpack/dependencies that require breaking upgrades).
- Source bugs (`HELLOW_WORLD`, misspelled dispatch, broken cart total) persist.
- Build incompatible with current Node without `NODE_OPTIONS=--openssl-legacy-provider` (not applied per user directive).

### Handoff
Recommended: `ralph` (already-constrained implementation, no architecture change needed). Ready for direct execution.
