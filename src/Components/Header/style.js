import styled from "styled-components";
import colors from "../../Utils/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 30px;

  color: ${colors.white};
  background-color: ${colors.darkBlue};
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
  padding: 8px 18px;
  font-size: 18px;
  font-weight: 500;
  transition: .2s;
  cursor: pointer;

  color: ${colors.darkBlue};
  background-color: ${colors.yellow};
`