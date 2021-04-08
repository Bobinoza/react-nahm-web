import React from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Formm,
  FormH1,
  FormP,
  FormLabel,
  FormInput,
  FormInputText,
  FormButton,
} from './FormElements';

const Form = () => {
  return (
    <>
      <Container>
        <FormWrap>
          
          <FormContent>
            <Formm action="#">
              <FormH1>Falta pouco para você se tornar uma Housewives</FormH1>
              <FormP>
                Após efetuar sua inscrição, podemos levar até 7 dias para aprovar seu cadastro.<br/>
              </FormP>
              <FormLabel>Nome completo*</FormLabel>
              <FormInput type="text" required />

              <FormLabel>Email*</FormLabel>
              <FormInput type="email" placeholder="fulano@gmail.com" required />

              <FormLabel>WhatsApp*</FormLabel>
              <FormInput type="tel" placeholder="(51) 9928-6792" required></FormInput>

              <FormLabel>CPF</FormLabel>
              <FormInput type="text" required></FormInput>

              <FormLabel>Bairro que reside</FormLabel>
              <FormInput type="text" required></FormInput>

              <FormLabel>Foto de perfil*</FormLabel>
              <FormInput type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" required style={{color: '#fff', fontWeight: '500', fontSize: '14px'}}></FormInput>

              <FormLabel>Valor médio da limpeza*</FormLabel>
              <FormInput type="" required placeholder="Ex: 1D: R$70 2D: R$80 3D: 90 4D: R$99 (D=dormitório)" ></FormInput>

              <FormLabel>Realiza limpeza em eventos?*</FormLabel>
              <FormInput type="text" required></FormInput>
              
              <FormLabel>Realiza limpeza em prédios/condomínios?*</FormLabel>
              <FormInput type="text" required></FormInput>

              <FormLabel>Sobre você*</FormLabel>
              <FormInputText rows="10" placeholder="Conte de forma breve suas experiências na área e um pouco sobre você."></FormInputText>

        
              <FormButton type="submit">Enviar</FormButton>
            </Formm>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default Form;