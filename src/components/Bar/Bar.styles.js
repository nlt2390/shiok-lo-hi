import { css } from '@emotion/core';

export default {
  container: css`
    margin: 5px 0;
    height: 20px;
    position: relative;
    border: 1px solid rgba(92, 104, 115, 1);
  `,
  barFill: css`
    background-color: rgba(32, 168, 216, 1);
    position: absolute;
    left: 0;
    top: 0;
  `,
  label: css`
    color: 	rgb(47, 53, 58);
    font-size: 14px;
  `
};
