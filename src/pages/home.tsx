import heroImage from '../assets/img/hero.png';

export default function Home() {
  return (
    <main>
      <section className='grid grid-cols-1 lg:grid-cols-[588px_1fr] grid-rows-1 h-[544px] gap-x-12'>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-start justify-center space-y-16 '>
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
            <li>Compra simples e segura</li>
            <li>Embalagem mantém o café intacto</li>
            <li>Entrega rápida e rastreada</li>
            <li>O café chega fresquinho até você</li>
          </ul>
        </div>
        <figure className='hidden lg:flex items-center justify-center'>
          <img src={heroImage} alt='' />
        </figure>
      </section>
    </main>
  );
}
