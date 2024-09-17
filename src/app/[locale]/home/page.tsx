import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('')
  return (
    <div className='px-12'>
      <h1>Home</h1>
      <h2>Designs</h2>
    </div>
  )
}
