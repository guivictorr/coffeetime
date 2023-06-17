import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

export function useCart() {
  const cartContext = useContext(CartContext);

  if (cartContext === undefined) {
    throw new Error('useCount must be used with CartProvider');
  }

  return cartContext;
}
