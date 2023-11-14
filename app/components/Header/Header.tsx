import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { HeaderStyle } from "./Header.ts";
import Cart from "../../assets/cart.tsx";

interface HeaderProps {
  setCartIsOpen: any;
}

export default function Header(props: HeaderProps) {
  const { sumItems }: { sumItems: number } = useSelector(
    (rootReducer: any) => rootReducer.itemsQuantityReducer
  );

  const { setCartIsOpen } = props;
  return (
    <HeaderStyle>
      <div className="logo">
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </div>
      <div className="cart">
        <button onClick={() => setCartIsOpen(true)}>
          <Cart />
          <span>{sumItems}</span>
        </button>
      </div>
    </HeaderStyle>
  );
}
