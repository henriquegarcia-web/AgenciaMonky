import * as S from './style'
import * as GS from '../../Utils/globalstyles'
import * as I from 'react-icons/fi'

import MainBannerImage from '../../Assets/MainBannerImage.jpg'

const Plans = () => {
  return (
    <S.Plans>
      
      <GS.ContainerHeader>
        <GS.ContainerHeaderTitle>
          Planos e Valores
        </GS.ContainerHeaderTitle>
        <GS.ContainerHeaderSeparator></GS.ContainerHeaderSeparator>
      </GS.ContainerHeader> 

      <S.PlansWrapper>

        <PlansCard type='static' />
        <PlansCard type='dinamic' />

      </S.PlansWrapper>

      <S.PlansBackgroundImage src={MainBannerImage} alt='' />

    </S.Plans>
  )
}

export default Plans

// ------------------------------ PLANS CARD

export const PlansCard = ({ type }) => {

  const planHeader = type === 'static' ? 'ESTÁTICO' : 'DINÂMICO'
  const planPrice = type === 'static' ? 'R$ 298,00' : 'R$ 498,00'

  return (
    <S.PlansCard>
      
      <S.PlansCardHeader>{planHeader}</S.PlansCardHeader>

      <S.PlansCardDescription>
        {type === 'static' ? (
          <>O site permanece <b>o mesmo sempre</b></>
        ) : (
          <>Através de um <b>painel de admin</b>, você conseguirá fazer <b>modificações em tempo real</b> no seu site</>
        )}
      </S.PlansCardDescription>

      <S.PlansCardPlus><I.FiPlus /></S.PlansCardPlus>

      <S.PlansCardServicesIncludes>
        
        <S.ServicesIncludesItem>
          <S.ServicesIncludesItemIcon>
            <I.FiDatabase />
          </S.ServicesIncludesItemIcon>
          <S.ServicesIncludesItemTitle>
            Hospedagem
          </S.ServicesIncludesItemTitle>
        </S.ServicesIncludesItem>

        <S.ServicesIncludesItem>
          <S.ServicesIncludesItemIcon>
            <I.FiHeadphones />
          </S.ServicesIncludesItemIcon>
          <S.ServicesIncludesItemTitle>
            Suporte Vitalício
          </S.ServicesIncludesItemTitle>
        </S.ServicesIncludesItem>

      </S.PlansCardServicesIncludes>

      <S.PlansCardPrice>Por apenas <b>{planPrice}</b></S.PlansCardPrice>

    </S.PlansCard>
  )
}
