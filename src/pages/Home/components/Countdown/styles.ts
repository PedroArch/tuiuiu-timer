import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['coral-500']};
  display: flex;
  gap: 1rem;
  span {
    background: ${(props) => props.theme['blue-800']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['yellow-800']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`