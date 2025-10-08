export const withBasePath = (path: string) => {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  // avoid double slashes
  return `${bp}${path}`.replace(/\/{2,}/g, '/');
};
