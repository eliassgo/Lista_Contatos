import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/terefas'
import filtroReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
