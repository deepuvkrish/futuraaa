import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Futuraa')}
          </span>
          <br />
          {t('Our_Digital_Diary')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t('Everything_in_one_app')}
        </div>
      </section>
      <div className='cssload-main'>
        <div className='cssload-heart'>
          <span className='cssload-heartL'></span>
          <span className='cssload-heartR'></span>
          <span className='cssload-square'></span>
        </div>
        <div className='cssload-shadow'></div>
      </div>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Shopping')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t('Shopping_items')}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>
              {t('activity_headline')}
            </h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t('activity_items')}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('tour_headline')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t('tours')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
