import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Cor from './cores/cor'

import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './global'

function App() {
  return (
    <ThemeProvider theme={Cor}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
