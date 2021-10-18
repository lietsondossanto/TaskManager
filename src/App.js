import React from 'react'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './routes/Routes'
import history from './services/history'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

// import './config/ReactotronConfig'

function App() {
  return (
    <>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
