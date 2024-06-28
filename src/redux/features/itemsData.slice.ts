import { Item } from '@/store/types/item'
import { LANGUAGES } from '@/store/constatnts'

import {
  GameDataInitialState,
  createGameDataSlice,
  createLoadElements,
} from './gameData.slice'

const SLICE_NAME = 'itemsData'
const initialState: GameDataInitialState<Item> = {
  elements: [] as Item[],
  loading: false,
  error: null,
}

const importItems = async (language: LANGUAGES) => {
  const response = await fetch(`/gameData/${language}/items.json`)
  return response.json()
}

export const loadItems = createLoadElements<Item>(SLICE_NAME, importItems)

export const itemsDataSlice = createGameDataSlice<Item, typeof loadItems>(
  SLICE_NAME,
  loadItems,
  initialState
)

export default itemsDataSlice.reducer
