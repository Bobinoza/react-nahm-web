import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`



export const FormContent = styled.div`
  height: 100%;
  display: flex;
  margin-top: 140px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 90px;
  }
`

export const Formm = styled.form`
  background: #222;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto 70px auto;
  padding: 80px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  padding: 0 60px;
  text-align: center;
  color: #fff;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 28px;
    line-height: 1.2;
  }
`

export const FormP = styled.p`
  color: #fff;
  margin-bottom: 40px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    line-height: 1.3;
  }
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 10px;
  

  &:focus {
    outline: none;
    border-bottom: 3px solid rgba(128, 0, 255, 9);

  }
`

export const FormInputText = styled.textarea`
padding: 16px 16px;
margin-bottom: 32px;
border-radius: 10px;

&:focus {
  outline: none;
  border-bottom: 3px solid rgba(128, 0, 255, 9);
}
`




export const FormButton = styled.button`
  border-radius: 10px;
  background: #665df5;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &: hover {
    transition: all 0.2s ease-in-out;
    background: #F9F9F9;
    color: #222;
  }
`


// background: linear-gradient(
//  148deg,
//  rgba(128, 0, 255, 1) 100%,
//  rgba(211, 151, 250, 100) 100%
//);