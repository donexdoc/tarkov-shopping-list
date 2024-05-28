import { Item } from '@/store/types/item'
import { LANGUAGES } from '@/store/constatnts'

import itemsDataJson from '@/store/data/en/items.json'
import {
  GameDataInitialState,
  createGameDataSlice,
  createLoadElements,
} from './gameData.slice'

const initialState: GameDataInitialState<Item> = {
  elements: itemsDataJson as Item[],
  loading: false,
  error: null,
  language: LANGUAGES.EN,
}

const importItems = async (language: LANGUAGES) => {
  if (language === LANGUAGES.RU) {
    return await import('@/store/data/ru/items.json')
  } else {
    return await import('@/store/data/en/items.json')
  }
}

export const loadItems = createLoadElements<Item>('itemsData', importItems)

export const itemsDataSlice = createGameDataSlice<Item, typeof loadItems>(
  'itemsData',
  loadItems,
  initialState
)

export default itemsDataSlice.reducer
