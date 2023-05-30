import { CreditCard, ShoppingCart } from 'phosphor-react';
import { Button } from './components/button';
import { ButtonIcon } from './components/button-icon';
import { CartButton } from './components/cart-button';
import { ButtonSelect } from './components/button-select';
import { Input } from './components/input';
import { Counter } from './components/counter';

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
      <CartButton badgeCount={1} />
      <ButtonSelect id='iid' name='name'>
        <CreditCard className='text-purple' />
        LABEL
      </ButtonSelect>

      <ButtonSelect id='id' name='name'>
        LABEL
      </ButtonSelect>
      <Input />
      <Counter />
    </div>
  );
}

export default App;
