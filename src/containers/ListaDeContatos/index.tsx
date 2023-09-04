import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Nome } from '../../components/Contato/styles'
import contatos from '../../store/reducers/contatos'
import * as S from './style'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  return (
    <>
      <S.MainContainer>
        <ul></ul>
      </S.MainContainer>
    </>
  )
}

export default ListaDeContatos
