"use client";

import React from "react";

import { CartBox } from "./MarketCart.ts";

export default function MarketCart() {
  return (
    <CartBox>
      <div className="top">
        <h1> Carrinho de compras</h1>

        <button>X</button>
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
