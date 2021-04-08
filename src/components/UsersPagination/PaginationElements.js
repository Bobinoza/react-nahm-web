import styled from 'styled-components';
//width: 700px;
export const PaginationContainer = styled.div`
  max-width: 700px;
  margin: 30px auto;
  background: #fff;
  border-radius: 15px;
  padding: 20px 40px;
  box-shadow: 0 2px 9px 0 rgba(133, 135, 254,.42);

  &:first-child {
    margin-top: 160px;
  }

  @media screen and (max-width: 768px) {
    padding: 12px 12px;


    &:first-child {
      margin-top: 100px;
    }
  }
`
//box-shadow: 0 2px 9px 0 rgba(158, 184, 209,.71);

export const PaginationContainerBox = styled.div`
  display: flex;
  gap: 40px;
  

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`

export const PaginationContainerPhoto = styled.div`
  
`

export const PaginationImg = styled.img`
max-width: 110px;
height: 110px;
border-radius: 50%;
box-shadow: 0 2px 9px 0 rgba(158, 184, 209,.91);

@media screen and (max-width: 768px) {
  max-height: 70px;
  max-width: 70px;
}
`

export const PaginationContainerContents = styled.div`
  
`

export const PaginationContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 120px;
  
  @media screen and (max-width: 768px) {
    gap: 0;
  }
  
`

export const PaginationContainerNameEndInfos = styled.div`
  
`

export const PaginationName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0,0,0,.66);
  
`

export const PaginationRating = styled.p`
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`

export const PaginationPhone = styled.p`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const PaginationDistrict = styled.p`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const PaginationContainerPrices = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 35px;
    margin-left: 10px;
    font-size: 13px;
  }
`

export const PaginationPriceOne = styled.p`

`

export const PaginationPriceTwo = styled.p`

`

export const PaginationPriceThree = styled.p`

`

export const PaginationPriceFour = styled.p`

`

export const PaginationContainerBottom = styled.div`
  color: #222;
  
`

export const PaginationBio = styled.p`

`

export const PaginationSeparator = styled.div`
  border: solid 1px #e2e3e3;
  width: 100%;
  margin: 10px 0;
`














