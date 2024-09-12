import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Cor from './cores/cor'

import { ThemeProvider } from 'styled-components'

import EstiloGlobal from './global'

function App() {
  return (
    <ThemeProvider theme={Cor}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
