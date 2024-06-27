import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APP_TITLE, LANGUAGES, PAGES } from '@/store/constatnts'
import { loadItems } from './itemsData.slice'

const SLICE_NAME = 'app'

interface IInitialState {
  drawerState: boolean
  currentPage: PAGES
  appTitle: string
  language: string
}

const defaultInitialState: IInitialState = {
  drawerState: false,
  currentPage: PAGES.mainList,
  appTitle: APP_TITLE,
  language: LANGUAGES.EN,
}

const loadState = (): IInitialState => {
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

const saveState = (state: IInitialState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(SLICE_NAME, serializedState)
  } catch (e) {
    console.log('Saving state error: ', e)
  }
}

const initialState: IInitialState = loadState()

export const setLanguage = createAsyncThunk(
  'app/setLanguage',
  async (language: LANGUAGES, { dispatch }) => {
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
    setCurrentPage: (state, action: PayloadAction<PAGES>) => {
      state.currentPage = action.payload
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
      (state, action: PayloadAction<LANGUAGES>) => {
        state.language = action.payload
        saveState(state)
      }
    )
  },
})

export const {
  setDrawerState,
  toggleDrawerState,
  setCurrentPage,
  setAppTitle,
} = appSlice.actions
export default appSlice.reducer
