import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  margin: 0rem auto;
  padding: 5rem 9rem;

  background: ${(props) => props.theme['blue-800']};

  display: flex;
  flex-direction: column;
`