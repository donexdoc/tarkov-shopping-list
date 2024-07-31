import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit'

import { Language } from '@/shared/types/language'

export interface GameDataInitialState<T> {
  elements: T[]
  loading: boolean
  error: string | null
}

export const createLoadElements = <T>(
  name: string,
  importFunciton: (language: Language) => Promise<T[]>
) => {
  return createAsyncThunk(`${name}/gameData`, async (language: Language) => {
    const elementsJson = await importFunciton(language)
    return elementsJson
  })
}

export const createGameDataSlice = <
  T,
  ThunkT extends ReturnType<typeof createLoadElements<T>>
>(
  name: string,
  loadElementsThunk: ThunkT,
  initialState: GameDataInitialState<T>
) => {
  return createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loadElementsThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      builder.addCase(
        loadElementsThunk.fulfilled,
        (state, action: PayloadAction<T[]>) => {
          state.elements = action.payload as Draft<T[]>
          state.loading = false
        }
      )
      builder.addCase(loadElementsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to load elements'
      })
    },
  })
}
