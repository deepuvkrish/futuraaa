import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('')
  return (
    <div className='px-12 py-24 text-center text-2xl'>
      {t('activity_headline')}

      <div className='container'>
        <div className='card-left subCard'>
          <div className='card-image'>
            <Image src='/sky.gif' alt='sky diving' height={200} width={200} />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Sky Diving</p>
            <span className='text-xs text-pink-600'>Dubai</span>
            <div className='text-sm font-semibold text-sky-800'>₹60,000</div>
            <div className='text-xs text-gray-800'>
              Medical insurance, Photos, and an Edited video
            </div>
          </div>
        </div>

        <div className='card-top subCard'>
          <div className='card-image'>
            <Image
              src='/scuba.gif'
              alt='scuba diving'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Scuba Diving</p>
            <span className='text-xs text-pink-600'>Dubai</span>
            <div className='text-sm font-semibold text-sky-800'>₹8,000</div>
            <div className='text-xs text-gray-800'> -/- </div>
          </div>
        </div>

        <div className='card-right subCard'>
          <div className='card-image'>
            <Image
              src='/baloon.gif'
              alt='Hot air balloon'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Hot Air Balloon</p>
            <span className='text-xs text-pink-600'>Cappadocia</span>
            <div className='text-sm font-semibold text-sky-800'>₹50,000</div>
            <div className='text-xs text-gray-800'>
              1hr, buffet breakfast and a champagne toast
            </div>
          </div>
        </div>
        <div className='card-right subCard'>
          <div className='card-image'>
            <Image
              src='/bunjee.gif'
              alt='Bungee jump'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Bungee Jump</p>
            <span className='text-xs text-pink-600'>Goa</span>
            <div className='text-sm font-semibold text-sky-800'>₹4,500</div>
            <div className='text-xs text-gray-800'>55 mtrs</div>
          </div>
        </div>

        <div className='card-top subCard'>
          <div className='card-image'>
            <Image src='/zip.gif' alt='Bungee jump' height={200} width={200} />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Zip Line Ride</p>
            <span className='text-xs text-pink-600'>Dubai - Jais </span>
            <div className='text-sm font-semibold text-sky-800'>₹14,000</div>
            <div className='text-xs text-gray-800'>
              1kilometer Long, Camera, Meal
            </div>
          </div>
        </div>

        <div className='card-bottom subCard'>
          <div className='card-image'>
            <Image
              src='/sub.gif'
              alt='Submarine ride'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Submarine Ride</p>
            <span className='text-xs text-pink-600'>Male </span>
            <div className='text-sm font-semibold text-sky-800'>₹15,000</div>
            <div className='text-xs text-gray-800'>
              2hr, Pick-up and Drop-off, Bottled Water
            </div>
          </div>
        </div>

        {/* <div className='card-left'>
          <div className='card-image'>
            <Image
              src='/bunjee.gif'
              alt='Bungee jump'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Zip Line Ride</p>
            <span className='text-xs text-pink-600'>Dubai - Jais </span>
            <div className='text-sm font-semibold text-sky-800'>₹14,000</div>
            <div className='text-xs text-gray-800'>
              1kilometer Long, Camera, Meal
            </div>
          </div>
        </div> */}

        {/* <div className='card-top'>
          <div className='card-image'>
            <Image
              src='/bunjee.gif'
              alt='Bungee jump'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Zip Line Ride</p>
            <span className='text-xs text-pink-600'>Dubai - Jais </span>
            <div className='text-sm font-semibold text-sky-800'>₹14,000</div>
            <div className='text-xs text-gray-800'>
              1kilometer Long, Camera, Meal
            </div>
          </div>
        </div> */}

        {/* <div className='card-bottom'>
          <div className='card-image'>
            <Image
              src='/bunjee.gif'
              alt='Bungee jump'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Zip Line Ride</p>
            <span className='text-xs text-pink-600'>Dubai - Jais </span>
            <div className='text-sm font-semibold text-sky-800'>₹14,000</div>
            <div className='text-xs text-gray-800'>
              1kilometer Long, Camera, Meal
            </div>
          </div>
        </div> */}

        {/* <div className='card-top'>
          <div className='card-image'>
            <Image
              src='/bunjee.gif'
              alt='Bungee jump'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Zip Line Ride</p>
            <span className='text-xs text-pink-600'>Dubai - Jais </span>
            <div className='text-sm font-semibold text-sky-800'>₹14,000</div>
            <div className='text-xs text-gray-800'>
              1kilometer Long, Camera, Meal
            </div>
          </div>
        </div> */}

        {/* <div className='card-right'>
          <div className='card-image'>
            <Image
              src='/bunjee.gif'
              alt='Bungee jump'
              height={200}
              width={200}
            />
          </div>
          <div className='card-text'>
            <p className='subCardp font-bold'>Zip Line Ride</p>
            <span className='text-xs text-pink-600'>Dubai - Jais </span>
            <div className='text-sm font-semibold text-sky-800'>₹14,000</div>
            <div className='text-xs text-gray-800'>
              1kilometer Long, Camera, Meal
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
