import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles/styles'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import CampoPesquisar from './components/CampoPesquisar'
import BotaoAdicionar from './components/BotaoAdicionar'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: '/'
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <CampoPesquisar />
        <ListaDeContatos />
        <BotaoAdicionar />
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
