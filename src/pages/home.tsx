import heroImage from '../assets/img/hero.png';
import coffeeIcon from '../assets/svg/coffee.svg';
import shoppingIcon from '../assets/svg/shopping.svg';
import packageIcon from '../assets/svg/package.svg';
import stopwatchIcon from '../assets/svg/stopwatch.svg';

const heroList = [
  {
    title: 'Compra simples e segura',
    icon: shoppingIcon,
  },
  {
    title: 'Embalagem mantém o café intacto',
    icon: packageIcon,
  },
  {
    title: 'Entrega rápida e rastreada',
    icon: stopwatchIcon,
  },
  {
    title: 'O café chega fresquinho até você',
    icon: coffeeIcon,
  },
];

export default function Home() {
  return (
    <main>
      <section className='grid grid-cols-1 lg:grid-cols-[588px_1fr] grid-rows-1 h-[544px] gap-x-12'>
        <div className='absolute -top-[230px] right-0 bottom-0 left-0 bg-hero-pattern bg-no-repeat bg-center'></div>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-start justify-center space-y-16 z-10'>
          <div className='max-w-[588px] space-y-4'>
            <h2 className='text-base-title text-[28px] sm:text-xl'>
              Encontre o café perfeito para qualquer hora do dia
            </h2>
            <p className='text-base-subtitle sm:text-lg'>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-y-5 gap-x-10 text-base-text'>
            {heroList.map(item => (
              <li
                key={item.title}
                className='flex items-center justify-center lg:justify-start gap-3'
              >
                <img className='hidden lg:block' alt='' src={item.icon} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className='hidden lg:flex items-center justify-center z-10'>
          <img src={heroImage} alt='' />
        </figure>
      </section>
    </main>
  );
}
