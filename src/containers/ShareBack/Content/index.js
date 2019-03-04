import React from 'react';
import styled from 'styled-components';
import {
  NAV_BAR_HEIGHT,
  FOOTER_HEIGHT,
  mixinWrapper,
} from 'containers/ShareBack/constants';

const ContentWrapper = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT + FOOTER_HEIGHT}px);
  ${mixinWrapper()}
`;

const Content = () => (
  <ContentWrapper>Content</ContentWrapper>
);

export default Content;
