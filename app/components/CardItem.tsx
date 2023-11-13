import React from "react";

import { CardStyle } from "./CardItem.ts";

export default function CardItem() {
  return (
    <>
      <CardStyle>
        <div className="imagem"></div>
        <div className="line1">
          <h1>Apple Watch Series 4 GPS</h1>
          <div className="square">
            <h2>R$399</h2>
          </div>
        </div>
        <div className="detail">
          <span>Redesigned from scratch and completely revised.</span>
        </div>
        <button>COMPRAR</button>
      </CardStyle>
    </>
  );
}
