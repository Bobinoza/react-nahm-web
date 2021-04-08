import React from 'react';
import { Button } from '../ButtonElements';
import Icon10 from '../../images/icon10.svg';
import Icon01 from '../../images/icon01.svg';
import Icon02 from '../../images/icon02.svg';
import Icon03 from '../../images/icon03.svg';
import Icon04 from '../../images/icon04.svg';
import Icon05 from '../../images/icon05.svg';
import Icon06 from '../../images/icon06.svg';
import Icon07 from '../../images/icon07.svg';
import {
  Container,
  HowWrapper1,
  HowWrapper2,
  HowWrapper3,
  HowCard,
  HowIcon,
  HowH1,
  HowH2,
  HowP,
  HowTitleP,
  HowBtnWrapper,
} from './HowItWorksMain';

const HowItWorksMain = () => {
  return (
    <>
      <Container id="">

        <HowH1>Como funciona a Housewives</HowH1>
        <HowTitleP>Só a Housewives entregam tantas vantagens</HowTitleP>

        <HowWrapper1>
          <HowCard>
            <HowIcon src={Icon10} />
            <HowH2>Experiência que encanta</HowH2>
            <HowP>
              92% das nossas nahms têm avaliações 5 estrelas
            </HowP>
          </HowCard>

          <HowCard>
            <HowIcon src={Icon01} />
            <HowH2>Segurança sempre</HowH2>
            <HowP>
              Garantia Veterinária e Suporte estão inclusos
              para seu dog estar sempre seguro
            </HowP>
          </HowCard>

          <HowCard>
            <HowIcon src={Icon02} />
            <HowH2>Atenção aos detalhes</HowH2>
            <HowP>
              Nossa equipe de especialistas aprova apenas 30% dos
              candidatos a heróis
            </HowP>
          </HowCard>
        </HowWrapper1>

        <HowWrapper2>
          <HowCard>
            <HowIcon src={Icon03} />
            <HowH2>Pagamento simplificado</HowH2>
            <HowP>
              Pague pelo App, site ou diretamente para sua Nahm.
            </HowP>
          </HowCard>

          <HowCard>
            <HowIcon src={Icon04} />
            <HowH2>Sempre de olho</HowH2>
            <HowP>
              Você recebe fotos e atualizações no celular para
              acompanhar o cãozinho de perto
            </HowP>
          </HowCard>
        </HowWrapper2>

        <HowWrapper3>
          <HowCard>
            <HowIcon src={Icon05} />
            <HowH2>Experiência que encanta</HowH2>
            <HowP>
              92% das nossas nahms têm avaliações 5 estrelas
            </HowP>
          </HowCard>

          <HowCard>
            <HowIcon src={Icon06} />
            <HowH2>Segurança sempre</HowH2>
            <HowP>
              Garantia Veterinária e Suporte estão inclusos
              para seu dog estar sempre seguro
            </HowP>
          </HowCard>

          <HowCard>
            <HowIcon src={Icon07} />
            <HowH2>Atenção aos detalhes</HowH2>
            <HowP>
              Nossa equipe de especialistas aprova apenas 30% dos
              candidatos a heróis
            </HowP>
          </HowCard>
        </HowWrapper3>

        <HowBtnWrapper>
          <Button>
            Encontrar Housewives
          </Button>
        </HowBtnWrapper>

      </Container>
    </>

  );
}

export default HowItWorksMain;