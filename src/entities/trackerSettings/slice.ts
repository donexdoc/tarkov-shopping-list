import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FAVORITE_CATEGORY_DEFAULT } from '@/shared/constants'
import { isDevMode } from '@/shared/lib/debug/envCheck'
import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'

import ITrackerSettingsState from './types'

export const SLICE_NAME = 'trackerSettings'

const defaultInitialState: ITrackerSettingsState = {
  autoFoundInRaid: true,
  defaultFavoriteCategory: FAVORITE_CATEGORY_DEFAULT,
}

const loadState = (): ITrackerSettingsState => {
  try {
    const serializedState = localStorage.getItem(SLICE_NAME)
    if (serializedState === null) {
      return defaultInitialState
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return defaultInitialState
  }
}

const saveState = (state: ITrackerSettingsState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(SLICE_NAME, serializedState)
  } catch (e) {
    if (isDevMode()) {
      console.log('Saving state error: ', e)
    }
  }
}

const initialState: ITrackerSettingsState = loadState()

export const trackerSettingsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setAutoFoundInRaid: (state, action: PayloadAction<boolean>) => {
      state.autoFoundInRaid = action.payload
      saveState(state)
    },
    setDefaultFavoriteCategory: (
      state,
      action: PayloadAction<IItemFavoriteCategory>
    ) => {
      state.defaultFavoriteCategory = action.payload
      saveState(state)
    },
  },
})

export const { setAutoFoundInRaid, setDefaultFavoriteCategory } =
  trackerSettingsSlice.actions
export default trackerSettingsSlice.reducer
