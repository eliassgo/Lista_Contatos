import styled, { createGlobalStyle } from 'styled-components'

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
  textoTerciario: '24px',
  textoSecundario: '14px',
  textoPrincipal: '18px',
  textoBotaoPrimario: '12px',
  textoBotaoSecundario: '10px'
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
