import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { AppDispatch, useAppSelector } from '@/app/store'
import { setDefaultFavoriteCategory } from '@/entities/trackerSettings/slice'
import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'
import CategorySelector from '@/shared/ui/CategorySelector/CategorySelector'

const DefaultCategorySelector = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslation()

  const defaultFavoriteCategory = useAppSelector(
    (store) => store.trackerSettingsReducer.defaultFavoriteCategory
  )

  const changeCategory = (category: IItemFavoriteCategory) => {
    dispatch(setDefaultFavoriteCategory(category))
  }

  return (
    <CategorySelector
      title={t('Settings.defaultItemCategory')}
      category={defaultFavoriteCategory}
      changeCategory={changeCategory}
      fullWidth
      disabled
    />
  )
}

export default DefaultCategorySelector
