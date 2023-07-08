import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper } from './FeedbackOptions.styled';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(name => (
        <Button key={name} type="button" name={name} onClick={onLeaveFeedback}>
          {capitalizeFirstLetter(name)}
        </Button>
      ))}
    </Wrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
