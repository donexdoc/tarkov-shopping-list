import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeApp } from '@/app/model/app.slice'
import { AppDispatch } from '@/app/store'

import { ReduxInitProviderProps } from './ReduxInitProvider.props'

export const ReduxInitProvider = ({ children }: ReduxInitProviderProps) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  return <>{children}</>
}
