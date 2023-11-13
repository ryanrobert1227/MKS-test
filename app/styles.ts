import styled, { css } from "styled-components";

export const Header = styled.header<{}>(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 14vh;
    width: 100vw;
    padding: 0 4em;

    background-color: #0f52ba;

    .logo {
      display: flex;
      align-items: baseline;

      color: white;

      h1 {
        font-family: "Montserrat";
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
      }

      h2 {
        color: #fff;
        font-family: "Montserrat";
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 19px;
      }
    }

    .cart {
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.7rem;

        border: none;
        border-radius: 8px;

        height: 6vh;
        width: 6vw;

        background-color: white;
      }

      span {
        font-family: "Montserrat";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  `;
});

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

    background: #eee;
  `;
});
