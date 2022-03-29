import * as S from './style'
import * as GS from '../../Utils/globalstyles'

import Service01 from '../../Assets/Portfolio/Ref_01.png'
import Service02 from '../../Assets/Portfolio/Ref_02.png'
import Service03 from '../../Assets/Portfolio/Ref_03.png'
import Service04 from '../../Assets/Portfolio/Ref_04.png'
import Service05 from '../../Assets/Portfolio/Ref_05.png'
import Service06 from '../../Assets/Portfolio/Ref_06.png'
import Service07 from '../../Assets/Portfolio/Ref_07.png'
import Service08 from '../../Assets/Portfolio/Ref_08.png'
import Service09 from '../../Assets/Portfolio/Ref_09.png'
import Service10 from '../../Assets/Portfolio/Ref_10.png'
import Service11 from '../../Assets/Portfolio/Ref_11.png'
import Service12 from '../../Assets/Portfolio/Ref_12.png'

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

        <PortfolioCard imageUrl={Service01} />
        <PortfolioCard imageUrl={Service02} />
        <PortfolioCard imageUrl={Service03} />
        <PortfolioCard imageUrl={Service04} />
        <PortfolioCard imageUrl={Service05} />
        <PortfolioCard imageUrl={Service06} />
        <PortfolioCard imageUrl={Service07} />
        <PortfolioCard imageUrl={Service08} />
        <PortfolioCard imageUrl={Service09} />
        <PortfolioCard imageUrl={Service10} />
        <PortfolioCard imageUrl={Service11} />
        <PortfolioCard imageUrl={Service12} />

      </S.PortfolioWrapper>

    </S.Portfolio>
  )
}

export default Portfolio


// ------------------------------ PORTFOLIO CARD

export const PortfolioCard = ({ imageUrl }) => {
  return (
    <S.PortfolioCard>
      <S.PortfolioCardImageContainer>
        <S.PortfolioCardImage src={imageUrl} alt='' />
      </S.PortfolioCardImageContainer>
    </S.PortfolioCard>
  )
}
