import { Task } from './task.js'

export interface Item {
  id: string
  name: string
  shortName: string
  image512pxLink: string
  types: string[]
  usedInTasks: Pick<Task, 'id' | 'objectives'>[]
}
