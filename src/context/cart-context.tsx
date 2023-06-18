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
  updateProductQuantity: (quantity: number, productId: string) => void;
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
    acc += product.priceInCents * product.quantity;
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

  function updateProductQuantity(quantity: number, productId: string) {
    const productIndex = products.findIndex(
      product => product.id === productId,
    );

    products[productIndex].quantity = quantity;
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
        updateProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
