import styled from "styled-components";
import colors from "../../Utils/colors";

export const MainBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 420px;
  overflow: clip;

  color: ${colors.lightGray};
  background-color: ${colors.darkBlue};
`

export const MainBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 420px;
`

export const MainBannerContent = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px;
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`

export const MainBannerHeader = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: 1px;
`

export const MainBannerParagraph = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 1px;

  b {
    font-weight: 800;
  }
`

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`

export const LogoImage = styled.img`
  max-width: 300px;
`

export const MainBannerBackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
`