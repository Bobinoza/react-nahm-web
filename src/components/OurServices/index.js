import React from 'react';
import { Button } from '../ButtonElements';

import forHouses from '../../images/forHouses.svg';
import forBusinesses from '../../images/forBusinesses.svg';
import forBuilding from '../../images/forBuilding.svg';

import { animateScroll as scroll } from 'react-scroll'; //3:27:10

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesTitleP,
  OursSeparator,
  OurBtnWrapper,
} from './ServicesElements';


const OurServices = () => {

  //Create function to go to TOP 3:26:00
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossos serviços</ServicesH1>
      <ServicesTitleP>Nossas Housewives atendem todos os tipos de lugares</ServicesTitleP>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={forHouses} />
          <ServicesH2>Housewives para residências</ServicesH2>
          <ServicesP>
            Uma Housewives para limpar sua casa
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={forBusinesses} />
          <ServicesH2>Housewives para condomínios</ServicesH2>
          <ServicesP>
            Seu condomínio sempre limpo
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={forBuilding} />
          <ServicesH2>Housewives para empresas</ServicesH2>
          <ServicesP>
            Housewives para festas, eventos e escritórios
          </ServicesP>
        </ServicesCard>

      </ServicesWrapper>
      <OurBtnWrapper>
        <Button to='/usersList' onClick={toggleHome} >
          Encontrar Housewives
        </Button>
      </OurBtnWrapper>
      <OursSeparator />
    </ServicesContainer>
  );
};

export default OurServices;