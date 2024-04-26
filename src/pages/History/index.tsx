import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Duração</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
                <tr key='0'>
                  <td>Correr pela Orla</td>
                  <td>20 minutos</td>
                  <td>
                    Há cerca de 2 horas atrás
                  </td>
                  <td>
                    <Status statusColor="green">Concluído</Status>
                  </td>
                </tr>
            <tr key='1'>
              <td>Curso de Google Analitycs</td>
              <td>3 horas</td>
              <td>
                Há cerca de 1 dia atrás
              </td>
              <td>
                  <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr key='2'>
              <td>Comprar uma bigorna</td>
              <td>10 minutos</td>
              <td>
                Há 1 semana atrás
              </td>
              dad<td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}