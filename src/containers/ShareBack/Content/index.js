import React from 'react';
import styled from 'styled-components';
import {
  mixinWrapper,
} from 'containers/ShareBack/constants';

const ContentWrapper = styled.div`
  flex: 1 0 auto; /* grow shrink basis */
  ${mixinWrapper()}
`;

const Content = () => (
  <ContentWrapper>
    Content
  </ContentWrapper>
);

export default Content;
