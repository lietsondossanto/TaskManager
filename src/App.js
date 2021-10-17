import React from 'react'

import { ThemeProvider } from 'styled-components'

import Routes from './routes/index'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

import './config/ReactotronConfig'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
