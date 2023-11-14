import styled, { css } from "styled-components";

export const MiniCardStyle = styled.section<{}>(() => {
  return css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 8px;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

    height: 20%;
    width: 100%;

    background-color: #fff;

    .image {
      height: 98%;
      width: fit-content;

      background-color: white;

      img {
        border-radius: 8px;

        height: 100%;
      }
    }

    h1 {
      width: 25%;

      font-family: "Montserrat";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;

      color: #2c2c2c;
    }

    .quantity {
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        font-family: "Montserrat";
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: #000;
      }

      .buttons {
        display: flex;
        align-items: center;

        border: 0.3px solid #bfbfbf;

        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: #000;
        background-color: #fff;

        button {
          border: none;

          padding: 0 0.5rem;

          &:hover {
            background-color: rgba(60, 60, 60, 0.2);
          }

          &:active {
            background-color: rgba(60, 60, 60, 0.4);
          }
        }

        span {
          padding: 0 0.2rem;

          font-family: "Montserrat";
          font-size: 8px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          color: #000;
        }
      }
    }

    h2 {
      margin-right: 0.5rem;

      font-family: "Montserrat";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;

      color: #000;
    }
  `;
});
