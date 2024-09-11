import Image from 'next/image'

export default function AyurLogo() {
  return (
    <div className='lex flex-row items-center leading-none text-white'>
      <Image
        src='/futuralog.png'
        alt='ayur logo'
        width={200}
        height={200}
        priority
        className='brightness-0 dark:brightness-100'
      />
    </div>
  )
}
