import { ItemFavoriteCategory } from '../types/itemFavoriteCategory'
import { ILanguage } from '../types/language'

export const APP_DRAWER_WIDTH = 240
export const APP_DEFAULT_TITLE = 'TSL'
export const APP_TITLE = 'Tarkov Shopping List'

export const enum PAGES {
  mainList = 'mainList',
  about = 'about',
}

export const LANGUAGE_EN: ILanguage = {
  title: 'English',
  code: 'en',
}

export const LANGUAGE_RU: ILanguage = {
  title: 'Русский',
  code: 'ru',
}

export const LANGUAGES: ILanguage[] = [LANGUAGE_EN, LANGUAGE_RU]

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
