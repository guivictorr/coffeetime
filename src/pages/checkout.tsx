import { FormEvent } from 'react';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { Input } from '../components/input';
import { ButtonSelect } from '../components/button-select';
import { CheckoutCart } from '../components/checkout-cart';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface FormElements extends HTMLFormControlsCollection {
  address: HTMLInputElement;
  addressNumber: HTMLInputElement;
  state: HTMLInputElement;
  neighborhood: HTMLInputElement;
  city: HTMLInputElement;
  paymentMethod: HTMLInputElement;
}
interface PaymentFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Checkout() {
  const cart = useCart();
  const navigate = useNavigate();

  function handleConfirmPurchase(event: FormEvent<PaymentFormElements>) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const { city, state, neighborhood, addressNumber, address, paymentMethod } =
      event.currentTarget.elements;
    const params = new URLSearchParams({
      city: city.value,
      state: state.value,
      neighborhood: neighborhood.value,
      addressNumber: addressNumber.value.toString(),
      address: address.value,
      paymentMethod: paymentMethod.value,
    });

    navigate(`/confirmation?${params.toString()}`);
  }

  return (
    <main>
      <form
        onSubmit={handleConfirmPurchase}
        className='grid grid-cols-1 gap-8 lg:grid-cols-[minmax(340px,_1fr)_1fr] xl:grid-cols-[minmax(440px,_1fr)_1fr] pb-12'
      >
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
              <Input name='address' placeholder='Rua' required type='text' />
              <div className='flex flex-col sm:flex-row gap-2'>
                <div className='w-full sm:max-w-[200px]'>
                  <Input
                    name='addressNumber'
                    placeholder='Número'
                    required
                    type='number'
                  />
                </div>
                <Input placeholder='Complemento' type='text' />
              </div>
              <div className='flex items-center  gap-2'>
                <div className='w-full sm:max-w-[200px]'>
                  <Input
                    name='city'
                    placeholder='Cidade'
                    required
                    type='text'
                  />
                </div>
                <Input
                  name='neighborhood'
                  placeholder='Bairro'
                  required
                  type='text'
                />
                <div className='max-w-[60px]'>
                  <Input name='state' placeholder='UF' required type='text' />
                </div>
              </div>
            </fieldset>
          </article>

          <article className='bg-base-card p-4 md:p-10 rounded-es-md rounded-ee-md sm:rounded-md sm:mt-3'>
            <header className='flex gap-2'>
              <CurrencyDollar className='h-5 w-5 text-purple' />
              <div>
                <p className='text-base-subtitle text-sm sm:text-md'>
                  Pagamento
                </p>
                <p className='text-base-text text-xs sm:text-sm'>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <fieldset className='flex flex-col 2xl:flex-row gap-3 sm:justify-between mt-6 sm:mt-8'>
              <ButtonSelect
                name='paymentMethod'
                value='credit-card'
                id='credit-card'
                required
              >
                <CreditCard className='text-purple h-4 w-4' />
                <span>Cartão de crédito</span>
              </ButtonSelect>
              <ButtonSelect
                required
                name='paymentMethod'
                value='debit-card'
                id='debit-card'
              >
                <Bank className='text-purple h-4 w-4' />
                <span>Cartão de débito</span>
              </ButtonSelect>
              <ButtonSelect
                required
                name='paymentMethod'
                value='money'
                id='money'
              >
                <Money className='text-purple h-4 w-4' />
                <span>Dinheiro</span>
              </ButtonSelect>
            </fieldset>
          </article>
        </section>
        <section>
          <h3 className='text-md mb-4'>Cafés selecionados</h3>
          <CheckoutCart />
        </section>
      </form>
    </main>
  );
}
