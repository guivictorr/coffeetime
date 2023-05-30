import { InputHTMLAttributes } from 'react';

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='flex gap-1 items-center focus-within:border-yellow-dark rounded-[4px] bg-base-input p-3 border border-base-button'>
      <input
        {...rest}
        className='peer text-base-text flex-1 bg-base-input focus:outline-none placeholder:text-base-label'
      />
      <span className='peer-required:hidden italic text-base-label'>
        Opcional
      </span>
    </div>
  );
}
