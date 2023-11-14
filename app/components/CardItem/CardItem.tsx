import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ActionTypes from "@/app/redux/Data/action-types.js";

import { apiProps } from "@/app/types/apiTypes.ts";

import { CardStyle } from "./CardItem.ts";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

export default function CardItem(props: apiProps) {
  const { id, name, brand, description, photo, price, createdAt, updatedAt } =
    props;

  const dispatch = useDispatch();

  const {
    eachQuantity,
    itemsInCart,
  }: { eachQuantity: number[]; itemsInCart: apiProps[] } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

  // const { itemsInCart }: { itemsInCart: apiProps[] } = useSelector(
  //   (rootReducer: any) => rootReducer.itemsQuantityReducer
  // );

  function handleClickToBuy() {
    eachQuantity.splice(id - 1, 1, eachQuantity[id - 1] + 1);
    dispatch({ type: ActionTypes.eachQuantity, payload: eachQuantity });

    handleSumAllItemsInCart();
    handleMapCart();
  }

  function handleSumAllItemsInCart() {
    const total = eachQuantity.reduce((acc, cur) => acc + cur);

    dispatch({ type: ActionTypes.sumItems, payload: total });
  }

  function handleMapCart() {
    const cartItem: any = {
      id,
      name,
      brand,
      description,
      photo,
      price,
      createdAt,
      updatedAt,
    };

    const thereIsThisItem = itemsInCart.find((item) => item.id === cartItem.id);

    if (!thereIsThisItem) {
      dispatch({
        type: ActionTypes.itemsInCart,
        payload: [...itemsInCart, cartItem],
      });
    }
  }

  return (
    <>
      <CardStyle>
        <div className="image">
          <img src={photo} alt="items" />
        </div>
        <div className="line1">
          <h1>{name}</h1>
          <div className="square">
            <h2>R${Number(price).toFixed(0)}</h2>
          </div>
        </div>
        <div className="detail">
          <span>{description}</span>
        </div>
        <button onClick={handleClickToBuy}>COMPRAR</button>
      </CardStyle>
    </>
  );
}
