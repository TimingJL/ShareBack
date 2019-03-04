import React from 'react';
import styled from 'styled-components';
import {
  mixinWrapper,
  FOOTER_BACKGROUND_COLOR,
  PLATFORM_NAME,
} from 'containers/ShareBack/constants';

const FooterWrapper = styled.div`
  ${mixinWrapper()}
  background: ${FOOTER_BACKGROUND_COLOR};
  color: white;
  flex: 0 1 100px; /* grow shrink basis */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterWrapper>
    <div>© 2019 {PLATFORM_NAME}</div>
  </FooterWrapper>
);

export default Footer;
