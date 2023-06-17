import { MapPin } from 'phosphor-react';
import { useEffect, useState } from 'react';

const reverseGeocondigApiUrl = import.meta.env
  .VITE_OPEN_WEATHER_GEOLOCATION_URL;
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export function Location() {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        const requestUrl = `${reverseGeocondigApiUrl}/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`;

        fetch(requestUrl)
          .then(response => response.json())
          .then(jsonResponse => setLocation(jsonResponse[0].name))
          .catch(() => setLocation(null));
      });
    }
  }, []);

  return (
    <button
      type='button'
      title='Porto Alegre, RS'
      className='flex items-center gap-2 text-purple-dark bg-purple-light p-2 rounded-md overflow-hidden'
    >
      <MapPin weight='fill' className='text-purple min-w-[22px] min-h-[22px]' />
      <span className='truncate'>{location ?? 'Carregando...'}</span>
    </button>
  );
}
