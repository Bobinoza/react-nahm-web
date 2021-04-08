import React from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
} from './HomeElements';

function HomeSection() {
  return (
    <HomeContainer>
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HomeBg>
      <HomeContent>
        <HomeH1>De limpeza a gente entende</HomeH1>
        <HomeP>
          Conheça nossos serviços
        </HomeP>
        <HomeBtnWrapper>
          <Button to='/usersList'>
            Encontrar Housewives
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;