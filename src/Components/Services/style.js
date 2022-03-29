import styled from "styled-components";
import colors from "../../Utils/colors";

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const ServicesWrapper = styled.div`
  display: flex;
`

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  margin-right: 40px;
  padding: 10px;

  background-color: ${colors.lightGray};

  &:last-of-type {
    margin: 0;
  }
`

export const ServiceCardBanner = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 180px;
  overflow: clip;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`