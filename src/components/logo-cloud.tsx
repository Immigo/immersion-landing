import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="SavvyCal"
        src="https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce61302_Google_2015_logo.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Laravel"
        src="https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce61303_Endava_d.o.o._logo.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Tuple"
        src="https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce61304_Deloitte.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Transistor"
        src="https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce61307_PwC-Symbol.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Statamic"
        src="https://cdn.prod.website-files.com/6734f0a13fc430c77ce611cc/6734f0a13fc430c77ce61305_Logo_de_Banamex.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
