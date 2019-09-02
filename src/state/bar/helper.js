export const getBarPercentage = ({ value = 0, limit = 1 }) => {
  const percentage = (value / limit) * 100;
  if (percentage < 0) {
    return 0;
  }
  if (percentage > 100) {
    return 100;
  }
  return Math.round(percentage);
};

export const getAppendedValue = ({ value, appendValue }) => {
  const newValue = value + appendValue;

  return newValue > 0 ? newValue : 0;
};
