import { Item } from '@/shared/types/item'
import { Language } from '@/shared/types/language'

import {
  createGameDataSlice,
  createLoadElements,
  GameDataInitialState,
} from '../gameData/slice'

const SLICE_NAME = 'itemsData'
const initialState: GameDataInitialState<Item> = {
  elements: [] as Item[],
  loading: false,
  error: null,
}

const importItems = async (language: Language) => {
  const response = await fetch(`/gameData/${language.code}/items.json`)
  return response.json()
}

export const loadItems = createLoadElements<Item>(SLICE_NAME, importItems)

export const itemsDataSlice = createGameDataSlice<Item, typeof loadItems>(
  SLICE_NAME,
  loadItems,
  initialState
)

export default itemsDataSlice.reducer
