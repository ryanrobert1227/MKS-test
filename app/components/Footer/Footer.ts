import styled, { css } from "styled-components";

export const FooterStyle = styled.footer<{}>(() => {
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
