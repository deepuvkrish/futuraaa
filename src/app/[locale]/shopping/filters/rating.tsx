import { useTranslations } from 'next-intl'
import { FaAngleDown } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'

export default function Rating() {
  const t = useTranslations('')
  return (
    <div className='mb-5 mt-5 flex w-full flex-col'>
      <div className='flex items-center justify-around border-b border-b-gray-600 pb-2 pt-2 text-lg'>
        <span> Demand Rating </span> <FaAngleDown />
      </div>
      <div className='mb-5 mt-5 flex w-full flex-col'>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='highdemand' type='checkbox' />
            <label htmlFor='highdemand'>
              <FaCheck />
            </label>
            <span>High Demand</span>
          </div>
        </div>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='normaldemand' type='checkbox' />
            <label htmlFor='normaldemand'>
              <FaCheck />
            </label>
            <span>Normal Demand</span>
          </div>
        </div>
        <div className='checkbox'>
          <div className='checkbox__1'>
            <input id='lowdemand' type='checkbox' />
            <label htmlFor='lowdemand'>
              <FaCheck />
            </label>
            <span>Low Demand</span>
          </div>
        </div>
      </div>
    </div>
  )
}
