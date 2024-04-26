import { Play } from 'phosphor-react'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { HomeContainer, StartCountdownButton } from './styles'



export function Home() {
  return (
    <HomeContainer>
      <form>
        <NewCycleForm />
        <Countdown />
        <StartCountdownButton>
          <Play size={30}/>
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}