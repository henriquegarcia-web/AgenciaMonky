import styled, { css } from "styled-components";
import colors from "../Utils/colors";

export const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  resize: none;
  padding: 20px;
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