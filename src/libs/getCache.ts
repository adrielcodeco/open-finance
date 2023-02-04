import createCache from '@emotion/cache'

export function getCache() {
  const cache = createCache({ key: 'css' })
  cache.compat = true
  return cache
}
