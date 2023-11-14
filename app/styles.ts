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
