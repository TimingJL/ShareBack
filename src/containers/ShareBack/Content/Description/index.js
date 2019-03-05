import React from 'react';
import styled from 'styled-components';
import {
  MAIN_COLOR,
} from 'containers/ShareBack/constants';

const StyledDescription = styled.div`
  padding: 7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  .description__title {
    font-size: 28px;
    margin-bottom: 15px;
    color: ${MAIN_COLOR};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  .description__content {
    line-height: 28px;
    text-align: center;
    letter-spacing: 3px;
  }
`;

const Description = () => {
  return (
    <StyledDescription>
      <div data-aos="fade-up" data-aos-duration="1500" className="description__title">Life is Fantastic</div>
      <div data-aos="fade-up" data-aos-duration="1500" className="description__content">這不是一個贏家全拿的世界</div>
      <div data-aos="fade-up" data-aos-duration="1800" className="description__content">願意「給予」的人，往往能夠獲得更多！</div>
    </StyledDescription>
  );
};

export default Description;
