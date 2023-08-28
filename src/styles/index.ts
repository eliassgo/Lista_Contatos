import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Tarefa/styles'

export const Cores = {
  corBordas: '#A1A1A1',
  corActive: '#1E90FF',
  corBackgroundActive: '#fff',
  corBackgroundCard: '#FCFCFC',
  corTextoTerciario: '#5E5E5E',
  amareloEscuro: '#E1A32A',
  amarelo: '#F0C11A',
  corBotaoEditar: '#2F3640',
  vermelho: '#C23616',
  corBotaoSalvar: '#44BD32',
  corTextoSecundario: '#8B8B8B',
  corTextoPrincipal: '#000000',
  backgroundBotaoVoltar: '#2F3640',
  backgroundBarraLateral: '#EEE',
  corCampoInput: '#666666',
  corTextarea: '#8B8B8B'
}

export type Theme = {
  corBordas: string
  corActive: string
  corBackgroundCard: string
  corBackgroundActive: string
  corTextoTerciario: string
  amareloEscuro: string
  amarelo: string
  corBotaoEditar: string
  vermelho: string
  corBotaoSalvar: string
  corTextoSecundario: string
  corTextoPrincipal: string
  backgroundBotaoVoltar: string
  backgroundBarraLateral: string
  corCampoInput: string
  corTextarea: string
}

export const Fonts = {
  textoTerciario: '1.5rem',
  textoSecundario: '0.875rem',
  textoPrincipal: '1.125rem',
  textoBotaoPrimario: '0.75rem',
  textoBotaoSecundario: '0.625rem'
}

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 1.125rem;
  font-weight: bold;
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

export const BotaoSalvar = styled(Botao)`
  background-color: ${(props) => props.theme.corBotaoSalvar};
`
