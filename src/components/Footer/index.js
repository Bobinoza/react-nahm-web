import React from 'react';
import { animateScroll as scroll } from 'react-scroll'; // 3:33:00 Básicamente é para dar um efeito bacana quando clicamos na logo e a página sobe.
import { FaFacebook,  FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

import {  
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkItemsButton,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterButton,
} from './FooterElements';

const Footer = () => {
  // Função que faz a page subir ao clicar na logo.
  const toggleHome = () => { 
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Empresa</FooterLinkTitle>
              <FooterLink to="/usersList">Quem somos</FooterLink>
              <FooterLink to="/">O que oferecemos</FooterLink>
              <FooterLink to="/">Como funciona</FooterLink>
              <FooterLink to="/">Trabalhe conosco</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Central de ajuda</FooterLinkTitle>
              <FooterLink to="/">Ajuda</FooterLink>
              <FooterLink to="/">Termos de uso</FooterLink>
              <FooterLink to="/">Política de privacidade</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Em breve em</FooterLinkTitle>
              <FooterLink to="/">
                <IoLogoApple size="22"/> App Store
              </FooterLink>
              <FooterLink to="/">
                <IoLogoGooglePlaystore size="22" /> Google Play
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItemsButton>
              <FooterLinkTitle>Seja uma Housewives parceira</FooterLinkTitle>
              <FooterButton type="submit">Quero ser Housewives</FooterButton>
            </FooterLinkItemsButton>
          </FooterLinksWrapper>

        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Housewives
            </SocialLogo>
            <WebsiteRights>
              Housewives©
              {new Date().getFullYear()}
               {' '}Todos os direitos reservados.
            </WebsiteRights>
            <SocialIcons>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;