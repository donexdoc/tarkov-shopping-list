import { ItemFavoriteCategory } from './types/itemFavoriteCategory'

export const APP_DRAWER_WIDTH = 240
export const APP_DEFAULT_TITLE = 'TSL'
export const APP_TITLE = 'Tarkov Shopping List'

export const enum PAGES {
  mainList = 'mainList',
  about = 'about',
}

export enum LANGUAGES {
  RU = 'ru',
  EN = 'en',
}

export const FAVORITE_CATEGORIES: ItemFavoriteCategory[] = [
  {
    id: 'other',
    name: 'ItemFavorites.Other',
  },
  {
    id: 'tasks',
    name: 'ItemFavorites.Tasks',
  },
  {
    id: 'equipment',
    name: 'ItemFavorites.Equipment',
  },
  {
    id: 'hideout',
    name: 'ItemFavorites.Hideout',
  },
  {
    id: 'barter',
    name: 'ItemFavorites.Barter',
  },
]
