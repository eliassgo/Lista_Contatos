import styled from 'styled-components'
import { Botao } from '../../styles/styles'

export const CardContato = styled.div`
  margin: 10px 0;
  border-top: solid 2px #ccc;
  color: #ccc;
  padding: 10px 0;
`
export const Nome = styled.h3``
export const Email = styled.h4`
  opacity: 70%;
`
export const Numero = styled.h3``

export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: block;
`
export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`
export const BotaoRemover = styled(Botao)`
  background-color: #c23616;
`
export const BotaoCancelar = styled(Botao)`
  background-color: #1e90ff;
`
