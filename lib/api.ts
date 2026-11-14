export function getApiBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_API_URL || process.env.API_BASE_URL || '').replace(/\/+$/, '');
}

async function requestJson<T>(url: string, init?: RequestInit): Promise<T | null> {
  try {
    const response = await fetch(url, init);
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export const api = {
  get<T>(path: string): Promise<T | null> {
    const baseUrl = getApiBaseUrl();
    if (!baseUrl) return Promise.resolve(null);
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return requestJson<T>(`${baseUrl}${normalizedPath}`);
  },

  async post(path: string, body: unknown): Promise<boolean> {
    const endpoint = path.startsWith('/api/') ? path : `/api${path.startsWith('/') ? path : `/${path}`}`;
    const response = await requestJson<unknown>(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return response !== null;
  },
};
