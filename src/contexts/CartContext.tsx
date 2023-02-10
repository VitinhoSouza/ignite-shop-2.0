import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextProps {
  selectedsProducts: ProductProps[];
  addItemToCart: (product: ProductProps) => void;
  removeItemToCart: (product: ProductProps) => void;
}

export const CartContext = createContext({} as CartContextProps);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  let cart;
  if (typeof window !== 'undefined') {
    cart = localStorage.getItem("@ignite-shop-2.0:cart");
  }

  const [selectedsProducts, setSelectedsProducts] = useState<ProductProps[]>(
    cart ? JSON.parse(cart) : []
  );

  function addItemToCart(newProduct: ProductProps){
    const item = selectedsProducts.find(product => product.id === newProduct.id);

    if(!item){
      setSelectedsProducts(
        [...selectedsProducts, newProduct]
      )
    }
    
  }

  function removeItemToCart(newProduct: ProductProps){
    const newItems = selectedsProducts.filter(product => product.id !== newProduct.id);
    setSelectedsProducts(newItems);
  }

  useEffect(() => {
    localStorage.setItem('@ignite-shop-2.0:cart', JSON.stringify(selectedsProducts))
  }, [selectedsProducts])

  return (
    <CartContext.Provider
      value={{
        selectedsProducts,
        addItemToCart,
        removeItemToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
