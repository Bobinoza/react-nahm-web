import React from 'react';
import { Button } from '../ButtonElements';
import support from '../../images/support.svg'
import cellPhone from '../../images/cellPhone.svg';
import stars from '../../images/stars.svg';
import { animateScroll as scroll } from 'react-scroll'; //3:27:10
import {
  WorksContainer,
  WorksH1,
  WorksWrapper,
  WorksCard,
  WorksDiv1,
  WorksIcon,
  WorksDiv2,
  WorksH2,
  WorksP,
  WorksBtnWrapper
} from './HowItWorksElements';

const HowItWorks = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <WorksContainer>
      <WorksH1>Como funciona a Housewives</WorksH1>

      <WorksWrapper>

        <WorksCard>
          <WorksDiv1>
            <WorksIcon src={cellPhone} />
          </WorksDiv1>
          <WorksDiv2>
            <WorksH2>Tudo em poucos cliques</WorksH2>
            <WorksP>
              Você escolhe a Housewine que mais lhe agradar e combina
              diretamente com ela o melhor dia para o serviço 
            </WorksP>
          </WorksDiv2>
        </WorksCard>

        <WorksCard>
          <WorksDiv1>
            <WorksIcon src={support} />
          </WorksDiv1>
          <WorksDiv2>
            <WorksH2>Relaxe e fique despreocupado</WorksH2>
            <WorksP>
              Teve algum tipo de problema com a Housewives? Contate nosso suporte, temos
              um time que está pronto para resolver todos os problemas
            </WorksP>
          </WorksDiv2>
        </WorksCard>


        <WorksCard>
          <WorksDiv1>
            <WorksIcon src={stars} />
          </WorksDiv1>
          <WorksDiv2>
            <WorksH2>Não se esqueça</WorksH2>
            <WorksP>
              Avalie suas experiências com nossas Housewives, é
              importante para mantermos nosso serviço 5 estrelas.
            </WorksP>
          </WorksDiv2>
        </WorksCard>

      </WorksWrapper>
      <WorksBtnWrapper>
        <Button to='/usersList' onClick={toggleHome}>
          Encontrar Housewives
        </Button>
      </WorksBtnWrapper>

    </WorksContainer>
  );
};

export default HowItWorks;