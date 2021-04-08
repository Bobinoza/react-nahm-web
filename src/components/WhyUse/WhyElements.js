import styled from 'styled-components';
//height: 900px;
export const WhyContainer  = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
`
//
export const WhyWrapper1 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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
    margin-bottom: 10px;
  }
`

//
export const WhyWrapper2 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px; 

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const WhyCard = styled.div`
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

export const WhyIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const WhyH1 = styled.h1`
  font-weight: 500 bold;
  font-size: 2.1rem;
  color: #222;
  margin-bottom: 58px;
  text-align: center;

  @media screen and (max-width: 768px) {
    
  }
  
`

export const WhyH2 = styled.h2`
  color: #222;
  font-size: 1rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {

  }
`

export const WhyP = styled.p`
  font-size: 1rem;
  text-align: center;
`
export const WhySeparator = styled.div`
  width: 1100px;
  border: 1px solid rgba(0, 0, 0, .15);
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`