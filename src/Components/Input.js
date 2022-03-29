import styled, { css } from "styled-components";
import colors from "../Utils/colors";

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${colors.white};
  background: transparent;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 300;

  ${({ theme, error }) => error && css`
    color: ${colors.danger.main};
    border-color: ${colors.danger.main} !important;
  `}
`