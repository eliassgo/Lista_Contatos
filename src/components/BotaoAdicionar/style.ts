import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Botao = styled(Link)`
  background-color: #121d2b;
  color: #fff;
  padding: 10px;
  border: solid 2px #ccc;
  border-radius: 8px;
  color: var(--Primary, #b554d7);
  /* Normal */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
`
