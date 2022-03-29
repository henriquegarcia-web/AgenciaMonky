import * as S from './style'
import * as GS from '../../Utils/globalstyles'

import ServiceWebsiteImage from '../../Assets/Service_Website.jpg'
import ServiceAppsImage from '../../Assets/Service_Apps.jpg'

const Services = () => {
  return (
    <S.Services>

      <GS.ContainerHeader>
        <GS.ContainerHeaderTitle>
          Nossos Serviços
        </GS.ContainerHeaderTitle>
        <GS.ContainerHeaderSeparator></GS.ContainerHeaderSeparator>
      </GS.ContainerHeader> 
      
      <S.ServicesWrapper>

        <ServiceCard type='website' />
        <ServiceCard type='app' />
        
      </S.ServicesWrapper>
      
    </S.Services>
  )
}

export default Services

// ------------------------------ SERVICE CARD

export const ServiceCard = ({ type }) => {

  const bannerUrl = type === 'website' ? ServiceWebsiteImage : ServiceAppsImage



  return (
    <S.ServiceCard>
      <S.ServiceCardBanner>
        <S.BannerImage src={bannerUrl} alt='' />
      </S.ServiceCardBanner>

      {/* <S.ServiceCardHeader>

      </S.ServiceCardHeader>

      <S.ServiceCardDescription>

      </S.ServiceCardDescription>

      <S.ServiceCardCta>
        Ver planos
      </S.ServiceCardCta> */}
    </S.ServiceCard>
  )
}
