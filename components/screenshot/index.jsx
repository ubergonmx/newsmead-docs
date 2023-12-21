import cn from 'clsx'
import Image from 'next/image'

export function Screenshot({ src, alt, full }) {
  return (
    <div
      className={cn(
        'nx--mb-4 nx-mt-6 nx-flex nx-justify-center nx-overflow-hidden nx-rounded-xl nx-border nx-border-zinc-800',
        full ? 'nx-bg-white' : 'nx-bg-zinc-100'
      )}
      style={{
        borderWidth: '0',
      }}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          'nx-w-auto nx-select-none nx-bg-white',
          full ? '' : 'nx-ring-1 nx-ring-gray-200'
        )}
      />
    </div>
  )
}
