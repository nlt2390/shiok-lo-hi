import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.styles';

import {
  BarGroupContainer
} from '../../containers';

const HomePage = () => {
  return (
    <div css={styles.container}>
      <BarGroupContainer />
    </div>
  );
  
}

HomePage.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default HomePage;
