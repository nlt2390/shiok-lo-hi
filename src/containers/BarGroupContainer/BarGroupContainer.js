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
    limit,
  } = props;

  useEffect(() => {
    fetchBarData();
  }, []);

  return bars.map((bar) => {
    return (
      <Bar
        value={ bar }
        limit={ limit }
      />
    );
  });
};

BarGroupContainer.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number),
  fetchBarData: PropTypes.func.isRequired,
  limit: PropTypes.number,
};

BarGroupContainer.defaultProps = {
  bars: [],
  limit: 0,
};

const mapStateToProps = (state) => ({
  bars: barSelectors.selectorBarBars(state),
  limit: barSelectors.selectorBarLimit(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarData: () => dispatch(barActions.actionFetchBarData()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BarGroupContainer);
