import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

export function useCart() {
  const cartContext = useContext(CartContext);
  return cartContext;
}
