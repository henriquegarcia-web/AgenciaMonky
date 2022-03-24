import * as S from './style'

const Header = () => {
  return (
    <S.Header>
      <HeaderNavbar />

      <S.HeaderBriefing>
        <S.InputBriefing>
          BRIEFING
        </S.InputBriefing>
      </S.HeaderBriefing>
    </S.Header>
  )
}

export default Header

// --------------------------- NAVBAR

export const HeaderNavbar = () => {
  return (
    <S.HeaderNavbar>
      <S.NavbarUl>
        <S.NavbarLi>
          Serviços
        </S.NavbarLi>
        <S.NavbarLi>
          Planos
        </S.NavbarLi>
        <S.NavbarLi>
          Contato
        </S.NavbarLi>
      </S.NavbarUl>
    </S.HeaderNavbar>
  )
}
