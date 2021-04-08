import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/usersList" onClick={toggle}>Encontrar Housewives</SidebarLink>
          <SidebarLink to="/howWorks" onClick={toggle}>Como funciona</SidebarLink>
          <SidebarLink to="/wontToBe" onClick={toggle}>Quero ser Housewives</SidebarLink>
          <SidebarLink to="/" onClick={toggle}>Ajuda</SidebarLink>
          <SidebarLink to="/" onClick={toggle}>Quem somos</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;