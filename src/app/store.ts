import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import appReducer from '@/app/model/app.slice'
import itemsDataReducer from '@/entities/itemsData/slice'
import shoppingList from '@/entities/shoppingList/slice'

export const store = configureStore({
  reducer: {
    appReducer,
    itemsDataReducer,
    shoppingList,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
