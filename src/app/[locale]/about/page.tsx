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

      <div className='container-cloud'>
        <svg
          version='1.1'
          className='svg-cloud01'
          viewBox='0 0 100 100'
          preserveAspectRatio='xMinYMin meet'
        >
          <g>
            <path d='M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z' />
          </g>
          <g>
            <path d='M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z' />
          </g>
        </svg>
        <svg
          version='1.1'
          className='svg-cloud02'
          viewBox='0 0 100 100'
          preserveAspectRatio='xMinYMin meet'
        >
          <g>
            <path d='M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z' />
          </g>
          <g>
            <path d='M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z' />
          </g>
        </svg>
      </div>
    </div>
  )
}
