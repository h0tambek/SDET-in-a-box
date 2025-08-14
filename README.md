# SDET-in-a-Box (Updated) — Playwright + TypeScript + Allure + dotenv

Lean, client-ready test harness. **ES2021** target. Robust selectors with fallbacks.

## What's inside
- Playwright (TS), Allure reports, dotenv
- Safe demo tests:
  - SauceDemo: login → inventory visible
  - DemoQA: Text Box form → output visible
  - RealWorld: smoke nav only (no writes)

## Setup
```bash
npm install
npx playwright install --with-deps
cp .env.example .env   # Windows PowerShell: copy .env.example .env
```

## Run
```bash
npm test              # headless
npm run test:headed   # see browser
npm run test:ui       # Playwright UI
```

## Allure
```bash
npm run allure:report
npm run allure:open
```

## Notes on selectors
- SauceDemo uses both **[data-test]** and IDs. We match either to avoid breakage.
- DemoQA and RealWorld locators are based on stable text/IDs.
