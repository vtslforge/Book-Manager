# Book Management App

A small learning project for managing a personal book collection. The React frontend lets users view, add, edit, and delete books; a local [JSON Server](https://github.com/typicode/json-server) process persists the collection in `JSON server/db.json`.

The project is intended for local development and API-learning exercises. It has no authentication, server-side validation, or production deployment configuration.

## Features

- View the current book collection.
- Add a book with title, author, genre, publication year, and price.
- Edit an existing book.
- Delete a book.
- Use a local REST API backed by a JSON file.

## Prerequisites

- Node.js. The installed JSON Server version declares Node.js `>=22.12.0`; use a current Node.js release that satisfies this requirement.
- npm.

## Quick start

Open two terminals from the repository root.

In the first terminal, start the API:

```powershell
Set-Location 'JSON server'
npx json-server db.json
```

In the second terminal, start the frontend:

```powershell
Set-Location Frontend
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Select **Refresh list** to load books from the API, then use **Add book**, **Edit**, or **Delete**.

> **Warning:** The API writes directly to `JSON server/db.json`. Adding, editing, or deleting a book changes that file.

## Project structure

| Path | Purpose |
| --- | --- |
| `Frontend/` | Vite, React, TypeScript, and Tailwind CSS client application. |
| `Frontend/src/Hook/Fetch.ts` | Shared book API hook and CRUD request logic. |
| `Frontend/src/components/` | List, add, and edit UI components. |
| `Frontend/src/Pages/Dashboard.tsx` | Main collection page. |
| `JSON server/` | Local JSON Server dependency and database file. |
| `JSON server/db.json` | Book data persisted by the local API. |
| `docs/architecture.md` | System components, request flow, and data model. |
| `docs/api.md` | REST endpoints used by the frontend. |
| `docs/development.md` | Local development, quality checks, and troubleshooting. |

## Documentation

- [Architecture](docs/architecture.md)
- [API reference](docs/api.md)
- [Development guide](docs/development.md)