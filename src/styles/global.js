import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Asap, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, Arial, Helvetica,'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    text-align: justify;
    text-justify: inter-word;
  }
`
