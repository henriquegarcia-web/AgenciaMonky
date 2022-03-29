import styled from "styled-components";
import colors from "../../Utils/colors";

export const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 30px;

  color: ${colors.white};
  background-color: ${colors.darkBlue};
`

export const HeaderLogo = styled.img`
  width: 100px;
  cursor: pointer;
  cursor: pointer;
  transition: .2s;

  &:hover {
    transform: scale(1.02);
  }
`

export const HeaderNavbar = styled.div``

export const NavbarUl = styled.ul`
  display: flex;
`

export const NavbarLi = styled.li`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: .2s;
  border-radius: 50px;

  &:hover {
    color: ${colors.darkBlue};
    background-color: ${colors.yellow};
  }
`

export const HeaderBriefing = styled.div``

export const InputBriefing = styled.button`
  border-radius: 50px;
  padding: 6px 18px;
  font-size: 18px;
  font-weight: 500;
  transition: .2s;
  cursor: pointer;

  border: 2px solid ${colors.yellow};
  color: ${colors.darkBlue};
  background-color: ${colors.yellow};

  &:hover {
    border: 2px solid ${colors.yellow};
    background-color: transparent;
    color: ${colors.yellow};
  }
`