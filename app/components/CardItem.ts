import styled, { css } from "styled-components";

export const CardStyle = styled.section<{}>(() => {
  return css`
    position: relative;
    padding: 0px 10px;

    border-radius: 0px 0px 8px 8px;

    height: 242px;
    width: 238px;

    .imagem {
      height: 50%;
      width: 100%;

      background-color: green;
    }

    .line1 {
      display: flex;
      justify-content: space-between;

      height: 16%;

      margin-top: 0.3rem;

      h1 {
        width: 60%;

        font-family: "Montserrat";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;

        color: #2c2c2c;
      }
      .square {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;

        padding: 0rem 0.5rem;
        margin-top: 0.1rem;

        background: #373737;

        h2 {
          font-family: "Montserrat";
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 15px;

          color: #fff;
        }
      }
    }

    .detail {
      width: 90%;

      span {
        font-family: "Montserrat";
        font-size: 12px;
        font-weight: 300;

        color: #2c2c2c;
      }
    }

    button {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      height: 12%;

      border: none;
      border-radius: 0px 0px 8px 8px;

      color: #fff;
      background-color: #0f52ba;
    }
  `;
});
