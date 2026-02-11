const rawApiUrl = (import.meta.env.VITE_API_URL || '').trim();

const withoutTrailingSlashes = rawApiUrl.replace(/\/+$/, '');

export const API_BASE_URL = withoutTrailingSlashes.endsWith('/api')
  ? withoutTrailingSlashes.slice(0, -4)
  : withoutTrailingSlashes;
