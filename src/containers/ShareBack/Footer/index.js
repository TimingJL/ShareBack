import React from 'react';
import styled from 'styled-components';
import {
  mixinWrapper,
} from 'containers/ShareBack/constants';

const FooterWrapper = styled.div`
  ${mixinWrapper()}
  border-top: 1px solid #eee;
`;

const Footer = () => (
  <FooterWrapper>Footer</FooterWrapper>
);

export default Footer;
