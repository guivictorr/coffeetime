import { ShoppingCartSimple } from 'phosphor-react';
import { ButtonIcon } from './button-icon';

type CartButtonProps = {
  badgeCount?: number;
};

export function CartButton({ badgeCount = 0 }: CartButtonProps) {
  return (
    <div className='relative w-max mt-4'>
      {badgeCount > 0 && (
        <span className='pointer-events-none z-10 absolute -top-1 -right-1 bg-yellow-dark text-white rounded-full px-1 text-xs'>
          {badgeCount}
        </span>
      )}
      <ButtonIcon
        className='relative bg-yellow-light text-yellow-dark hover:bg-yellow/50 transition'
        icon={ShoppingCartSimple}
        iconProps={{ weight: 'fill' }}
      />
    </div>
  );
}
