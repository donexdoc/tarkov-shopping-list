import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { isDevMode } from '@/shared/lib/debug/envCheck'
import { TrackItem } from '@/shared/types/trackItem'

const SLICE_NAME = 'shoppingList'

interface IInitialState {
  trackedItems: TrackItem[]
}

const loadState = (): IInitialState => {
  try {
    const serializedState = localStorage.getItem(SLICE_NAME)
    if (serializedState === null) {
      return { trackedItems: [] }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return { trackedItems: [] }
  }
}

const saveState = (state: IInitialState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(SLICE_NAME, serializedState)
  } catch (e) {
    if (isDevMode()) {
      console.log('Saving state error: ', e)
    }
  }
}

const initialState: IInitialState = loadState()

export const shoppingList = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addTrackedItem: (state, action: PayloadAction<TrackItem>) => {
      for (const trackedItem of state.trackedItems) {
        if (trackedItem.item.id === action.payload.item.id) return
      }
      state.trackedItems.push(action.payload)
      localStorage.setItem(SLICE_NAME, JSON.stringify(state))
    },
    removeTrackedItem: (state, action: PayloadAction<string>) => {
      state.trackedItems = state.trackedItems.filter(
        (item) => item.item.id !== action.payload
      )
      saveState(state)
    },
    decreaseItemCount: (state, action: PayloadAction<string>) => {
      const itemIndex = state.trackedItems.findIndex(
        (item) => item.item.id === action.payload
      )
      if (itemIndex !== -1 && state.trackedItems[itemIndex].count > 1) {
        state.trackedItems[itemIndex].count--
      }
      saveState(state)
    },
    increaseItemCount: (state, action: PayloadAction<string>) => {
      const itemIndex = state.trackedItems.findIndex(
        (item) => item.item.id === action.payload
      )
      if (itemIndex !== -1) {
        state.trackedItems[itemIndex].count++
      }
      saveState(state)
    },
    setFoundInRaid: (state, action: PayloadAction<string>) => {
      const itemIndex = state.trackedItems.findIndex(
        (item) => item.item.id === action.payload
      )
      if (itemIndex !== -1) {
        state.trackedItems[itemIndex].foundInRaid = true
        saveState(state)
      }
    },
    unsetFoundInRaid: (state, action: PayloadAction<string>) => {
      const itemIndex = state.trackedItems.findIndex(
        (item) => item.item.id === action.payload
      )
      if (itemIndex !== -1) {
        state.trackedItems[itemIndex].foundInRaid = false
        saveState(state)
      }
    },
  },
})

export const {
  addTrackedItem,
  removeTrackedItem,
  decreaseItemCount,
  increaseItemCount,
  setFoundInRaid,
  unsetFoundInRaid,
} = shoppingList.actions
export default shoppingList.reducer
