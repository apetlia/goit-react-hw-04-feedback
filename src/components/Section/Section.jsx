import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Wrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
