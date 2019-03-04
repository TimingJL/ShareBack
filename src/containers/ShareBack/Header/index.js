import React from 'react';
import styled from 'styled-components';
import {
  NAV_BAR_HEIGHT,
  mixinWrapper,
  MAIN_COLOR,
} from 'containers/ShareBack/constants';

const NavBar = styled.div`
  background: white;
  line-height: ${NAV_BAR_HEIGHT}px;
  border-bottom: 1px solid #eee;
  ${mixinWrapper()}
  .nav-bar__banner {
    font-family: 'Alfa Slab One', cursive;
    font-size: 23px;
    color: ${MAIN_COLOR};
  }
`;

const Header = () => (
  <NavBar>
    <div className="nav-bar__banner">ShareBack</div>
  </NavBar>
);

export default Header;
