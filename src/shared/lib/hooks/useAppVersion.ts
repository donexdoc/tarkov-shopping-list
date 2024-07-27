import { useMemo } from 'react'

declare global {
  const __APP_VERSION__: string
}

export const useAppVersion = (): string => {
  return useMemo(() => {
    if (typeof __APP_VERSION__ !== 'undefined') {
      return __APP_VERSION__
    }
    return 'Unknown'
  }, [])
}
