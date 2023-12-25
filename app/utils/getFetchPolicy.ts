/**
 * Get fetch-policy to handle preview mode and SSR request
 */
export const getFetchPolicy = () => {
  return typeof window === 'undefined' ? 'network-only' : 'cache-first';
};
