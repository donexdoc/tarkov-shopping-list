import { createSlice } from '@reduxjs/toolkit'
import { Item } from '@/store/types/item'
import { Task } from '@/store/types/task'
import { TaskItem } from '@/store/types/taskItem'
import { Trader } from '@/store/types/trader'

import itemsJson from '@/store/data/ru/items.json'

interface IInitialState {
  items: Item[]
  tasks: Task[]
  taskItems: TaskItem[]
  traders: Trader[]
}

const initialState: IInitialState = {
  items: itemsJson as Item[],
  tasks: [],
  taskItems: [],
  traders: [],
}

export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {},
})

export default gameDataSlice.reducer
