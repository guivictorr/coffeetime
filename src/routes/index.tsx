import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from '../pages/root';
import Home from '../pages/home';
import Checkout from '../pages/checkout';
import Confirmation from '../pages/confirmation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'confirmation',
        element: <Confirmation />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
