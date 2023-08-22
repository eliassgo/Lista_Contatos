import styled from 'styled-components'
import { Fonts, Cores } from '../../styles'
import * as enums from '../../utils/enums/Tarefas'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return Cores.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return Cores.amareloEscuro
  } else {
    if (props.status === enums.Status.PENDENTE) return Cores.amarelo
    if (props.status === enums.Status.CONCLUIDA) return Cores.corBotaoSalvar
  }
  return Cores.corTextoSecundario
}
export const Card = styled.div`
  background-color: ${(props) => props.theme.corBackgroundCard};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  margin-top: 40px;
  border-radius: 0px 0px 16px 16px;
`

export const Titulo = styled.h3`
  font-size: ${Fonts.textoPrincipal};
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${(props) => props.theme.corTextarea};
  font-family: 'Roboto Mono', monospace;
  font-size: ${Fonts.textoSecundario};
  font-weight: 400;
  line-height: 24px;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: ${Fonts.textoBotaoPrimario};
  font-weight: bold;
  color: ${(props) => props.theme.corBackgroundActive};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.corBotaoEditar};
  margin-right: 8px;
  border-radius: 8px;
`
export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${(props) => props.theme.vermelho};
`
