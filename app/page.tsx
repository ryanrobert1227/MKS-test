"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ActionTypes from "./redux/Data/action-types.js";

import Header from "./components/Header/Header.tsx";
import CardItem from "./components/CardItem/CardItem.tsx";
import MarketCart from "./components/Cart/MarketCart.tsx";

import { apiProps } from "./types/apiTypes.ts";

import GlobalStyle from "./global";
import { Container, Footer } from "./styles";

export default function Home() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { getData }: { getData: apiProps[] } = useSelector(
    (rootReducer: any) => rootReducer.getDataReducer
  );

  const {} = useQuery({
    queryKey: ["apiProps"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );
      dispatch({ type: ActionTypes.get, payload: data.products });
    },
  });

  return (
    <>
      <GlobalStyle />
      <Header setCartIsOpen={setCartIsOpen} />
      <Container>
        <div className="card-box">
          {getData.map((e) => {
            return (
              <CardItem
                key={e.id}
                id={e.id}
                name={e.name}
                brand={e.brand}
                description={e.description}
                photo={e.photo}
                price={e.price}
                createdAt={e.createdAt}
                updatedAt={e.updatedAt}
              />
            );
          })}
        </div>
      </Container>
      <Footer>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </Footer>
      {cartIsOpen && <MarketCart setCartIsOpen={setCartIsOpen} />}
    </>
  );
}
