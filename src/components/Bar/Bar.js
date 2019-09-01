import React from 'react';
import PropTypes from 'prop-types';

import styles from './Bar.styles';

const Bar = (props) => {
  const {
    value,
    limit,
  } = props;

  return (
    <div css={ styles.container }>
      <div css={ styles.barFill } />
      <div css={ styles.label } />
    </div>
  );
};

Bar.propTypes = {
  value: PropTypes.number,
  limit: PropTypes.number,
};

Bar.defaultProps = {
  value: 0,
  limit: 0,
};

export default Bar;
