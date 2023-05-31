import { Minus, Plus } from 'phosphor-react';
import { useEffect, useState } from 'react';

type CounterProps = {
  max?: number;
  min?: number;
};

export function Counter({ max, min }: CounterProps) {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (counter === max) {
      return;
    }

    setCounter(prevCounter => (prevCounter += 1));
  }

  function decrement() {
    if (counter === 0 || counter === min) {
      return;
    }

    setCounter(prevCounter => (prevCounter -= 1));
  }

  useEffect(() => {
    if (min) {
      setCounter(min);
    }
  }, []);

  return (
    <div className='flex items-center gap-2 bg-base-button rounded-md max-w-max p-2'>
      <button
        onClick={decrement}
        className='grid place-items-center w-4 h-4 text-purple hover:text-purple-dark'
      >
        <Minus weight='bold' size={14} />
      </button>
      <span className='text-md'>{counter}</span>
      <button
        onClick={increment}
        className='grid place-items-center w-4 h-4 text-purple hover:text-purple-dark'
      >
        <Plus weight='bold' size={14} />
      </button>
    </div>
  );
}
