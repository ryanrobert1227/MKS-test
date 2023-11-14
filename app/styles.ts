import styled, { css } from "styled-components";

export const Container = styled.section<{}>(() => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 86vh;
    width: 100vw;

    .card-box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      height: 90%;
      width: 80%;
    }
  `;
});

export const Footer = styled.footer<{}>(() => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 4vh;
  `;
});
