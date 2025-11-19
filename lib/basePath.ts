const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const INTERNAL_PATH = /^\/(?!\/)[A-Za-z0-9._~!$&'()*+,;=:@/-]*$/;

export function withBasePath(path: string): string {
  if (!INTERNAL_PATH.test(path)) {
    throw new Error('Invalid internal path passed to withBasePath()');
  }
  return `${basePath}${path}`;
}
