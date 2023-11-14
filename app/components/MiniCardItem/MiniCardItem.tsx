import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ActionTypes from "@/app/redux/Data/action-types.js";

import { apiProps } from "@/app/types/apiTypes.ts";

import { MiniCardStyle } from "./MiniCardItem.ts";

export default function MiniCardItem(props: apiProps) {
  const { id, name, brand, description, photo, price, createdAt, updatedAt } =
    props;

  const dispatch = useDispatch();

  const { eachQuantity }: { eachQuantity: number[] } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

  const { itemsInCart }: { itemsInCart: apiProps[] } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

  function handleRemoveQuantity() {
    eachQuantity.splice(id - 1, 1, eachQuantity[id - 1] - 1);
    dispatch({ type: ActionTypes.eachQuantity, payload: eachQuantity });

    if (eachQuantity[id - 1] === 0) {
      handleRemoveItem();
    }
  }

  function handleAddQuantity() {
    eachQuantity.splice(id - 1, 1, eachQuantity[id - 1] + 1);
    dispatch({ type: ActionTypes.eachQuantity, payload: eachQuantity });
  }

  function handleRemoveItem() {
    const newItems = itemsInCart.filter((item) => item.id !== id);

    dispatch({ type: ActionTypes.itemsInCart, payload: newItems });
  }

  return (
    <MiniCardStyle>
      <div className="image">
        <img src={photo} alt="" />
      </div>
      <h1>{name}</h1>
      <div className="quantity">
        <span>Qtd:</span>
        <div className="buttons">
          <button className="less" onClick={handleRemoveQuantity}>
            -
          </button>
          <span>{eachQuantity[id - 1]}</span>
          <button className="add" onClick={handleAddQuantity}>
            +
          </button>
        </div>
      </div>
      <h2>R${(Number(price) * eachQuantity[id - 1]).toFixed(0)}</h2>
    </MiniCardStyle>
  );
}
