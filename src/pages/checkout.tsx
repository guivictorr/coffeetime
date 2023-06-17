import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { Input } from '../components/input';
import { ButtonSelect } from '../components/button-select';

export default function Checkout() {
  return (
    <main className='grid grid-cols-1'>
      <section>
        <div className='bg-base-card p-4 rounded-ss-md rounded-se-md sm:rounded-md'>
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
        </div>
        <div className='bg-base-card p-4 rounded-es-md rounded-ee-md sm:rounded-md sm:mt-3'>
          <header className='flex gap-2'>
            <CurrencyDollar className='h-5 w-5 text-purple' />
            <div>
              <p className='text-base-subtitle text-sm sm:text-md'>Pagamento</p>
              <p className='text-base-text text-xs sm:text-sm'>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <fieldset className='flex flex-col sm:flex-row gap-3 sm:justify-between mt-6 sm:mt-8'>
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
        </div>
      </section>
      <section className='bg-yellow mt-12'>carrinho</section>
    </main>
  );
}
