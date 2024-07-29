import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'

export const FAVORITE_CATEGORY_OTHER: IItemFavoriteCategory = {
  id: 'other',
  name: 'ItemFavorites.Other',
}

export const FAVORITE_CATEGORY_TASKS: IItemFavoriteCategory = {
  id: 'tasks',
  name: 'ItemFavorites.Tasks',
}
export const FAVORITE_CATEGORY_EQUIPMENT: IItemFavoriteCategory = {
  id: 'equipment',
  name: 'ItemFavorites.Equipment',
}
export const FAVORITE_CATEGORY_HIDEOUT: IItemFavoriteCategory = {
  id: 'hideout',
  name: 'ItemFavorites.Hideout',
}
export const FAVORITE_CATEGORY_BARTER: IItemFavoriteCategory = {
  id: 'barter',
  name: 'ItemFavorites.Barter',
}

export const FAVORITE_CATEGORY_DEFAULT = FAVORITE_CATEGORY_OTHER

export const FAVORITE_CATEGORIES: IItemFavoriteCategory[] = [
  FAVORITE_CATEGORY_OTHER,
  FAVORITE_CATEGORY_TASKS,
  FAVORITE_CATEGORY_EQUIPMENT,
  FAVORITE_CATEGORY_HIDEOUT,
  FAVORITE_CATEGORY_BARTER,
]
