import { clsx } from 'clsx'
import { Subheading } from './text'


export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className='flex flex-col'>
      <div className='mx-auto mt-2 mb-12'>
        <Subheading >
          Our travelers work at
        </Subheading>
      </div>

    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >

      <img
        alt="SavvyCal"
        src='/images/Google_2015_logo.png'
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Laravel"
        src="/images/mercado-libre-white.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Tuple"
        src={'/images/microsoft-white.png'}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Transistor"
        src={'/images/nubank-white.png'}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Statamic"
        src={'/images/rappi-white.png'}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
    </div>

  )
}
