import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>home</div>,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
