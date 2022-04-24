import styled, { css } from "styled-components";
import colors from "../Utils/colors";

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 300;

  border: 2px solid ${colors.white}; 
  background: rgba(255, 255, 255, 0.3);
  color: ${colors.white};
`