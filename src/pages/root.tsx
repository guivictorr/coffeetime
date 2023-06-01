import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <section>
      <header>root header</header>

      <div>
        <Outlet />
      </div>
    </section>
  );
}
