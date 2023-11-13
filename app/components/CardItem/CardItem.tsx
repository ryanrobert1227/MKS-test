import React from "react";

import Image from "next/image";
import { CardStyle } from "./CardItem.ts";

import { apiProps } from "@/app/types/apiTypes.ts";

export default function CardItem(props: apiProps) {
  const { id, name, brand, description, photo, price, createdAt, updatedAt } =
    props;

  return (
    <>
      <CardStyle>
        <div className="image">
          <img src={photo} alt="" />
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
        <button>COMPRAR</button>
      </CardStyle>
    </>
  );
}
