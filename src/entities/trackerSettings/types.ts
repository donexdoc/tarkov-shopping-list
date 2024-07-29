import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'

export default interface ITrackerSettingsState {
  autoFoundInRaid: boolean
  defaultFavoriteCategory: IItemFavoriteCategory
}
