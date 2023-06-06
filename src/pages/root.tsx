import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';

export default function Root() {
  return (
    <section>
      <Header />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
