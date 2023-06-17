import { Trash } from 'phosphor-react';
import { Button } from './button';
import { Counter } from './counter';

export function CheckoutCart() {
  return (
    <article className='p-4 md:p-10 bg-base-card rounded-se-3xl rounded-es-3xl rounded-ss-md rounded-ee-md'>
      <ul>
        <li className='flex'>
          <img
            src='src/assets/img/cream.png'
            alt=''
            className='hidden sm:block mr-5'
          />
          <div className=''>
            <p className='mb-2'>Expresso tradicional</p>
            <div className='flex gap-2'>
              <Counter onChange={console.log} />
              <Button variant='secondary'>
                <Trash className='text-purple' />
                <span>Remover</span>
              </Button>
            </div>
          </div>
          <p className='grow text-end font-bold'>R$ 9,90</p>
        </li>

        <hr className='my-6 text-base-button' />
      </ul>

      <footer className='flex flex-col'>
        <div className='flex justify-between mb-6'>
          <div className='flex flex-col text-start gap-3'>
            <span className='text-sm text-base-text'>Total de itens</span>
            <span className='text-sm text-base-text'>Entrega</span>
            <span className='text-base-subtitle text-lg font-bold'>Total</span>
          </div>
          <div className='flex flex-col text-end gap-3'>
            <span className='text-md text-base-text'>R$ 29,70</span>
            <span className='text-md text-base-text'>R$ 3,50</span>
            <span className='text-base-subtitle text-lg font-bold'>33,50</span>
          </div>
        </div>

        <Button>CONFIRMAR PEDIDO</Button>
      </footer>
    </article>
  );
}
