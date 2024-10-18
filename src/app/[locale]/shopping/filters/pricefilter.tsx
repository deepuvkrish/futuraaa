import { useTranslations } from 'next-intl'
import { FaAngleDown } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'

export default function Pricerating() {
  const t = useTranslations('')
  return (
    <div className='mb-5 mt-5 flex w-full flex-col'>
      <div className='flex items-center justify-around border-b border-b-gray-600 pb-2 pt-2 text-lg'>
        <span> Price Range </span> <FaAngleDown />
      </div>
      <div className='mb-5 mt-5 flex w-full flex-col'>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='expensive' type='checkbox' />
            <label htmlFor='expensive'>
              <FaCheck />
            </label>
            <span>Expensive</span>
          </div>
        </div>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='Midrange' type='checkbox' />
            <label htmlFor='Midrange'>
              <FaCheck />
            </label>
            <span>Mid Range</span>
          </div>
        </div>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='cheap' type='checkbox' />
            <label htmlFor='cheap'>
              <FaCheck />
            </label>
            <span>Cheap</span>
          </div>
        </div>
      </div>
    </div>
  )
}
