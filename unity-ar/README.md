# unity-ar

Denne mappen er reservert for Unity-prosjektet i bacheloroppgaven.

## Viktig

- Ikke opprett Unity-systemmapper manuelt.
- Opprett Unity-prosjektet via Unity Editor i denne mappen når du er klar.

## Plan for backend-kommunikasjon

Unity-klienten skal bruke REST-kall mot Node.js-backend i `apps/api`, for eksempel:

- `GET /api/health` for oppkoblingssjekk.
- Senere egne endepunkter for gjenkjenning og registrering av matvarer.
