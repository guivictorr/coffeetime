import { ShoppingCart } from 'phosphor-react';
import { Button } from './components/button';
import { ButtonIcon } from './components/button-icon';

function App() {
  return (
    <div>
      <h1 className='text-xl'>heading</h1>
      <p className=''>text</p>
      <Button>REMOVER</Button>
      <ButtonIcon
        icon={ShoppingCart}
        className='bg-yellow-light text-yellow-dark hover:bg-yellow-dark hover:text-yellow-light'
      />
    </div>
  );
}

export default App;
