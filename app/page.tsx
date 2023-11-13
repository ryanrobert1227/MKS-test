"use client";

import { useState } from "react";
import GlobalStyle from "./global";
import { Container, Footer, Header } from "./styles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import CardItem from "./components/CardItem.tsx";

import Cart from "@/app/assets/cart";

interface apiProps {
  id: number;
  name: String;
  brand: String;
  description: String;
  photo: string;
  price: String;
  createdAt: String;
  updatedAt: String;
}

export default function Home() {
  const [apiData, setAPIData] = useState<apiProps[]>([]);

  const {} = useQuery({
    queryKey: ["apiProps"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );
      setAPIData(data.products);
    },
  });

  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="logo">
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <div className="cart">
          <button>
            <Cart />
            <span>0</span>
          </button>
        </div>
      </Header>
      <Container>
        <div className="card-box">
          {apiData.map((e) => {
            return (
              <CardItem
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
    </>
  );
}
