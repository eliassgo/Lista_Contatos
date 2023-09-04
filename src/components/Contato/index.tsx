import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao } from '../../styles/styles'

type Props = ContatoClass

const Contato = ({ nome: nomeOriginal, email, numero, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
  }

  return (
    <S.CardContato>
      <label htmlFor={nome}>
        <S.Nome>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Nome>
      </label>
      <label htmlFor={email}>
        <S.Email>
          {estaEditando && <em>Editando: </em>}
          {email}
        </S.Email>
      </label>
      <label htmlFor={numero}>
        <S.Numero>
          {estaEditando && <em>Editando: </em>}
          {numero}
        </S.Numero>
      </label>
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    numero,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          </>
        )}
      </S.BarraAcao>
    </S.CardContato>
  )
}

export default Contato
