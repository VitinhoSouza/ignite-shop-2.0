import { useContext } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react';
import { Handbag } from "phosphor-react";

import { stripe } from "../lib/stripe";
import { HomeContainer, Product, PutInCart } from "../styles/pages/home";
import { CartContext } from "@/contexts/CartContext";

import 'keen-slider/keen-slider.min.css';
 
interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  const { addItemToCart, selectedsProducts } = useContext(CartContext);

  return (
    <>
      <Head>
          <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>

                  <div className="description">
                    <strong>{product.name}</strong>
                    <span>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format((product.price)/ 100)}
                    </span>
                  </div>
                  

                  <PutInCart 
                    disabled={selectedsProducts.filter(e => e.id === product.id).length > 0} 
                    onClick={()=>addItemToCart(product)}
                  >
                    <Handbag color="white" weight="bold" size={30}/>
                  </PutInCart>

                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}