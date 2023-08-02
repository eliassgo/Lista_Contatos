import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container, Cores } from './styles'

import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
function App() {
  return (
    <ThemeProvider theme={Cores}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </ThemeProvider>
  )
}

export default App
// Qual é a função do fragmento no React? : Possibilitar o retorno de mais de uma tag
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev
