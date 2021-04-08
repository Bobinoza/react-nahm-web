import styled from 'styled-components';

export const Container  = styled.div`
  background: #ECEDF2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HowWrapper1 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 28px;
  padding: 0 50px; 

  @media screen and (max-width: 768px) {
    grid-gap: 10px;
    padding: 0 0;
    grid-template-columns: 1fr;
  }
`

export const HowWrapper2 = styled.div`
  max-width: 1000px;
  margin: 18px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 28px;
  padding: 10px 50px; 
`

export const HowWrapper3 = styled.div`
  max-width: 1000px;
  margin: 0 auto 68px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 28px;
  padding: 0 50px; 
`

export const HowCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 13px 13px 10px 1px rgba(0,0,0,0.10);
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`
/* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */

export const HowIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const HowH1 = styled.h1`
  font-weight: 600;
  font-size: 2.1rem;
  color: #222;
  
  margin-top: 98px;
  margin-bottom: 18px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 22px;
  }
`

export const HowH2 = styled.h2`
  color: #222;
  font-size: 1rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    
  }
  
`

export const HowP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const HowTitleP = styled.p`
  font-wight: 300;
  font-size: 1.2rem;
  text-align: center;

  margin-bottom: 58px;

  color: #665df5;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom 18px;
  }
`
export const HowBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;
`


