import styled, { css } from "styled-components";

export const CartBox = styled.section<{}>(() => {
  return css`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    width: 32%;
    padding: 2rem 3rem;

    background-color: blue;

    .top {
      display: flex;
      justify-content: space-between;

      h1 {
        width: 50.5%;

        font-family: "Montserrat";
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        color: #fff;
      }

      button {
        border: none;
        border-radius: 50%;

        width: 3rem;
        height: 3rem;
        margin-top: 0.6rem;

        font-family: "Montserrat";
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;

        color: #fff;
        background-color: #000;
      }
    }

    .container {
      height: 73%;
      width: 100%;
      margin-top: 0.5rem;

      background-color: green;
    }

    .totalValue {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      h1 {
        font-family: "Montserrat";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;

        color: #fff;
      }

      h2 {
        font-family: "Montserrat";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;

        color: #fff;
      }
    }

    .buyConfirm {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;

      border: none;

      height: 10%;

      font-family: "Montserrat";
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 15px;

      color: #fff;
      background-color: black;
    }
  `;
});
