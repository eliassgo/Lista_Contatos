import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container, Cores } from './styles'

import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Cores}>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaDeTarefas />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
// Qual é a função do fragmento no React? : Possibilitar o retorno de mais de uma tag
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev
