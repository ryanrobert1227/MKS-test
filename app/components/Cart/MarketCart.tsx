"use client";

import React from "react";
import { useSelector } from "react-redux";

import MiniCardItem from "../MiniCardItem/MiniCardItem.tsx";

import { apiProps } from "@/app/types/apiTypes.ts";
import { SumItemsProps } from "@/app/types/propsTypes.ts";

import { CartBox } from "./MarketCart.ts";

export default function MarketCart(props: SumItemsProps) {
  const { setCartIsOpen } = props;
  const { itemsInCart }: { itemsInCart: apiProps[] } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

  const { eachQuantity }: { eachQuantity: number[] } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

  function handleFinalPrice() {
    let sum = 0;
    itemsInCart.map((item) => {
      sum += eachQuantity[item.id - 1] * Number(item.price);
      return;
    });

    return sum;
  }

  return (
    <CartBox>
      <div className="top">
        <h1> Carrinho de compras</h1>

        <button onClick={() => setCartIsOpen(false)}>X</button>
      </div>
      <div className="container">
        {itemsInCart.map((item) => {
          return (
            <MiniCardItem
              key={item.id}
              id={item.id}
              name={item.name}
              brand={item.brand}
              description={item.description}
              photo={item.photo}
              price={item.price}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          );
        })}
      </div>
      <div className="totalValue">
        <h1>Total:</h1>
        <h2>R$ {handleFinalPrice()}</h2>
      </div>
      <button className="buyConfirm"> Confirmar Compra</button>
    </CartBox>
  );
}
