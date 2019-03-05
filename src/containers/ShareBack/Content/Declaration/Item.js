import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  MAIN_COLOR,
} from 'containers/ShareBack/constants';

const StyledItem = styled.div`
  margin-bottom: 50px;
  text-align: center;
  width: 250px;
  letter-spacing: 1px;
  .declaration-item__title {
    margin: 15px 0px 5px 0px;
    font-size: 28px;
    color: ${MAIN_COLOR};
  }
`;

const Item = (props) => {
  const {
    image,
    title,
    description,
  } = props;
  const SIZE = 200;
  return (
    <StyledItem data-aos="fade-up" data-aos-duration="1500">
      <img src={image} alt="Smiley face" height={SIZE} width={SIZE} />
      <div className="declaration-item__title">{title}</div>
      <div>{description}</div>
    </StyledItem>
  );
};

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Item.defaultProps = {
  image: '',
  title: '',
  description: '',
};

export default Item;
