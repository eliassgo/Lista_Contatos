import styled from 'styled-components'
import { Fonts } from '../../styles'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? props.theme.corActive : props.theme.corBordas)};
  background-color: ${(props) =>
    props.ativo
      ? props.theme.corBackgroundActive
      : props.theme.corBackgroundCard};
  color: ${(props) =>
    props.ativo ? props.theme.corActive : props.theme.corTextoTerciario};
  border-radius: 8px;
`
export const Contador = styled.div`
  font-weight: bold;
  font-size: ${Fonts.textoTerciario};
  display: block;
`
export const Label = styled.div`
  font-size: ${Fonts.textoBotaoSecundario};
`
