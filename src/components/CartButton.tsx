import { useContext } from "react";
import { Handbag } from "phosphor-react";
import { CartContext } from "@/contexts/CartContext";

import { CartButtonContainer, CountItemsContainer}from "../styles/pages/cartButton";

interface CartButtonProps{
  onClick: () => void;
}

export function CartButton({onClick}:CartButtonProps) {

  const { selectedsProducts } = useContext(CartContext);

  return (
    <CartButtonContainer onClick={onClick}>
      {selectedsProducts.length > 0 && (
        <CountItemsContainer>
          {selectedsProducts.length}
        </CountItemsContainer>
      )}
      <Handbag 
        size={26} 
        color={
          selectedsProducts.length > 0 ? "#C4C4CC" : "#8D8D99"
        } 
        weight="bold"
      />
    </CartButtonContainer>
  );
}
