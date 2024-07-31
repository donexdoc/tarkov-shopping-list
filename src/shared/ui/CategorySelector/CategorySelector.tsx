import { Category } from '@mui/icons-material'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FAVORITE_CATEGORIES } from '@/shared/constants'
import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'

import { ICategorySelector } from './CategorySelector.props'

const CategorySelector = ({
  category,
  title,
  changeCategory,
  ...formControlProps
}: ICategorySelector): JSX.Element => {
  const { t } = useTranslation()

  const changeCategoryHandler = (
    event: SelectChangeEvent<IItemFavoriteCategory['id']>
  ) => {
    const newCategoryId = event.target.value as IItemFavoriteCategory['id']
    FAVORITE_CATEGORIES.forEach((category) => {
      if (category.id === newCategoryId) {
        changeCategory(category)
      }
    })
  }

  return (
    <FormControl {...formControlProps}>
      <InputLabel id='language-select-label'>{title}</InputLabel>
      <Select
        labelId='language-select-label'
        id='language-select'
        value={category.id}
        onChange={changeCategoryHandler}
        label={title}
        startAdornment={<Category sx={{ mr: 1, ml: -0.5 }} />}
      >
        {Object.values(FAVORITE_CATEGORIES).map((value) => (
          <MenuItem key={`fav_cat_${value.id}`} value={value.id}>
            {t(value.name)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CategorySelector
