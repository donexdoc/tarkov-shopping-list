import { createSlice } from '@reduxjs/toolkit'
import { Item } from '@/store/types/item'
import { Task } from '@/store/types/task'
import { TaskItem } from '@/store/types/taskItem'
import { Trader } from '@/store/types/trader'

import itemsJson from '@/store/data/ru/items.json'
import tasksJson from '@/store/data/ru/tasks.json'
import tradersJson from '@/store/data/ru/traders.json'
import taskItemsJson from '@/store/data/taskItems.json'

interface IInitialState {
  items: Item[]
  tasks: Task[]
  taskItems: TaskItem[]
  traders: Trader[]
}

const initialState: IInitialState = {
  items: itemsJson as Item[],
  tasks: tasksJson as Task[],
  taskItems: taskItemsJson as TaskItem[],
  traders: tradersJson as Trader[],
}

export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {},
})

export default gameDataSlice.reducer
