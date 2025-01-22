import { useState } from 'react'
import { ThemeProvider } from 'styled-components' //serve para importar temas para o site

import './App.css'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre/Sobre.index'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemadark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemadark)
  }

  return (
    //precisa desse theme para selecionar qual tema irá ser inserido
    <ThemeProvider theme={estaUsandoTemadark ? temaDark : temaLight}> 
    <EstiloGlobal />

    <Container>
      
    <Sidebar trocaTema={trocaTema} />
    <main>
      <Sobre />
      <Projetos />
    </main>

      </Container>
    </ThemeProvider>
    
  )
}

export default App
