import { FormControlProps } from '@mui/material'

import { IItemFavoriteCategory } from '@/shared/types/itemFavoriteCategory'

export interface ICategorySelector extends FormControlProps {
  category: IItemFavoriteCategory
  title?: string
  changeCategory: (category: IItemFavoriteCategory) => void
}
