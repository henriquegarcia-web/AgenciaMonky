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

          <S.FormGroup>
            <Input
              placeholder='Nome'     
            />
          </S.FormGroup>

          <S.FormGroup>
            <Input       
              placeholder='E-mail'   
            />
          </S.FormGroup>

          <S.FormGroup>
            <Input 
              placeholder='Telefone'   
            />
          </S.FormGroup>

          <S.FormGroup>
            <Input 
            placeholder='Whatsapp'
            />
          </S.FormGroup>

          <S.FormGroup className='textarea'>
            <Textarea 
              placeholder='O que você precisa?'
            />
          </S.FormGroup>

          <S.ContactFormButton>
            Enviar Mensagem
          </S.ContactFormButton>
        </S.ContactForm>
      </S.ContactWrapper>
    </S.Contact>
  )
}

export default Contact