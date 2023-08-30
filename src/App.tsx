import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles/styles'

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
