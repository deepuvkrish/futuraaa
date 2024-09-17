import { useTranslations } from 'next-intl'
import Image from 'next/image'
// import { Link } from '@/src/navigation'
import Link from 'next/link'
import { FC } from 'react'

export default function Gym() {
  const t = useTranslations('')
  return (
    <div className='px-12'>
      <div className='flex w-full flex-row items-center justify-center'>
        <span className='mr-3 text-3xl font-extrabold text-black dark:text-white'>
          Workout
        </span>
        <span className='text-3xl font-extrabold text-violet-600 dark:text-lime-400'>
          Plans
        </span>
      </div>
      <div className='flex w-full flex-row items-center'>
        <div className='ag-format-container'>
          <div className='skill_box'>
            <div className='skill_item'>
              <Link href={`gym/cardio`} className='skill-item_link cardio'>
                <div className='skill-item_bg'></div>
                <div className='skill-item_title'>Cardio</div>
                <div className='skill-item_date-box'>
                  Frequency:
                  <span className='skill-item_date'> Everyday</span>
                </div>
              </Link>
            </div>

            <div className='skill_item'>
              <Link href='#' className='skill-item_link flexing'>
                <div className='skill-item_bg'></div>
                <div className='skill-item_title'>flexibility Training</div>
                <div className='skill-item_date-box'>
                  Frequency:
                  <span className='skill-item_date'>Everyday</span>
                </div>
              </Link>
            </div>

            <div className='skill_item'>
              <a href='#' className='skill-item_link anaroebic'>
                <div className='skill-item_bg'></div>
                <div className='skill-item_title'>Anaerobics</div>
                <div className='skill-item_date-box'>
                  Frequency:
                  <span className='skill-item_date'>Weekdays</span>
                </div>
              </a>
            </div>

            <div className='skill_item'>
              <a href='#' className='skill-item_link pilates'>
                <div className='skill-item_bg'></div>
                <div className='skill-item_title'>Pilates</div>
                <div className='skill-item_date-box'>
                  Frequency:
                  <span className='skill-item_date'>Everyday</span>
                </div>
              </a>
            </div>

            <div className='skill_item'>
              <a href='#' className='skill-item_link highintensity'>
                <div className='skill-item_bg'></div>
                <div className='skill-item_title'>High-Intensity</div>
                <div className='skill-item_date-box'>
                  Frequency:
                  <span className='skill-item_date'>3-4 Days</span>
                </div>
              </a>
            </div>

            <div className='skill_item'>
              <a href='#' className='skill-item_link strength'>
                <div className='skill-item_bg'></div>
                <div className='skill-item_title'>Strengthening</div>
                <div className='skill-item_date-box'>
                  Frequency:
                  <span className='skill-item_date'>5-6 Days</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
