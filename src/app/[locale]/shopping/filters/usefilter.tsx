import { useTranslations } from 'next-intl'
import { FaAngleDown } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'

export default function Userating() {
  const t = useTranslations('')
  return (
    <div className='mb-5 mt-5 flex w-full flex-col'>
      <div className='flex items-center justify-around border-b border-b-gray-600 pb-2 pt-2 text-lg'>
        <span> Use Case </span> <FaAngleDown />
      </div>
      <div className='mb-5 mt-5 flex w-full flex-col'>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='Daily' type='checkbox' />
            <label htmlFor='Daily'>
              <FaCheck />
            </label>
            <span>Daily</span>
          </div>
        </div>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='Occasional' type='checkbox' />
            <label htmlFor='Occasional'>
              <FaCheck />
            </label>
            <span>Occasional</span>
          </div>
        </div>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='Rare' type='checkbox' />
            <label htmlFor='Rare'>
              <FaCheck />
            </label>
            <span>Rare</span>
          </div>
        </div>
      </div>
    </div>
  )
}
