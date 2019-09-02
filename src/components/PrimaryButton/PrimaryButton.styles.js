import { css } from '@emotion/core';

export default {
  container: css`
    color: #fff;
    background-color: #2f353a;
    border-color: #2f353a;
    width: 70px;
    border: none;
    cursor: pointer;
    margin: 10px;
    font-size: 15px;
    padding: 7px 0;

    &:hover{
      color: #fff;
      background-color: #1e2225;
      border-color: #181b1e;
      outline: none;
    }
    &:focus{
      outline: none;
    }
  `,
};
