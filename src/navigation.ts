'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/activities':'/activities',
  '/shopping':'/shopping',
  '/tours':'/tours',
  '/home':'/home',
  '/gym':'/gym',
  '/gym/cardio':'gym/cardio',
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
