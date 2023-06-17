import { CartProvider } from './context/cart-context';
import { Routes } from './routes';

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
