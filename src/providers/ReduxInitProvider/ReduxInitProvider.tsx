import { ReduxInitProviderProps } from './ReduxInitProvider.props'
import { useEffect } from 'react'
import { initializeApp } from '@/redux/features/app.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

export const ReduxInitProvider = ({ children }: ReduxInitProviderProps) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  return <>{children}</>
}
