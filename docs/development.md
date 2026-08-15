# Development Guide

## Prerequisites

- Node.js compatible with JSON Server `1.0.0-beta.15` (its package metadata requires `>=22.12.0`).
- npm.
- Two terminal sessions: one for the API and one for Vite.

## Local setup

Install dependencies in both independently versioned directories:

```powershell
Set-Location 'JSON server'
npm install

Set-Location ..\Frontend
npm install
```

Start the API from `JSON server/`:

```powershell
npx json-server db.json
```

Start the frontend from `Frontend/`:

```powershell
npm run dev
```

Verify the API before using the UI:

```powershell
Invoke-RestMethod http://localhost:3000/books
```

The command should return the book array from `JSON server/db.json`.

## Frontend commands

Run these from `Frontend/`.

| Task | Command | Status |
| --- | --- | --- |
| Start development server | `npm run dev` | Available |
| Build production assets | `npm run build` | Verified |
| Lint source files | `npm run lint` | Available |
| Preview build output | `npm run preview` | Available |
| Run automated tests | Not configured | Not applicable |

The build runs TypeScript project compilation followed by Vite's production build.

## Routes

| Route | Page | Notes |
| --- | --- | --- |
| `/` | Dashboard | Select **Refresh list** to retrieve the collection. |
| `/add` | Add book | Sends `POST /books`. |
| `/edit/:id` | Edit book | Loads `GET /books/:id`, then sends `PUT /books/:id`. |

## Change safely

1. Keep the book shape in `src/types/userType.ts`, the form fields, and `db.json` aligned.
2. If the API base URL changes, update every request in `src/Hook/Fetch.ts` or centralize the value before adding new requests.
3. Run `npm run lint` and `npm run build` in `Frontend/` after changes.
4. Start JSON Server and manually confirm list, create, edit, and delete actions.

## Troubleshooting

| Symptom | Likely cause | Resolution | Verification |
| --- | --- | --- | --- |
| The list is empty | The list has not been fetched yet or the API is stopped. | Start JSON Server and select **Refresh list**. | `Invoke-RestMethod http://localhost:3000/books` returns an array. |
| Requests fail in the browser | JSON Server is not listening on port 3000. | Run `npx json-server db.json` from `JSON server/`. | Open `http://localhost:3000/books`. |
| Vite does not start | Frontend packages are not installed. | Run `npm install` from `Frontend/`. | `npm run dev` prints a local URL. |
| Build fails | TypeScript or Vite configuration/source error. | Review the reported file and run `npm run lint`. | `npm run build` exits with code 0. |
| Unexpected data appears | The JSON database was modified by a CRUD action. | Inspect or restore `JSON server/db.json` using your normal version-control workflow. | `GET /books` returns the intended records. |

## Security and data handling

- Do not treat JSON Server or `db.json` as a secure production datastore.
- Do not put credentials, tokens, or private information into `db.json`.
- Back up or commit the intended seed data before testing destructive delete flows.

## Open items

- No automated tests are configured.
- No formatting script, CI workflow, deployment process, or environment-variable configuration is present.
- Contribution, branching, review, license, and ownership policies need project-owner confirmation.
