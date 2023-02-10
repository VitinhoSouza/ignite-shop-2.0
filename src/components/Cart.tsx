import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Image from "next/image";

import {
  ButtonConfirm,
  ContentCart,
  ItemCart,
  DescriptionCardLine,
  FooterCart,
} from "../styles/pages/cart";

export default function Cart() {

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { selectedsProducts, removeItemToCart } = useContext(CartContext);

  let totalSum = 0;
  selectedsProducts.map(product => {
    totalSum += product.price;
  })

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: selectedsProducts,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;

    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!")
    }
  }

  return (
    <ContentCart>
      <h3>Sacola de compras</h3>
      {selectedsProducts.map(product => (
        <ItemCart key={product.id}>
          <Image src={product.imageUrl} alt="" width={100} height={100} />
          <div>
            <p>{product.name}</p>
            <h4>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format((product.price) / 100)}
            </h4>
            <button onClick={() => removeItemToCart(product)}>
              Remover
            </button>
          </div>
        </ItemCart>
      ))}

      <FooterCart>

        <DescriptionCardLine>
          <span>Quantidade</span>
          <span>
            {selectedsProducts.length} {selectedsProducts.length === 1 ? "item" : "itens"}
          </span>
        </DescriptionCardLine>

        <DescriptionCardLine>
          <h3>Valor total</h3>
          <h3>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format((totalSum) / 100)}
          </h3>
        </DescriptionCardLine>

        <ButtonConfirm
          onClick={handleBuyButton}
          disabled={isCreatingCheckoutSession || selectedsProducts.length === 0}
        >
          <h2>Finalizar compra</h2>
        </ButtonConfirm>
      </FooterCart>

    </ContentCart>
  )
}
