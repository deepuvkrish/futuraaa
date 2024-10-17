'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import AyurLogo from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-auto w-auto'>
            <AyurLogo />
          </div>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/`}>
            {t('Home_headline')}
          </Link>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/activities`}>
            {t('activity_headline')}
          </Link>
          <Link lang={locale} href={`/shopping`}>
            {t('products_headline')}
          </Link>
          <Link lang={locale} href={`/tours`}>
            {t('tour_headline')}
          </Link>
          <Link lang={locale} href={`/home`}>
            {t('home_headline')}
          </Link>
          <Link lang={locale} href={`/gym`}>
            {t('health_headline')}
          </Link>
          <Link lang={locale} href={`/auto`}>
            {t('auto_headline')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}
