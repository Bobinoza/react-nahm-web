import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ECEDF2;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; 
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #665df5;
  outline: none;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 45px);
  gap: 10px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  margin-left: 26px;
  padding-left: 10px;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #665df5;
  cursor: pointer;
  
  &:not(:last-child) { 
    border-bottom: solid 1px #fff;
  }
  
  &:hover {
    border-radius: 10px;
    background: #f9f9f9;
    color: #665df5;
    transition: 0.2s ease-in-out;
  }
`
// &:not(:last-child) vai aplicar a border em todos menos no último.
// justify-content: center;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
