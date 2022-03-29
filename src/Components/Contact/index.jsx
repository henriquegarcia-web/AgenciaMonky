import * as S from './style'
import * as GS from '../../Utils/globalstyles'
import { Textarea } from '../Textarea'
import { Input } from '../Input'

import isEmailValid from '../../Utils/isEmailValid'
import formatPhone from '../../Utils/formatPhone'
import useErrors from '../../hooks/useErrors'

import FormGroup from '../FormGroup'
import { useState } from 'react'



const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName
  } = useErrors()

  const isFormValid = (
    name 
    && email 
    && whatsapp
    && description
    && errors.length === 0
  );

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email inválido.' });
    } else {
      removeError('email');
    }
  }

  function handleWhatsappChange(event) {
    setWhatsapp(formatPhone(event.target.value));

    if (!event.target.value ) {
      setError({ field: 'whatsapp', message: 'Whatsapp inválido.' });
    } else {
      removeError('whatsapp');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)

    if (!event.target.value ) {
      setError({ field: 'description', message: 'Por favor, digite uma mensagem para nós :)' });
    } else {
      removeError('description');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('request sent')
  }

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
            FAZER BRIEFING
          </S.ContactButton>
          <S.Span>
            Ou
          </S.Span>
        </S.ContactHeader>

        <S.ContactForm onSubmit={handleSubmit} noValidate>

          <FormGroup error={getErrorMessageByFieldName('name')}>
            <Input
              error={getErrorMessageByFieldName('name')}
              placeholder="Nome *"
              value={name}
              onChange={handleNameChange}  
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('email')}>
            <Input   
              type="email"    
              error={getErrorMessageByFieldName('email')}
              placeholder='E-mail *'
              value={email}
              onChange={handleEmailChange}  
            />
          </FormGroup>

          <FormGroup>
            <Input 
              placeholder='Telefone' 
              value={phone}
              onChange={handlePhoneChange}
              maxLength="15"  
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('whatsapp')}>
            <Input 
            placeholder='Whatsapp *'
            error={getErrorMessageByFieldName('whatsapp')}
            value={whatsapp}
            onChange={handleWhatsappChange}
            maxLength="15"  
            />
          </FormGroup>

          <FormGroup className='textarea' error={getErrorMessageByFieldName('description')}>
            <Textarea 
              error={getErrorMessageByFieldName('description')}
              value={description}
              onChange={handleDescriptionChange}
              placeholder='O que você precisa? *'
            />
          </FormGroup>

          <S.ContactFormButton type="submit" disabled={!isFormValid}>
            Enviar Mensagem
          </S.ContactFormButton>
        </S.ContactForm>
      </S.ContactWrapper>
    </S.Contact>
  )
}

export default Contact