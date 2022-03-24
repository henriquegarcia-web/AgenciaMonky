import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";
// import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    list-style: none;
    flex-shrink: 0;
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    z-index: 1000;
    background: ${colors.darkBlue};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.darkBlue};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.yellow};
    border-radius: 10px;
  }
`

export default GlobalStyle

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-bottom: 30px;

  color: ${colors.white};
`

export const ContainerHeaderTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 15px;
`

export const ContainerHeaderSeparator = styled.div`
  width: 60px;
  height: 5px;
  border-radius: 50px;

  background-color: ${colors.white};
`