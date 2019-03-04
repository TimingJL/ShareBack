import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';

const ContentWrapper = styled.div`
  flex: 1 0 auto; /* grow shrink basis */
`;

const Content = () => (
  <ContentWrapper>
    <Gallery />
  </ContentWrapper>
);

export default Content;
