import * as S from './style'
import * as GS from '../../Utils/globalstyles'
import { Textarea } from '../Textarea'
import { Input } from '../Input'


const Contact = () => {
  return (
    <S.Contact>

      <GS.ContainerHeader>
        <GS.ContainerHeaderTitle>
          Contato
        </GS.ContainerHeaderTitle>
        <GS.ContainerHeaderSeparator></GS.ContainerHeaderSeparator>
      </GS.ContainerHeader>

      <S.ContactWrapper>
        <S.ContactHeader>
          <S.ContactTitle>
            Responda ao questionário e agilize o processo
          </S.ContactTitle>
          <S.ContactButton type="button">
            BRIEFING
          </S.ContactButton>
          <S.Span>
            Ou
          </S.Span>
        </S.ContactHeader>

        <S.ContactForm>

          <S.FormGroup><p>Nome</p><Input /></S.FormGroup>
          <S.FormGroup><p>E-mail</p><Input /></S.FormGroup>
          <S.FormGroup><p>Telefone</p><Input /></S.FormGroup>
          <S.FormGroup><p>Whatsapp</p><Input /></S.FormGroup>
          <S.FormGroup className='textarea'><p>O que você precisa?</p><Textarea /></S.FormGroup>

          <S.ContactFormButton>
            ENVIAR
          </S.ContactFormButton>
        </S.ContactForm>
      </S.ContactWrapper>
    </S.Contact>
  )
}

export default Contact