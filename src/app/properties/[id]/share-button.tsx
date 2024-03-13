'use client';

import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { FaShare } from 'react-icons/fa';

export default function ShareButton() {
  const pathname = usePathname();
  return (
    <Button
      className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center gap-2'
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            title: 'Check out this property!',
            text: 'I found this property and thought you might like it!',
            url: pathname,
          });
        }
      }}
    >
      <FaShare /> Share Property
    </Button>
  );
}
