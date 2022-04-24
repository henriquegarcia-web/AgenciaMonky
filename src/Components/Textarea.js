import styled from "styled-components";
import colors from "../Utils/colors";

export const Textarea = styled.textarea`
  width: 100%;
  height: 220px;
  resize: none;
  padding: 12px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  
  border: 2px solid ${colors.white}; 
  background: rgba(255, 255, 255, 0.3);
  color: ${colors.white};
`