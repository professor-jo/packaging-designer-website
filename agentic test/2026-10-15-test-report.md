# Test Report: packaging-designer-website (2026-10-15)

Verdict: All tests passed — test suite green.

## Results

| Component  | Runner (location) | Passed | Notes |
|------------|-------------------|--------:|-------|
| javascript | vitest (node) — tests in `agentic test/javascript/`, sources in repo root `js` | 4 passed | 3 test files → 3 passed files (4 tests). Last run: PASS; duration 485ms. |

## What's Covered
- src/data/mosaic.ts — unit tests for mosaicSize pattern and modulo behavior (`agentic test/javascript/unit/test_mosaic.test.ts`).
- src/data/projects.ts — unit tests for getProjects: filters drafts, sorts by order asc then year desc; mocks `astro:content` (`agentic test/javascript/unit/test_projects.test.ts`).
- src/data/url.ts — basic checks for url and stripBase helpers (pragmatic checks given import.meta.env evaluation) (`agentic test/javascript/unit/test_url.test.ts`).

## Test files
- agentic test/javascript/unit/test_mosaic.test.ts
- agentic test/javascript/unit/test_projects.test.ts
- agentic test/javascript/unit/test_url.test.ts

## Bugs Caught and Fixed
- None — all tests passed on the first run.
