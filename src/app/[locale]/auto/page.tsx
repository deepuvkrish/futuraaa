'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill
} from 'react-icons/bs'
import { FaCommentDots } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsCurrencyRupee } from 'react-icons/bs'

const cars = [
  {
    id: 1,
    url: '/auto/cars/koe.png'
  },
  {
    id: 2,
    url: '/auto/cars/lamb.png'
  },
  {
    id: 3,
    url: '/auto/cars/ferrari.png'
  },
  {
    id: 4,
    url: '/auto/cars/bugatti.png'
  },
  {
    id: 5,
    url: '/auto/cars/mclaren.png'
  },
  {
    id: 6,
    url: '/auto/cars/audi.png'
  },
  {
    id: 7,
    url: '/auto/cars/bmw.png'
  },
  {
    id: 8,
    url: '/auto/cars/hyundai.png'
  },
  {
    id: 9,
    url: '/auto/cars/kia.png'
  },
  {
    id: 10,
    url: '/auto/cars/mercedes.png'
  },
  {
    id: 11,
    url: '/auto/cars/mini.png'
  },
  {
    id: 12,
    url: '/auto/cars/pagani.png'
  },
  {
    id: 13,
    url: '/auto/cars/skoda.png'
  },
  {
    id: 14,
    url: '/auto/cars/toyoto.png'
  },
  {
    id: 15,
    url: '/auto/cars/volvo.png'
  },
  {
    id: 16,
    url: '/auto/cars/ford.png'
  },
  {
    id: 17,
    url: '/auto/cars/aston.png'
  },
  {
    id: 18,
    url: '/auto/cars/bentley.png'
  },
  {
    id: 19,
    url: '/auto/cars/hyundai.png'
  },
  {
    id: 20,
    url: '/auto/cars/infinity.png'
  },
  {
    id: 21,
    url: '/auto/cars/mahindra.png'
  },
  {
    id: 22,
    url: '/auto/cars/maz.png'
  },
  {
    id: 23,
    url: '/auto/cars/mclaren.png'
  },
  {
    id: 24,
    url: '/auto/cars/pors.png'
  },
  {
    id: 25,
    url: '/auto/cars/rr.png'
  },
  {
    id: 26,
    url: '/auto/cars/tata.png'
  },
  {
    id: 27,
    url: '/auto/cars/tesla.png'
  }
]

export default function Home() {
  const t = useTranslations('')
  return (
    <div className='px-12'>
      <h1 className='mb-11 text-9xl font-extrabold'>Auto</h1>
      <div className='c-logos flex w-full flex-col items-center'>
        <h1 className='text-4xl font-semibold'>Top Brands</h1>
        <div className='mb-28 flex w-11/12 flex-wrap items-center justify-around'>
          {cars.map(car => {
            return (
              <Image
                src={car.url}
                alt='koenigsegg logo'
                height={75}
                width={75}
                key={car.id}
                className='m-2'
              />
            )
          })}
        </div>
      </div>
      <div className='mb-8 flex w-full flex-col pb-10'>
        <div className='super_sports mb-4 flex h-20 w-full items-center justify-end'>
          <h1 className='supertext pr-5 text-4xl font-bold italic'>
            <span className='sss'>S</span>uper{' '}
            <span className='text-black'>Sports</span>
          </h1>
        </div>

        <div className='flex w-full flex-col'>
          <div className='autocar mb-10 flex w-full justify-evenly'>
            {/* Lamborgini Reveulto */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/reveulto.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/lamb.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>Reveulto</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 12 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/* Lamborgini Aventador */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/lamb.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/lamb.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>Aventador</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 5.1 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>
            {/* Lamborgini Dual Avendator */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/lambo.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/lamb.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>Aventador</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 5.1 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>
            {/* Lamborgini Sian */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/sian2.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/lamb.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>Sian</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 25 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/* Lamborgini Sian */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/sian.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/lamb.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>Sian</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 25 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>
          </div>

          <div className='autocar mb-10 flex w-full justify-evenly'>
            {/*Porsche GT3 RS AMG */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/gt3.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/pors.png'
                  alt='lamborghini logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>GT3 RS</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 3.51 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/*Porsche 918 Spyder */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/porsche.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/pors.png'
                  alt='lamborghini logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>918 Spyder</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 7.5 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/* Porsche 911 GT2RS */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/911.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/pors.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>911 GT2 RS</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 3.88 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/* Porsche Spyder */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/spyder.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/lamb.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>918 Spyder</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 7.5 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/* Porsche GT2 RS*/}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/gt2rs.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/pors.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>GT2 RS</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 3.88 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>

            {/* Porsche GT3 RS */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <Image
                src='/auto/cars/gifs/gt3rs.gif'
                alt='cars'
                width={200}
                height={450}
                className='rounded-2xl'
              />
              <div className='caroverlay absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/pors.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>GT3 RS</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 3.51 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>
          </div>
          <div className='autocar mb-10 flex w-full justify-evenly'>
            {/* Mercedes AMG */}
            <div className='autocar relative flex w-[200px] flex-col items-center justify-center'>
              <div className='carimage rounded-xl'></div>
              <div className='caroverlay mercone absolute flex flex-col rounded-2xl'>
                <Image
                  src='/auto/cars/pors.png'
                  alt='koenigsegg logo'
                  height={75}
                  width={75}
                  className='m-2'
                />
                <h1 className='text-3xl font-bold'>GT3 RS</h1>
                <h2 className='flex items-center justify-center text-xl'>
                  <BsCurrencyRupee /> 3.51 Crore
                </h2>
              </div>
              <div className='comment_section relative mt-3 flex w-full flex-col'>
                <div className='interactions flex w-full justify-between'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500' />
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
