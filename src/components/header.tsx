import { CartButton } from './cart-button';
import { Location } from './location';

export function Header() {
  return (
    <header className='flex justify-between items-center gap-4'>
      <h1 className='text-lg py-9 whitespace-nowrap'>Coffee Time</h1>
      <nav className='flex gap-2 overflow-x-auto'>
        <Location />
        <CartButton />
      </nav>
    </header>
  );
}
