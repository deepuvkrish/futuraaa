import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const persons = [
  {
    id: 0,
    name: 'Subhiksha Rajesh Kannan',
    place: 'Paramathivelur',
    profession: 'Business Analyst',
    dob: '13/06/2001',
    chars: 'cute ,'
  },
  {
    id: 0,
    name: 'Deepak Kunnath Velayudhan',
    place: 'Chunangad',
    profession: 'Mern Developer',
    dob: '23/06/1995',
    chars: 'gentle'
  }
]

export default function About() {
  const t = useTranslations('')
  return (
    <div className='px-16 py-24 text-center text-2xl'>
      <h1 className='about_head'>{t('about_text')}</h1>

    

      <div className='hot division'>
        <span className='sun'></span>
        <span className='sunx'></span>
      </div>

      <div className='mid_picture'>
        <Image src='/us.png' height={300} width={150} alt='our photo' />
      </div>
      <div className='cloudy division'>
        <span className='cloud'></span>
        <span className='cloudx'></span>
      </div>
      {/* <div className='stormy division'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span className='snowe'></span>
        <span className='snowex'></span>
        <span className='stick'></span>
        <span className='stick2'></span>
      </div> */}
      {/* <div className='breezy division'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span className='cloudr'></span>
      </div> */}
      <div className='night division'>
        <span className='moon'></span>
        <span className='spot1'></span>
        <span className='spot2'></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='about-us'>
        <div className='subhi'>
          <div className='person_name s_p'>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className='absolute left-2 top-0 h-10 w-10 text-orange-500'
            />
            <div className='person_name_div flex'>
              <h1>
                Subhiksha <span className='text-orange-500'>Rajesh</span> Kannan
              </h1>
            </div>
            <div>Business Analyst</div>
            <div>13-06-2001</div>
            <div className='text-xs'>Simple , Cute</div>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className='absolute bottom-[0px] right-0 h-10 w-10 '
            />
          </div>
        </div>
        <div className='deepz'>
          <div className='person_name d_p'>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className='absolute left-2 top-0 h-10 w-10'
            />
            <div className='person_name_div flex'>
              <h1>
                Deepak <span className='text-violet-500'> K </span>Velayudhan
              </h1>
            </div>
            <div>MERN Dev</div>
            <div>23-06-1995</div>
            <div className='text-xs'>Complicated , Cool</div>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className='absolute bottom-[0px] right-0 h-10 w-10 text-violet-500'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
