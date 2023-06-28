import { useCart } from '../hooks/useCart';
import { CartButton } from './cart-button';

export function Header() {
  const cart = useCart();
  return (
    <header className='flex justify-between items-center gap-4'>
      <h1 className='text-lg py-9 whitespace-nowrap'>Coffee Time</h1>
      <nav className='flex gap-2'>
        <CartButton badgeCount={cart?.length} />
      </nav>
    </header>
  );
}
