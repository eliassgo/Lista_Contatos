import { createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
}

const initialState: FiltroState = {
  termo: ''
}
const filtro = createSlice({
  name: 'filtro',
  initialState,
  reducers: {}
})
export default filtro.reducer
