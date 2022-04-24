import styled from "styled-components";
import colors from "../../Utils/colors";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;

  color: ${colors.white};
  background: ${colors.blue};

  b {
    margin-right: 8px;
  }
`