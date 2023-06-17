import { PropsWithChildren, createContext, useState } from 'react';

type ProductsProps = {
  name: string;
  image: string;
  priceInCents: number;
  quantity: number;
  id: string;
};

type CartContextProps = {
  subtotal: number;
  shipFee: number;
  total: number;
  length: number;
  products: ProductsProps[];
  addProduct: (product: ProductsProps) => void;
  removeProduct: (productId: string) => void;
  decrementProduct: (productId: string) => void;
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const shipFee = 350;
  const length = products.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);
  const subtotal = products.reduce((acc, product) => {
    acc += product.priceInCents;
    return acc;
  }, 0);
  const total = subtotal + shipFee;

  function addProduct(newProduct: ProductsProps) {
    const productIndex = products.findIndex(
      product => product.id === newProduct.id,
    );

    if (productIndex === -1) {
      setProducts(prevProducts => [...prevProducts, newProduct]);
      return;
    }

    products[productIndex].quantity += newProduct.quantity;
    setProducts(products);
  }

  function removeProduct(productId: string) {
    const filteredProducts = products.filter(
      product => product.id !== productId,
    );
    setProducts(filteredProducts);
  }

  function decrementProduct(productId: string) {
    const productIndex = products.findIndex(
      product => product.id === productId,
    );

    if (productIndex === -1) {
      removeProduct(products[productIndex].id);
      return;
    }

    products[productIndex].quantity -= 1;
    setProducts(products);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        subtotal,
        shipFee,
        length,
        addProduct,
        removeProduct,
        decrementProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
