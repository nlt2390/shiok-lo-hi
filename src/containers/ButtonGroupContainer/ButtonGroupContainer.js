import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  PrimaryButton,
} from '../../components';
import {
  barSelectors,
  barActions,
} from '../../state/bar';

import styles from './ButtonGroupContainer.styles';

export class ButtonGroupContainer extends React.Component {
  selectedBarOptionValue = null;

  onBarSelectChange = (event) => {
    this.selectedBarOptionValue = event.target.value;
  }

  onButtonClick = (value) => {
    const {
      setBarData,
      barOptions,
    } = this.props;

    setBarData({
      barId: Number.parseInt(this.selectedBarOptionValue || barOptions[0].value, 10),
      appendValue: value,
    });
  }

  render() {
    const {
      buttons,
      barOptions,
      limit,
    } = this.props;

    if (buttons.length > 0) {
      return (
        <div>
          <div>
            {`Limit: ${limit}`}
          </div>
          <div css={ styles.container }>
            <div>
              <select
                onChange={ this.onBarSelectChange }
                css={ styles.selectBox }
              >
                {
                  barOptions.map((option) => {
                    return (
                      <option
                        key={ option.id }
                        value={ option.id }
                      >
                        {option.label}
                      </option>
                    );
                  })
                }
              </select>
            </div>
            <div>
              {
                buttons.map((button) => {
                  return (
                    <PrimaryButton
                      key={ button.id }
                      label={ button.value.toString() }
                      onClick={ () => this.onButtonClick(button.value) }
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

ButtonGroupContainer.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
  })),
  limit: PropTypes.number,
  barOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.number,
  })),
  setBarData: PropTypes.func,
};

ButtonGroupContainer.defaultProps = {
  buttons: [],
  limit: 0,
  barOptions: [],
  setBarData: () => null,
};

const mapStateToProps = (state) => ({
  buttons: barSelectors.selectorDisplayButtons(state),
  barOptions: barSelectors.selectorBarOptions(state),
  limit: barSelectors.selectorBarLimit(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setBarData: ({ barId, appendValue }) => {
      dispatch(
        barActions.actionSetBarData({ barId, appendValue }),
      );
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroupContainer);
