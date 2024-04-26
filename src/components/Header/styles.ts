import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme['blue-500']};
  padding: 0 1rem;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['white']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['yellow-800']};
        color: ${(props) => props.theme['yellow-800']};
      }

      &.active {
        color: ${(props) => props.theme['yellow-800']};
        border-bottom: 3px solid ${(props) => props.theme['yellow-800']};
      }
    }

  }

  img {
    padding: 1rem 0;
    width: 3rem;
  }
`