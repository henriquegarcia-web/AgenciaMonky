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
  const bannerHeader = type === 'website' ? 'CRIAÇÃO DE APPS' : 'CRIAÇÃO DE SITES'

  return (
    <S.ServiceCard>
      <S.ServiceCardBanner>
        <S.BannerImage src={bannerUrl} alt='' />
      </S.ServiceCardBanner>

      <S.ServiceCardHeader>
        {bannerHeader}
      </S.ServiceCardHeader>

      <S.ServiceCardDescription>
        {type === 'website' ? (
          <>Você precisa de um <b>aplicativo</b>? Um aplicativo que funciona como uma super <b>ferramenta de vendas</b>? Estamos aqui para ajudá-lo!</>
        ) : (
          <>Se você deseja levar sua empresa para o <b>próximo nível</b>, precisa de um site que funcione. A obtenção de um <b>site profissional</b> é a melhor forma de projetar a imagem da marca.</>
        )}
      </S.ServiceCardDescription>

      <S.ServiceCardCta>
        Ver planos
      </S.ServiceCardCta>
    </S.ServiceCard>
  )
}
