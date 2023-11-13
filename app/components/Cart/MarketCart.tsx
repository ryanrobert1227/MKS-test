"use client";

import React from "react";
import { useSelector } from "react-redux";
import { CartBox } from "./MarketCart.ts";

import { apiProps } from "@/app/types/apiTypes.ts";

interface MarketCartProps {
  setCartIsOpen: any;
}

export default function MarketCart(props: MarketCartProps) {
  const { setCartIsOpen } = props;
  const { getData }: { getData: apiProps[] } = useSelector(
    (rootReducer: any) => rootReducer.getDataReducer
  );

  return (
    <CartBox>
      <div className="top">
        <h1> Carrinho de compras</h1>

        <button onClick={() => setCartIsOpen(false)}>X</button>
      </div>
      <div className="container"></div>
      <div className="totalValue">
        <h1>Total:</h1>
        <h2>R$ 798</h2>
      </div>
      <button className="buyConfirm"> Confirmar Compra</button>
    </CartBox>
  );
}
