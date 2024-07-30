import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loadItems } from '@/entities/itemsData/slice'
import { APP_TITLE, LANGUAGE_EN } from '@/shared/config/constatnts'
import { isDevMode } from '@/shared/lib/debug/envCheck'
import { ILanguage } from '@/shared/types/language'

import { RootState } from '../store'
import { IAppInitialState } from './types'

export const SLICE_NAME = 'app'

const defaultInitialState: IAppInitialState = {
  drawerState: false,
  appTitle: APP_TITLE,
  language: LANGUAGE_EN,
}

const loadState = (): IAppInitialState => {
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

const saveState = (state: IAppInitialState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(SLICE_NAME, serializedState)
  } catch (e) {
    if (isDevMode()) {
      console.log('Saving state error: ', e)
    }
  }
}

const initialState: IAppInitialState = loadState()

export const initializeApp = createAsyncThunk(
  'app/initialize',
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState
    await dispatch(loadItems(state.appReducer.language as ILanguage))
  }
)

export const setLanguage = createAsyncThunk(
  'app/setLanguage',
  async (language: ILanguage, { dispatch }) => {
    await dispatch(loadItems(language))
    return language
  }
)

export const appSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setDrawerState: (state, action: PayloadAction<boolean>) => {
      state.drawerState = action.payload
      saveState(state)
    },
    toggleDrawerState: (state) => {
      state.drawerState = !state.drawerState
      saveState(state)
    },

    setAppTitle: (state, action: PayloadAction<string>) => {
      state.appTitle = action.payload
      saveState(state)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setLanguage.fulfilled,
      (state, action: PayloadAction<ILanguage>) => {
        state.language = action.payload
        saveState(state)
      }
    )
  },
})

export const { setDrawerState, toggleDrawerState, setAppTitle } =
  appSlice.actions
export default appSlice.reducer
