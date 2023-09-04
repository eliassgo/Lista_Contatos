import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Elias',
      email: 'elias@gmail.com',
      numero: '98984532123',
      id: 1
    },
    {
      nome: 'Elias',
      email: 'elias@gmail.com',
      numero: '98984532123',

      id: 2
    },
    {
      nome: 'Elias',
      email: 'elias@gmail.com',
      numero: '98984532123',

      id: 3
    },
    {
      nome: 'Elias',
      email: 'elias@gmail.com',
      numero: '98984532123',

      id: 4
    },
    {
      nome: 'Elias',
      email: 'elias@gmail.com',
      numero: '98984532123',

      id: 5
    },
    {
      nome: 'Elias',
      email: 'elias@gmail.com',
      numero: '98984532123',

      id: 6
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.numero === action.payload.nome
      )
      if (contatoJaExiste) {
        alert('Este contato já existe na sua lista de contatos')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
