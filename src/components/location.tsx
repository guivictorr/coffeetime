import { MapPin } from 'phosphor-react';

export function Location() {
  return (
    <button
      type='button'
      title='Porto Alegre, RS'
      className='flex items-center gap-2 text-purple-dark bg-purple-light p-2 rounded-md overflow-hidden'
    >
      <MapPin weight='fill' className='text-purple min-w-[22px] min-h-[22px]' />
      <span className='truncate'>Porto Alegre, RS</span>
    </button>
  );
}
