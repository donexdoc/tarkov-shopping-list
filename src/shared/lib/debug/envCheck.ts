export const isDevMode = () => {
  if (import.meta.env.NODE_ENV === 'development') {
    return true
  }
  return false
}

export const isProdMode = () => {
  if (import.meta.env.NODE_ENV === 'production') {
    return true
  }
  return false
}
