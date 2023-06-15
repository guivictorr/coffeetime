import { ShoppingCart } from 'phosphor-react';
import { ButtonIcon } from './button-icon';
import { Counter } from './counter';

type CoffeeCardProps = {
  name: string;
  categories: string[];
  image: string;
  description: string;
  priceInCents: number;
};

export function CoffeeCard({
  name,
  categories,
  description,
  image,
  priceInCents,
}: CoffeeCardProps) {
  return (
    <div className='pb-5 px-6 text-base-text max-w-[256px] w-full bg-base-card flex flex-col items-center text-center rounded-se-3xl rounded-es-3xl rounded-ss-md rounded-ee-md'>
      <img src={`src/assets/img/${image}`} className='w-28 h-28 -mt-6' />
      <div className='bg-yellow-light text-yellow-dark uppercase px-2 py-1 rounded-full text-xs mt-3'>
        {categories.map(category => (
          <span>{category}</span>
        ))}
      </div>

      <p className='font-baloo font-extrabold mt-4 text-lg'>{name}</p>
      <p className='text-base-label text-sm mt-2 mb-8'>{description}</p>

      <footer className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-1'>
          <span className='text-xs self-end'>R$</span>
          <span className='font-baloo font-extrabold text-lg leading-5'>
            {priceInCents / 100}
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
