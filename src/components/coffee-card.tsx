import { ShoppingCart } from 'phosphor-react';
import coffee from '../assets/img/cream.png';
import { ButtonIcon } from './button-icon';
import { Counter } from './counter';

export function CoffeeCard() {
  return (
    <div className='pb-5 px-6 text-base-text max-w-[256px] w-full bg-base-card flex flex-col items-center text-center rounded-se-3xl rounded-es-3xl rounded-ss-md rounded-ee-md'>
      <img src={coffee} className='w-28 h-28 -mt-6' />
      <div className='bg-yellow-light text-yellow-dark uppercase px-2 py-1 rounded-full text-xs mt-3'>
        <span>TRADICIONAL</span>
      </div>

      <p className='font-baloo font-extrabold mt-4 text-lg'>
        Expresso Tradicional
      </p>
      <p className='text-base-label text-sm mt-2 mb-8'>
        O tradicional café feito com água quente e grãs moídos
      </p>

      <footer className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-1'>
          <span className='text-xs self-end'>R$</span>
          <span className='font-baloo font-extrabold text-lg leading-5'>
            9,90
          </span>
        </div>
        <div className='flex gap-2'>
          <Counter />
          <ButtonIcon
            icon={ShoppingCart}
            iconProps={{ weight: 'fill' }}
            className='bg-purple-dark text-white w-10 grid place-items-center text-lg'
          />
        </div>
      </footer>
    </div>
  );
}
