export const withBasePath = (p: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${p}`.replace(/\/{2,}/g, '/');
