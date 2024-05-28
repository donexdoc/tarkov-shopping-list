import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Item } from '@/store/types/item'
import { LANGUAGES } from '@/store/constatnts'

import itemsDataJson from '@/store/data/en/items.json'

interface IInitialState {
  items: Item[]
  loading: boolean
  error: string | null
  language: LANGUAGES
}

const initialState: IInitialState = {
  items: itemsDataJson as Item[],
  loading: false,
  error: null,
  language: LANGUAGES.EN,
}

export const loadItems = createAsyncThunk(
  'gameData/loadItems',
  async (language: LANGUAGES) => {
    let itemsJson
    if (language === LANGUAGES.RU) {
      itemsJson = await import('@/store/data/ru/items.json')
    } else {
      itemsJson = await import('@/store/data/en/items.json')
    }
    return itemsJson.default as Item[]
  }
)

export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadItems.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(
      loadItems.fulfilled,
      (state, action: PayloadAction<Item[]>) => {
        state.items = action.payload
        state.loading = false
      }
    )
    builder.addCase(loadItems.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to load items'
    })
  },
})

export default gameDataSlice.reducer
