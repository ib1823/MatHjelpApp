import { createApp } from './app.js';
import { connectToDatabase } from './config/db.js';
import { env } from './config/env.js';

async function startServer() {
  await connectToDatabase(env.MONGODB_URI);

  const app = createApp();
  app.listen(env.PORT, () => {
    console.log(`API server started on port ${env.PORT}`);
  });
}

startServer().catch((error: unknown) => {
  console.error('API server failed to start', error);
  process.exit(1);
});
