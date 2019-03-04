import React from 'react';
import styled from 'styled-components';
import {
  mixinWrapper,
  MAIN_COLOR,
  FOOTER_BACKGROUND_COLOR,
} from 'containers/ShareBack/constants';

const FooterWrapper = styled.div`
  ${mixinWrapper()}
  border-top: 3px solid ${MAIN_COLOR};
  background: ${FOOTER_BACKGROUND_COLOR};
  color: white;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterWrapper>
    <div>© 2019 ShareBack</div>
  </FooterWrapper>
);

export default Footer;
