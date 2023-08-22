import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Cores } from '../../styles'

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${Cores.corBotaoSalvar};
  color: ${Cores.corBackgroundActive};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  cursor: pointer;
  text-decoration: none;
`
