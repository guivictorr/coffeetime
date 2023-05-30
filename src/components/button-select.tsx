import { ReactNode } from 'react';

type ButtonSelectProps = {
  children: ReactNode;
  id: string;
  name: string;
};

export function ButtonSelect({ children, id, name }: ButtonSelectProps) {
  return (
    <div>
      <input id={id} name={name} type='radio' className='peer hidden' />
      <label
        className='peer-checked:bg-purple-light peer-checked:border-purple cursor-pointer flex items-center justify-center gap-2 w-full transition bg-base-button border text-base-text hover:bg-base-hover border-base-button rounded-lg p-4'
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}
