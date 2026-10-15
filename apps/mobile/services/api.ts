const apiBaseUrl =
  process.env.EXPO_PUBLIC_API_URL?.trim() || 'http://localhost:4000/api';

export async function getApiHealth() {
  const response = await fetch(`${apiBaseUrl}/health`);
  if (!response.ok) {
    throw new Error(`API health check failed with status ${response.status}`);
  }

  return (await response.json()) as { status: string; timestamp: string };
}
