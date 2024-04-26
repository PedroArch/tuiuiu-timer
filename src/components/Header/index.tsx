import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import tuiuiuBaby from '../../assets/tuiuiu-baby.png'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={tuiuiuBaby} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={30} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}