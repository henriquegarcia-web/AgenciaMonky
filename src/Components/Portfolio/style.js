import styled from "styled-components";
import colors from "../../Utils/colors";

export const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
`

export const PortfolioCard = styled.div`
  width: calc(25% - 20px);
  height: 160px;
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
  transition: .2s;
  padding: 10px;

  background-color: ${colors.lightGray};

  &:hover {
    transform: scale(1.02);
  }
`

export const PortfolioCardImageContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: clip;
  border-radius: 10px;

`

export const PortfolioCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`