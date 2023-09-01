import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles/styles'
import Header from './containers/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
// Qual é a função do fragmento no React? : Possibilitar o retorno de mais de uma tag
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev
