const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path: string): string {
  // Root-relative internal paths
  if (!path.startsWith('/')) {
    throw new Error('withBasePath expects a root-relative path');
  }

  // Block absolute URLs
  if (path.includes('://') || path.toLowerCase().startsWith('javascript:')) {
    throw new Error('withBasePath must not be used with external URLs');
  }

  return `${basePath}${path}`;
}
