import { useSearchParams } from 'react-router-dom';

enum PaymentMethods {
  'credit-card' = 'Cartão de crédito',
  'debit-card' = 'Cartão de débito',
  'money' = 'Dinheiro',
}

export default function Confirmation() {
  const [searchParams] = useSearchParams();

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 mt-20'>
      <section>
        <h1 className='text-[32px] text-yellow-dark mb-1'>
          Uhu! Pedido confirmado
        </h1>
        <p className='text-lg text-base-subtitle mb-10'>
          Agora é só aguardar que logo seu café chegará até você
        </p>
        <div className='p-[2px] md:ax-w-[526px] bg-gradient-to-br from-yellow to-purple rounded-ss-md rounded-ee-md rounded-se-[36px] rounded-es-[36px]'>
          <ul className='space-y-8 rounded-ss-md rounded-ee-md rounded-se-[34px] rounded-es-[34px] bg-white sm:p-10'>
            <li className='flex items-center gap-3 text-base-text'>
              <img src='/static/assets/svg/location.svg' />
              <div>
                <p>
                  Entrega em{' '}
                  <strong>{`${searchParams.get('address')}, ${searchParams.get(
                    'addressNumber',
                  )}`}</strong>
                </p>
                <p>{`${searchParams.get('neighborhood')} - ${searchParams.get(
                  'city',
                )},  ${searchParams.get('state')}`}</p>
              </div>
            </li>
            <li className='flex items-center gap-3 text-base-text'>
              <img src='/static/assets/svg/stopwatch.svg' />
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </div>
            </li>
            <li className='flex items-center gap-3 text-base-text'>
              <img src='/static/assets/svg/package.svg' />
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  {
                    PaymentMethods[
                      searchParams.get(
                        'paymentMethod',
                      ) as keyof typeof PaymentMethods
                    ]
                  }
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='grid place-items-end'>
        <img
          className='hidden md:block'
          src='/static/assets/svg/delivery.svg'
          alt=''
        />
      </section>
    </main>
  );
}
