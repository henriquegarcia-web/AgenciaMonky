import * as S from './style'

import LogoImage from '../../Assets/LogoWhite.png'
import MainBannerImage from '../../Assets/MainBannerImage.jpg'

const MainBanner = () => {
  return (
    <S.MainBanner>
      <S.MainBannerWrapper>
        <S.MainBannerContent>
          <S.ContentText>
            <S.MainBannerHeader>
              A MONKY AJUDA SUA EMPRESA À ENTRAR NA WEB
            </S.MainBannerHeader>
            <S.MainBannerParagraph>
              Somos uma agência de design de sites especializada em criar experiências personalizadas para nossos clientes. Nosso processo começa com a <b>compreensão de você</b>, <b>sua marca</b>, e em seguida, elaboramos <b>ideias que se conectam</b>.
            </S.MainBannerParagraph>

            <S.MainBannerParagraph>
              Entre em contato conosco hoje para saber como podemos ajudar sua empresa a crescer na web.
            </S.MainBannerParagraph>
          </S.ContentText>

          <S.ContentLogo>
            <S.LogoImage src={LogoImage} alt='Agência Monky Logo' />
          </S.ContentLogo>
        </S.MainBannerContent>

      </S.MainBannerWrapper>

      <S.MainBannerBackgroundImage src={MainBannerImage} />
    </S.MainBanner>
  )
}

export default MainBanner