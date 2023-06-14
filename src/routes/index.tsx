import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Root = lazy(() => import('../pages/root'));
const Home = lazy(() => import('../pages/home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'checkout',
        element: <h1>checkout</h1>,
      },
      {
        path: 'confirmation',
        element: <h1>confirmation</h1>,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
