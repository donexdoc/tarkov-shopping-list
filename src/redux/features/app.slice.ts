import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { APP_TITLE, LANGUAGES, PAGES } from '@/store/constatnts'

interface IInitialState {
  drawerState: boolean
  currentPage: PAGES
  appTitle: string
  language: string
}

const initialState: IInitialState = {
  drawerState: false,
  currentPage: PAGES.mainList,
  appTitle: APP_TITLE,
  language: LANGUAGES.EN,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDrawerState: (state, action: PayloadAction<boolean>) => {
      state.drawerState = action.payload
    },
    toggleDrawerState: (state) => {
      state.drawerState = !state.drawerState
    },
    setCurrentPage: (state, action: PayloadAction<PAGES>) => {
      state.currentPage = action.payload
    },
    setAppTitle: (state, action: PayloadAction<string>) => {
      state.appTitle = action.payload
    },
    setLanguage: (state, action: PayloadAction<LANGUAGES>) => {
      state.language = action.payload
    },
  },
})

export const {
  setDrawerState,
  toggleDrawerState,
  setCurrentPage,
  setAppTitle,
  setLanguage,
} = appSlice.actions
export default appSlice.reducer
