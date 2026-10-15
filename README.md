# MatHjelp

Monorepo for bachelorprosjektet **MatHjelp** med mobilapp, backend og fremtidig Unity AR-integrasjon.

## Struktur

- `apps/mobile` – React Native + Expo + TypeScript
- `apps/api` – Node.js + Express + TypeScript + Mongoose + Zod
- `unity-ar` – plass for Unity-prosjekt (opprettes via Unity Editor)
- `docs` – teknisk dokumentasjon

## Kom i gang

1. Installer avhengigheter:

   ```bash
   npm install
   ```

2. Kopier miljøvariabler:

   ```bash
   copy .env.example .env
   ```

3. Start backend:

   ```bash
   npm run dev:api
   ```

4. Start mobilapp (ny terminal):

   ```bash
   npm run dev:mobile
   ```

## Backend health check

Når backend kjører:

- `GET http://localhost:4000/api/health`

## Unity og API

Unity-prosjektet skal senere bruke REST-kall mot backend i `apps/api`.
Startpunktet for verifisering er `/api/health`.
