import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Bar,
} from '../../components';
import {
  barSelectors,
  barActions,
} from '../../state/bar';


export const BarGroupContainer = (props) => {
  const {
    fetchBarData,
    bars,
  } = props;

  useEffect(() => {
    fetchBarData();
  }, []);

  return bars.map((bar) => {
    return (
      <Bar
        key={ bar.id }
        percentage={ bar.percentage }
        isOverLimit={ bar.isOverLimit }
        value={ bar.value }
      />
    );
  });
};

BarGroupContainer.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    percentage: PropTypes.number,
    isOverLimit: PropTypes.bool,
  })),
  fetchBarData: PropTypes.func,
};

BarGroupContainer.defaultProps = {
  bars: [],
  fetchBarData: () => null,
};

const mapStateToProps = (state) => ({
  bars: barSelectors.selectorPercentageBars(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarData: () => dispatch(barActions.actionFetchBarData()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BarGroupContainer);
