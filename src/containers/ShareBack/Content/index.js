import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';
import Description from './Description';

const ContentWrapper = styled.div`
  flex: 1 0 auto; /* grow shrink basis */
`;

const Content = () => (
  <ContentWrapper>
    <Gallery />
    <Description />
  </ContentWrapper>
);

export default Content;
