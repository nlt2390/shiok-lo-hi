import React from 'react';
import PropTypes from 'prop-types';

import styles from './PrimaryButton.styles';

const PrimaryButton = (props) => {
  const {
    label,
    onClick,
  } = props;

  return (
    <button
      css={ styles.container }
      onClick={ onClick }
      type="button"
    >
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

PrimaryButton.defaultProps = {
  onClick: () => null,
  label: '',
};

export default PrimaryButton;
