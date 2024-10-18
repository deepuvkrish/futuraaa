'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill
} from 'react-icons/bs'

import { GiSpeedometer } from "react-icons/gi";
import { BsCurrencyRupee } from 'react-icons/bs'
import ReactPlayer from "react-player";


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

  let videosrc = "/auto/cars/sian.mp4";
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
          <div className='mb-10 flex w-full justify-evenly flex-wrap'>
             {/* Lamborgini Sian */}
            <div className='flex flex-col w-[400px] justify-center  bg-slate-900 mb-8'>
              <video height="200" width="400" controls className='rounded-lg'>
                <source src="/auto/cars/vids/sian.mp4" />
              </video>
              <div className='video_details flex flex-col h-20 w-full relative'>
                <div className='flex w-10 h-10 absolute top-1/2 carlogo z-10 right-0'>
                  <Image src="/auto/cars/lamb.png" alt='car' height={50} width={50} />
                </div>
                <div className='flex w- justify-between px-2 py-2 relative z-20'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500 likebtn' />
                  <span>Lamborghini Sian</span>
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700 dislikebtn' />
                </div>
                <div className='video_texts flex w-full p-2 items-center justify-evenly'>
                  <div className='flex items-center'>
                    <BsCurrencyRupee /> 
                    <p>25</p>
                    <span>Crs</span>
                  </div>
                  <div className='flex items-center'>
                    <GiSpeedometer />
                    <p>355</p>
                    <span>kmph</span>
                  </div>
                  <div className='flex items-center'>
                    <Image src="/auto/flag/italy.png" alt='logo' height={10} width={20}/>
                    <span>Italy</span>
                  </div>
                  
                </div>
              </div>
            </div>



             {/* Gamera */}
            <div className='flex flex-col w-[400px] justify-center  bg-slate-900 mb-8'>
              <video height="200" width="400" controls className='rounded-lg'>
                <source src="/auto/cars/vids/gamera-3.mp4" />
              </video>
              <div className='video_details flex flex-col h-20 w-full relative'>
                <div className='flex w-10 h-10 absolute top-1/2 carlogo z-10 right-0'>
                  <Image src="/auto/cars/koe.png" alt='car' height={50} width={50} />
                </div>
                <div className='flex w- justify-between px-2 py-2 relative z-20'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500 likebtn' />
                  <span>Koenigsegg Gamera</span>
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700 dislikebtn' />
                </div>
                <div className='video_texts flex w-full p-2 items-center justify-evenly'>
                  <div className='flex items-center'>
                    <BsCurrencyRupee /> 
                    <p>13</p>
                    <span>Crs</span>
                  </div>
                  <div className='flex items-center'>
                    <GiSpeedometer />
                    <p>400</p>
                    <span>kmph</span>
                  </div>
                  <div className='flex items-center'>
                    <Image src="/auto/flag/sweden.png" alt='logo' height={10} width={20}/>
                    <span>Sweden</span>
                  </div>
                  
                </div>
              </div>
            </div>


            {/* Bugatti */}
            <div className='flex flex-col w-[400px] justify-center  bg-slate-900 mb-8'>
              <video height="200" width="400" controls className='rounded-lg'>
                <source src="/auto/cars/vids/bugatti-1.mp4" />
              </video>
              <div className='video_details flex flex-col h-20 w-full relative'>
                <div className='flex w-10 h-10 absolute top-1/2 carlogo z-10 right-0'>
                  <Image src="/auto/cars/bugatti.png" alt='car' height={50} width={50} />
                </div>
                <div className='flex w- justify-between px-2 py-2 relative z-20'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500 likebtn' />
                  <span>Bugatti Chiron</span>
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700 dislikebtn' />
                </div>
                <div className='video_texts flex w-full p-2 items-center justify-evenly'>
                  <div className='flex items-center'>
                    <BsCurrencyRupee /> 
                    <p>28</p>
                    <span>Crs</span>
                  </div>
                  <div className='flex items-center'>
                    <GiSpeedometer />
                    <p>420</p>
                    <span>kmph</span>
                  </div>
                  <div className='flex items-center'>
                    <Image src="/auto/flag/france.png" alt='logo' height={10} width={20}/>
                    <span>France</span>
                  </div>
                  
                </div>
              </div>
            </div>


             {/* pagani */}
             <div className='flex flex-col w-[400px] justify-center  bg-slate-900 mb-8'>
              <video height="200" width="400" controls className='rounded-lg'>
                <source src="/auto/cars/vids/pagani.mp4" />
              </video>
              <div className='video_details flex flex-col h-20 w-full relative'>
                <div className='flex w-10 h-10 absolute top-1/2 carlogo z-10 right-0'>
                  <Image src="/auto/cars/pagani.png" alt='car' height={50} width={50} />
                </div>
                <div className='flex w- justify-between px-2 py-2 relative z-20'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500 likebtn' />
                  <span>Pagani Huayra</span>
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700 dislikebtn' />
                </div>
                <div className='video_texts flex w-full p-2 items-center justify-evenly'>
                  <div className='flex items-center'>
                    <BsCurrencyRupee /> 
                    <p>29</p>
                    <span>Crs</span>
                  </div>
                  <div className='flex items-center'>
                    <GiSpeedometer />
                    <p>383</p>
                    <span>kmph</span>
                  </div>
                  <div className='flex items-center'>
                    <Image src="/auto/flag/italy.png" alt='logo' height={10} width={20}/>
                    <span>Italy</span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Mclaren */}
            <div className='flex flex-col w-[400px] justify-center  bg-slate-900 mb-8'>
              <video height="200" width="400" controls className='rounded-lg'>
                <source src="/auto/cars/vids/mclaren.mp4" />
              </video>
              <div className='video_details flex flex-col h-20 w-full relative'>
                <div className='flex w-10 h-10 absolute top-1/2 carlogo z-10 right-0'>
                  <Image src="/auto/cars/mclaren.png" alt='car' height={50} width={50} />
                </div>
                <div className='flex w- justify-between px-2 py-2 relative z-20'>
                  <BsFillHandThumbsUpFill className='h-5 w-5 text-green-500 likebtn' />
                  <span>Mclaren P1</span>
                  <BsFillHandThumbsDownFill className='h-5 w-5 text-red-700 dislikebtn' />
                </div>
                <div className='video_texts flex w-full p-2 items-center justify-evenly'>
                  <div className='flex items-center'>
                    <BsCurrencyRupee /> 
                    <p>3.5</p>
                    <span>Crs</span>
                  </div>
                  <div className='flex items-center'>
                    <GiSpeedometer />
                    <p>350</p>
                    <span>kmph</span>
                  </div>
                  <div className='flex items-center'>
                    <Image src="/auto/flag/eng.png" alt='logo' height={10} width={20}/>
                    <span>Britain</span>
                  </div>
                  
                </div>
              </div>
            </div>



          </div>

         
        </div>
      </div>
    </div>
  )
}
