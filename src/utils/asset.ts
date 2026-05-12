const base = (import.meta as unknown as { env: { BASE_URL: string } }).env.BASE_URL

export const asset = (path: string) =>
  `${base}${path.replace(/^\//, '')}`
