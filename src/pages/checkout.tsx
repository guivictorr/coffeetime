import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { Input } from '../components/input';
import { ButtonSelect } from '../components/button-select';
import { Counter } from '../components/counter';
import { Button } from '../components/button';

export default function Checkout() {
  return (
    <main className='grid grid-cols-1 gap-8 lg:grid-cols-[minmax(340px,_1fr)_1fr] xl:grid-cols-[minmax(440px,_1fr)_1fr] pb-12'>
      <section>
        <h2 className='text-md mb-4'>Complete seu pedido</h2>
        <article className='bg-base-card p-4 md:p-10 rounded-ss-md rounded-se-md sm:rounded-md'>
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
              <Input placeholder='Complemento' type='text' />
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
        </article>

        <article className='bg-base-card p-4 md:p-10 rounded-es-md rounded-ee-md sm:rounded-md sm:mt-3'>
          <header className='flex gap-2'>
            <CurrencyDollar className='h-5 w-5 text-purple' />
            <div>
              <p className='text-base-subtitle text-sm sm:text-md'>Pagamento</p>
              <p className='text-base-text text-xs sm:text-sm'>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <fieldset className='flex flex-col 2xl:flex-row gap-3 sm:justify-between mt-6 sm:mt-8'>
            <ButtonSelect
              name='paymentMethod'
              value='credit-card'
              id='credit-card'
            >
              <CreditCard className='text-purple h-4 w-4' />
              <span>Cartão de crédito</span>
            </ButtonSelect>
            <ButtonSelect
              name='paymentMethod'
              value='debit-card'
              id='debit-card'
            >
              <Bank className='text-purple h-4 w-4' />
              <span>Cartão de débito</span>
            </ButtonSelect>
            <ButtonSelect name='paymentMethod' value='money' id='money'>
              <Money className='text-purple h-4 w-4' />
              <span>Dinheiro</span>
            </ButtonSelect>
          </fieldset>
        </article>
      </section>
      <section>
        <h3 className='text-md mb-4'>Cafés selecionados</h3>
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
                <span className='text-base-subtitle text-lg font-bold'>
                  Total
                </span>
              </div>
              <div className='flex flex-col text-end gap-3'>
                <span className='text-md text-base-text'>R$ 29,70</span>
                <span className='text-md text-base-text'>R$ 3,50</span>
                <span className='text-base-subtitle text-lg font-bold'>
                  33,50
                </span>
              </div>
            </div>

            <Button>CONFIRMAR PEDIDO</Button>
          </footer>
        </article>
      </section>
    </main>
  );
}
