export const isDevMode = () => {
  if (import.meta.env.MODE === 'development') {
    return true
  }
  return false
}

export const isProdMode = () => {
  if (import.meta.env.MODE === 'production') {
    return true
  }
  return false
}
