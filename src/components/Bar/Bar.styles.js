import { css } from '@emotion/core';

const BAR_HEIGHT = 40;

export default {
  container: css`
    margin: 10px 0;
    height: ${BAR_HEIGHT}px;
    position: relative;
    border: 1px solid rgb(228, 231, 234);
  `,
  getBarFillCss: ({ isOverLimit, percentage }) => css`
    background-color: ${isOverLimit ? '#f86c6b' : '#63c2de'};
    position: absolute;
    left: 0;
    top: 0;
    width: ${percentage}%;
    bottom: 0;
    z-index: 5;
  `,
  label: css`
    color: #23282c;
    font-size: 17px;
    z-index: 10;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    line-height: ${BAR_HEIGHT}px;
    text-align: center;
  `,
};
