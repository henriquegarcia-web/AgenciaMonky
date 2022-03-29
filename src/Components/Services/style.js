import styled from "styled-components";
import colors from "../../Utils/colors";

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;

  color: ${colors.darkBlue};
  background-color: ${colors.darkBlue};
`

export const ServicesWrapper = styled.div`
  display: flex;
`

// ------------------------------------ SERVICE CARD

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  border-radius: 20px;
  margin-right: 40px;
  padding: 15px;
  cursor: pointer;
  transition: .2s;

  background-color: ${colors.lightGray};

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    transform: scale(1.02);
  }
`

export const ServiceCardBanner = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 180px;
  overflow: clip;
  margin-bottom: 20px;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ServiceCardHeader = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const ServiceCardDescription = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 25px;

  b {
    font-weight: 600;
  }
`

export const ServiceCardCta = styled.button`
  font-size: 16px;
  font-weight: 400;
  padding: 6px 20px;
  margin-top: auto;
  margin-left: auto;
  border-radius: 50px;
  cursor: pointer;
  transition: .2s;

  border: 2px solid ${colors.darkBlue};
  background-color: ${colors.darkBlue};
  color: ${colors.lightGray};

  &:hover {
    border: 2px solid ${colors.darkBlue};
    background-color: transparent;
    color: ${colors.darkBlue};
  }
`