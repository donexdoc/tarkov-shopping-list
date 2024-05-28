import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import appReducer from './features/app.slice'
import itemsDataReducer from './features/itemsData.slice'

export const store = configureStore({
  reducer: {
    appReducer,
    itemsDataReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
