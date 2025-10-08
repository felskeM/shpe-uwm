const base = process.env.NEXT_PUBLIC_API_BASE ?? '';

export async function apiGet(path: string, init?: RequestInit) {
  const url = `${base}${path}`;
  return fetch(url, init);
}
