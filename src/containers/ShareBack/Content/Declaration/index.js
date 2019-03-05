import React from 'react';
import styled from 'styled-components';
import {
  mixinWrapper,
} from 'containers/ShareBack/constants';
import Item from './Item';
import { DECLARATIONS } from './constants';

const DeclarationWrapper = styled.div`
  ${mixinWrapper()}
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Declaration = () => (
  <DeclarationWrapper>
    <Item
      title={DECLARATIONS.PAYMENT.title}
      image={DECLARATIONS.PAYMENT.image}
      description={DECLARATIONS.PAYMENT.description}
    />
    <Item
      title={DECLARATIONS.PROJECT.title}
      image={DECLARATIONS.PROJECT.image}
      description={DECLARATIONS.PROJECT.description}
    />
    <Item
      title={DECLARATIONS.TEAMWORK.title}
      image={DECLARATIONS.TEAMWORK.image}
      description={DECLARATIONS.TEAMWORK.description}
    />
  </DeclarationWrapper>
);

export default Declaration;
