import { ShoppingCartSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { ButtonIcon } from './button-icon';
import { useCart } from '../hooks/useCart';

type CartButtonProps = {
  badgeCount?: number;
};

export function CartButton({ badgeCount = 0 }: CartButtonProps) {
  const cart = useCart();
  const navigate = useNavigate();

  return (
    <div className='relative w-max'>
      {badgeCount > 0 && (
        <span className='px-1 h-[16px] grid place-items-center leading-3 pointer-events-none z-10 absolute -top-1 -right-1 bg-yellow-dark text-white rounded-full text-xs'>
          {badgeCount}
        </span>
      )}
      <ButtonIcon
        disabled={cart.length === 0}
        className='disabled:cursor-not-allowed bg-yellow-light text-yellow-dark hover:bg-yellow/50'
        icon={ShoppingCartSimple}
        iconProps={{ weight: 'fill', size: 24 }}
        onClick={() => navigate('/checkout')}
      />
    </div>
  );
}
