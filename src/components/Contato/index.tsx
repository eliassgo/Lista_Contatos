import * as S from './styles'

export type Props = {
  displayBarra?: string
}

const Contato = (props: Props) => {
  return (
    <S.CardContato>
      <S.Nome>Elias</S.Nome>
      <S.Email>xxxxxxxxxxxxxx@gmail.com</S.Email>
      <S.Numero>xxxxxxxxxxx</S.Numero>
      <S.BarraAcao displayBarra={props.displayBarra}>
        <S.BotaoCancelar>Cancelar</S.BotaoCancelar>
        <S.BotaoRemover>Remover</S.BotaoRemover>
        <S.BotaoSalvar>Salvar</S.BotaoSalvar>
      </S.BarraAcao>
    </S.CardContato>
  )
}

export default Contato
