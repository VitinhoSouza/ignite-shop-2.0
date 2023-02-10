import {useState} from "react";
import type { AppProps } from "next/app"
import Link from "next/link";
import Image from "next/image"
import { X } from "phosphor-react";

import Cart from "@/components/Cart";
import { CartButton } from "@/components/CartButton";
import { CartContextProvider } from "@/contexts/CartContext";

import { ContainerCart, HeaderCart } from "@/styles/pages/cart";
import { Container, Header } from "@/styles/pages/app";
import { globalStyles } from "@/styles/global";
import logoImg from "../assets/logo.svg";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [cartIsActive, setCartIsActive] = useState(false);

  return (
    <CartContextProvider>
      <Container>

        <Header>
            <Link href={"/"}><Image src={logoImg} alt="" /></Link>

            <CartButton onClick={() => setCartIsActive(!cartIsActive)} />
        </Header>

        <Component {...pageProps} />

        {cartIsActive && (
          <ContainerCart>
            <HeaderCart>
              <X onClick={() => setCartIsActive(!cartIsActive)} />
            </HeaderCart>
            <Cart />
          </ContainerCart>
        )}

      </Container>
    </CartContextProvider>
  )
}
