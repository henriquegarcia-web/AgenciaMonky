import * as S from './style'
import * as GS from '../../Utils/globalstyles'

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

        <PlansCard />
        <PlansCard />

      </S.PlansWrapper>

    </S.Plans>
  )
}

export default Plans

// ------------------------------ PLANS CARD

export const PlansCard = () => {
  return (
    <S.PlansCard>
      
    </S.PlansCard>
  )
}
