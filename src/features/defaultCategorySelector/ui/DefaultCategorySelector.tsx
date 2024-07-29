import { Category } from '@mui/icons-material'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { AppDispatch, useAppSelector } from '@/app/store'
import { setDefaultFavoriteCategory } from '@/entities/trackerSettings/slice'
import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'

import { FAVORITE_CATEGORIES } from '../model/constants'

const DefaultCategorySelector = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const defaultFavoriteCategory = useAppSelector(
    (store) => store.trackerSettingsReducer.defaultFavoriteCategory
  )

  const { t } = useTranslation()

  const changeCategory = (
    event: SelectChangeEvent<IItemFavoriteCategory['id']>
  ) => {
    const newCategoryId = event.target.value as IItemFavoriteCategory['id']
    FAVORITE_CATEGORIES.forEach((category) => {
      if (category.id === newCategoryId) {
        dispatch(setDefaultFavoriteCategory(category))
      }
    })
  }

  return (
    <Box sx={{ p: 1, mt: 1, width: '100%' }}>
      <FormControl fullWidth disabled>
        <InputLabel id='language-select-label'>
          {t('Settings.defaultItemCategory')}
        </InputLabel>
        <Select
          labelId='language-select-label'
          id='language-select'
          value={defaultFavoriteCategory.id}
          onChange={changeCategory}
          label={t('Settings.defaultItemCategory')}
          startAdornment={<Category sx={{ mr: 1, ml: -0.5 }} />}
        >
          {Object.values(FAVORITE_CATEGORIES).map((value) => (
            <MenuItem key={`fav_cat_${value.id}`} value={value.id}>
              {t(value.name)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default DefaultCategorySelector
