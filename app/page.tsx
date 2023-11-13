"use client";

import Image from "next/image";
import GlobalStyle from "./global";
import { Container, Footer, Header } from "./styles";
import { useQuery, useMutation } from "@tanstack/react-query";

import CardItem from "./components/CardItem.tsx";

import Cart from "@/app/assets/cart";

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
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
          {items.map((e) => {
            return <CardItem key={e} />;
          })}
        </div>
      </Container>
      <Footer>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </Footer>
    </>
  );
}

function wait(timer: number) {
  return new Promise((resolve) => setTimeout(resolve, timer));
}
