"use client";

import React from "react";
import { useSelector } from "react-redux";

import MiniCardItem from "../MiniCardItem/MiniCardItem.tsx";

import { apiProps } from "@/app/types/apiTypes.ts";

import { CartBox } from "./MarketCart.ts";

interface MarketCartProps {
  setCartIsOpen: any;
}

export default function MarketCart(props: MarketCartProps) {
  const { setCartIsOpen } = props;
  const { itemsInCart }: { itemsInCart: apiProps[] } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

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
        <h2>R$ 798</h2>
      </div>
      <button className="buyConfirm"> Confirmar Compra</button>
    </CartBox>
  );
}
