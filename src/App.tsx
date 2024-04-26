import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>

  )
}

export default App
