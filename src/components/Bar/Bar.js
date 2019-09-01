import React from 'react';
import PropTypes from 'prop-types';

import styles from './Bar.styles';

const Bar = (props) => {
  const {
    percentage,
    isOverLimit,
    value,
  } = props;

  return (
    <div css={ styles.container }>
      <div
        css={ styles.getBarFillCss({ isOverLimit, percentage }) }
      />
      <div css={ styles.label }>
        {value}
      </div>
    </div>
  );
};

Bar.propTypes = {
  percentage: PropTypes.number,
  isOverLimit: PropTypes.bool,
  value: PropTypes.number,
};

Bar.defaultProps = {
  percentage: 0,
  isOverLimit: false,
  value: 0,
};

export default Bar;
