import { Trash } from 'phosphor-react';
import { Button } from './button';
import { Counter } from './counter';
import { useCart } from '../hooks/useCart';

function convertFromCentsToReal(valueInCents: number) {
  const valueInReal = valueInCents / 100;

  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(valueInReal);
}

export function CheckoutCart() {
  const cart = useCart();

  const [total, subtotal, shipFee] = [
    cart.total,
    cart.subtotal,
    cart.shipFee,
  ].map(convertFromCentsToReal);

  return (
    <article className='p-4 md:p-10 bg-base-card rounded-se-3xl rounded-es-3xl rounded-ss-md rounded-ee-md'>
      <ul>
        {cart.products.map(product => (
          <>
            <li className='flex'>
              <img
                src={`src/assets/img/${product.image}`}
                alt=''
                className='hidden sm:block mr-5'
              />
              <div className=''>
                <p className='mb-2'>{product.name}</p>
                <div className='flex gap-2'>
                  <Counter
                    initialValue={product.quantity}
                    onChange={counter => {
                      console.log(counter);
                      cart.updateProductQuantity(counter, product.id);
                    }}
                  />
                  <Button
                    onClick={() => cart.removeProduct(product.id)}
                    variant='secondary'
                  >
                    <Trash className='text-purple' />
                    <span>Remover</span>
                  </Button>
                </div>
              </div>
              <p className='grow text-end font-bold'>
                {convertFromCentsToReal(
                  product.priceInCents * product.quantity,
                )}
              </p>
            </li>

            <hr className='my-6 text-base-button' />
          </>
        ))}
      </ul>

      <footer className='flex flex-col'>
        <div className='flex justify-between mb-6'>
          <div className='flex flex-col text-start gap-3'>
            <span className='text-sm text-base-text'>Total de itens</span>
            <span className='text-sm text-base-text'>Entrega</span>
            <span className='text-base-subtitle text-lg font-bold'>Total</span>
          </div>
          <div className='flex flex-col text-end gap-3'>
            <span className='text-md text-base-text'>{subtotal}</span>
            <span className='text-md text-base-text'>{shipFee}</span>
            <span className='text-base-subtitle text-lg font-bold'>
              {total}
            </span>
          </div>
        </div>

        <Button type='submit'>CONFIRMAR PEDIDO</Button>
      </footer>
    </article>
  );
}
