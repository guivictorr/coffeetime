import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';

export default function Root() {
  return (
    <section className='px-4 md:px-40'>
      <Header />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
