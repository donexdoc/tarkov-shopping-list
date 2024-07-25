import { Item } from './item.js'
import { ItemFavoriteCategory } from './itemFavoriteCategory.js'
import { Task } from './task.js'

export interface TaskItem {
  taskId: Task['id']
  itemId: Item['id']
  count?: number
  foundInRaid?: boolean
  favoriteCategory?: ItemFavoriteCategory
}
