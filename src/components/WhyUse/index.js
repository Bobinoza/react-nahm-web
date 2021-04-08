import React from 'react';
import stars from '../../images/stars.svg';
import security from '../../images/security.svg';
import powerful from '../../images/powerful.svg';
import pigmoney from '../../images/pigMoney.svg';
import happy from '../../images/happy.svg';
import {
  WhyContainer,
  WhyWrapper1,
  WhyWrapper2,
  WhyCard,
  WhyIcon,
  WhyH1,
  WhyH2,
  WhyP,
  WhySeparator,
} from './WhyElements';


const WhyUse = () => {
  return (
    <WhyContainer id="">
      <WhyH1>Por que usar a Housewives</WhyH1>
      <WhyWrapper1> 
        <WhyCard>
          <WhyIcon src={happy} />
          <WhyH2>Experiência única</WhyH2>
          <WhyP>
            87% das nossas Housewives têm avaliações 5 estrelas
          </WhyP>
        </WhyCard>

        <WhyCard>
          <WhyIcon src={stars} />
          <WhyH2>Qualidade encatadora</WhyH2>
          <WhyP>
            Só mantemos na plataforma Housewives que matem um comportamento exemplar com os nossos clientes
          </WhyP>
        </WhyCard>

        <WhyCard>
          <WhyIcon src={security} />
          <WhyH2>Segurança sempre</WhyH2>
          <WhyP>
            Apenas 62% das candidatos a Housewives são aprovados.
          </WhyP>
        </WhyCard>

      </WhyWrapper1>

      <WhyWrapper2>
        <WhyCard>
          <WhyIcon src={pigmoney} />
          <WhyH2>Zero taxas</WhyH2>
          <WhyP>
            Não cobramos taxas para o uso da plataforma
          </WhyP>
        </WhyCard>

        <WhyCard>
          <WhyIcon src={powerful} />
          <WhyH2>Nunca fique na mão</WhyH2>
          <WhyP>
            Se por algum motivo uma das Housewives não puder ir, você tem à disposição muitas outras.
          </WhyP>
        </WhyCard>
      </WhyWrapper2>
      <WhySeparator />
    </WhyContainer>
  );
};

export default WhyUse;