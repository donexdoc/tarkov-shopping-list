import {
  Draft,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { LANGUAGES } from '@/store/constatnts'

export interface GameDataInitialState<T> {
  elements: T[]
  loading: boolean
  error: string | null
  language: LANGUAGES
}

export const createLoadElements = <T>(
  name: string,
  importFunciton: (language: LANGUAGES) => Promise<{ default: T[] }>
) => {
  return createAsyncThunk(`${name}/gameData`, async (language: LANGUAGES) => {
    const elementsJson = await importFunciton(language)
    return elementsJson.default as T[]
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
