import { MapPin } from 'phosphor-react';

export function Location() {
  return (
    <button className='flex items-center gap-2 text-purple-dark bg-purple-light p-2 rounded-md'>
      <MapPin weight='fill' className='text-purple' size={22} />
      <span>Porto Alegre, RS</span>
    </button>
  );
}
