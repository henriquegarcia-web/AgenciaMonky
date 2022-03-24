import * as S from './style'
import * as GS from '../../Utils/globalstyles'

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

        <ServicesCard />
        <ServicesCard />
        
      </S.ServicesWrapper>
      
    </S.Services>
  )
}

export default Services

// ------------------------------ SERVICE CARD

export const ServicesCard = () => {
  return (
    <S.ServicesCard>
      
    </S.ServicesCard>
  )
}
