import styled from "styled-components";
import colors from "../../Utils/colors";

export const Plans = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  overflow: hidden;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const PlansWrapper = styled.div`
  display: flex;
`

export const PlansBackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
`

// ------------------------------------ PLAN CARD

export const PlansCard = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: fit-content;
  border-radius: 20px;
  margin-right: 40px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: .2s;

  color: ${colors.darkBlue};
  background-color: ${colors.lightGray};

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    transform: scale(1.02);
  }
`

export const PlansCardHeader = styled.div`
  position: absolute;
  top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 160px;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 20px;
  border-radius: 50px;

  border: 2px solid ${colors.white};
  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const PlansCardDescription = styled.div`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 300;

  b {
    font-weight: 600;
  }
`

export const PlansCardPlus = styled.div`
  margin: 15px 0;

  svg {
    font-size: 20px;
  }
`

export const PlansCardServicesIncludes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 30px;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const ServicesIncludesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ServicesIncludesItemIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.white};

  svg {
    color: ${colors.darkBlue};
    font-size: 26px;
  }
`

export const ServicesIncludesItemTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  width: 120px;
`

export const PlansCardPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;

  b {
    font-size: 24px;
    font-weight: 400;
  }
`
