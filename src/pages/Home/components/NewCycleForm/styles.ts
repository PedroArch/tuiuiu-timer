import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  font-family: 'Popins', sans-serif;
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['blue-800']};
  height: 2.5rem;
  border-radius: 8px;
  border: 0;
  border: 2px solid ${(props) => props.theme['blue-800']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['white']};
  &:focus {
    box-shadow: none;
    border: 2px solid ${(props) => props.theme['yellow-800']}
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.75rem;
    text-align: center;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 2rem;
`