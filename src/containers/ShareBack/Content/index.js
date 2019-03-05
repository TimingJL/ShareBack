import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';
import Description from './Description';
import Declaration from './Declaration';

const ContentWrapper = styled.div`
  flex: 1 0 auto; /* grow shrink basis */
`;

const Content = () => (
  <ContentWrapper>
    <Gallery />
    <Description />
    <Declaration />
  </ContentWrapper>
);

export default Content;
