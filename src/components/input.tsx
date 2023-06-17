import { InputHTMLAttributes } from 'react';

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='flex w-full gap-1 items-center text-sm sm:text-md focus-within:border-yellow-dark rounded-[4px] bg-base-input p-2 sm:p-3 border border-base-button'>
      <input
        {...rest}
        className='peer w-full text-base-text flex-1 bg-base-input focus:outline-none placeholder:text-base-label'
      />
      <span className='peer-required:hidden italic text-base-label'>
        Opcional
      </span>
    </div>
  );
}
