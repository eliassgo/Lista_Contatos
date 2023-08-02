import styled from 'styled-components'
import { Cores } from '../../styles'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${Cores.backgroundBarraLateral};
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corBackgroundActive};
  color: ${(props) => props.theme.corCampoInput};
  border-color: ${(props) => props.theme.corCampoInput};
`
