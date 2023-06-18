import deliveryIllustration from '../assets/svg/delivery.svg';
import locationIcon from '../assets/svg/location.svg';
import stopWatchIcon from '../assets/svg/stopwatch.svg';
import cashIcon from '../assets/svg/cash.svg';

export default function Confirmation() {
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
          <ul className='space-y-8 rounded-ss-md rounded-ee-md rounded-se-[34px] rounded-es-[34px] bg-white p-4 sm:p-10'>
            <li className='flex items-center gap-3 text-base-text'>
              <img src={locationIcon} />
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martineli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </li>
            <li className='flex items-center gap-3 text-base-text'>
              <img src={stopWatchIcon} />
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </div>
            </li>
            <li className='flex items-center gap-3 text-base-text'>
              <img src={cashIcon} />
              <div>
                <p>Pagamento na entrega</p>
                <p>Cartão de Crédito</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='grid place-items-end'>
        <img className='hidden md:block' src={deliveryIllustration} alt='' />
      </section>
    </main>
  );
}
