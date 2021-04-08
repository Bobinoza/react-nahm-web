import styled from 'styled-components';

//height: 900px;
export const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WorksH1 = styled.h1`
  font-weight: 500 bold;
  font-size: 2.1rem;
  color: #222;
  margin-bottom: 58px;
  margin-top: 30px;
  text-align: center;
`

export const WorksWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: inline;
  align-items: center;
  padding: 30px 50px;
  border-radius: 30px;
  background: #fff;

  
`

export const WorksCard = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const WorksDiv1 = styled.div`

  @media screen and (max-width: 768px) {
    margin-bottom: -30px;
  }
`

export const WorksDiv2 = styled.div`

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const WorksIcon = styled.img`
  height: 136px;
  width: 136px;
`

export const WorksH2 = styled.h2`
  color: #222;
  margin-bottom: 10px;
`
//color: rgba(0, 0, 0, .66);

export const WorksP = styled.p`
  color: #222;
`

export const WorksBtnWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
