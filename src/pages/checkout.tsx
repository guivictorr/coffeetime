import { MapPinLine } from 'phosphor-react';
import { Input } from '../components/input';

export default function Checkout() {
  return (
    <main className='grid grid-cols-1'>
      <section className='bg-base-card p-4 rounded-md'>
        <div>
          <header className='flex gap-2'>
            <MapPinLine className='h-5 w-5 text-yellow-dark' />
            <div>
              <p className='text-base-subtitle text-sm sm:text-md'>
                Endereço de entrega
              </p>
              <p className='text-base-text text-xs sm:text-sm'>
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>
          <fieldset className='mt-6 sm:mt-8 space-y-2'>
            <div className='sm:max-w-[200px]'>
              <Input placeholder='CEP' required type='number' />
            </div>
            <Input placeholder='Rua' required type='text' />
            <div className='flex flex-col sm:flex-row gap-2'>
              <div className='w-full sm:max-w-[200px]'>
                <Input placeholder='Número' required type='number' />
              </div>
              <Input placeholder='Complemento' type='number' />
            </div>
            <div className='flex items-center  gap-2'>
              <div className='w-full sm:max-w-[200px]'>
                <Input placeholder='Cidade' required type='text' />
              </div>
              <Input placeholder='Bairro' required type='text' />
              <div className='max-w-[60px]'>
                <Input placeholder='UF' required type='text' />
              </div>
            </div>
          </fieldset>
        </div>
      </section>
      <section className='bg-yellow'>carrinho</section>
    </main>
  );
}
