import styled from 'styled-components';
//height: 800px;
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

//
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  height: 310px; 
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-weight: 500 bold;
  font-size: 2.1rem;
  color: #222;
  margin-bottom: 5px;
  margin-top: 26px;

  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    
  }
`

export const ServicesH2 = styled.h2`
  color: #222;
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`

export const ServicesTitleP = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;

  margin-bottom: 58px;

  color: #665df5;
`
export const OursSeparator = styled.div`
  width: 1100px;
  border: 1px solid rgba(0, 0, 0, .15);
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
  
`

export const OurBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

