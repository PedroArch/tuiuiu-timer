import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border - box;
}

:focus {
  outline: ${(props: any) => props.theme['coral-500']};
  background: transparent;
}

body {
  background: ${(props: any) => props.theme['blue-500']};
  color:${(props: any) => props.theme['black']};
  -webkit-font-smoothing: antialiased;
}

body,
  input,
  textarea,
  button {
  font-family: 'Poppins', sans - serif;
  font-weight: 400;
  font-size: 1rem;
}
`