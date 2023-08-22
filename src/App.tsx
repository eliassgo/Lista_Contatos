import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container, Cores } from './styles'

import store from './store'
import Home from './page/Home'
import Cadastro from './page/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Cores}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
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
