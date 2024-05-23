import { Item } from './item.js'
import { Task } from './task.js'

export interface TaskItem {
  taskId: Task['id']
  itemId: Item['id']
  count?: number
  foundInRaid?: boolean
}
