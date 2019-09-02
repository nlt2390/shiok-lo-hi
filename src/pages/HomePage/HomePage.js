import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.styles';

import {
  BarGroupContainer,
  ButtonGroupContainer,
} from '../../containers';

const HomePage = () => {
  return (
    <div css={ styles.container }>
      <BarGroupContainer />
      <ButtonGroupContainer />
    </div>
  );
};

HomePage.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default HomePage;
