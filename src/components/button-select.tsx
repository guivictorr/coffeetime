import { InputHTMLAttributes, ReactNode } from 'react';

type ButtonSelectProps = {
  children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function ButtonSelect({
  children,
  id,
  name,
  ...rest
}: ButtonSelectProps) {
  return (
    <div className='w-full'>
      <input
        id={id}
        name={name}
        {...rest}
        type='radio'
        className='peer hidden'
      />
      <label
        className='text-sm leading-4 peer-checked:bg-purple-light peer-checked:border-purple cursor-pointer flex items-center justify-center gap-2 w-full transition bg-base-button border text-base-text hover:bg-base-hover border-base-button rounded-lg p-4'
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}
