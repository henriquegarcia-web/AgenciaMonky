import * as S from './style'
import * as GS from '../../Utils/globalstyles'

const Portfolio = () => {
  return (
    <S.Portfolio>
      <GS.ContainerHeader>
        <GS.ContainerHeaderTitle>
          Portfolio
        </GS.ContainerHeaderTitle>
        <GS.ContainerHeaderSeparator></GS.ContainerHeaderSeparator>
      </GS.ContainerHeader>

      <S.PortfolioWrapper>

        <PortfolioCard />
        <PortfolioCard />

      </S.PortfolioWrapper>

    </S.Portfolio>
  )
}

export default Portfolio


// ------------------------------ PORTFOLIO CARD

export const PortfolioCard = () => {
  return (
    <S.PortfolioCard>
      
    </S.PortfolioCard>
  )
}
