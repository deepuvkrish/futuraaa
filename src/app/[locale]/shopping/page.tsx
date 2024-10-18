import Pagination from '../components/Pagination'


import Rating from './filters/rating'
import Pricerating from './filters/pricefilter'
import Userating from './filters/usefilter'
import Search from './filters/search'

import ProductsTable from './tables'

import { ProductSkeleton } from './skeletons'
import { Suspense } from 'react'
import { fetchProductPages } from '@/src/app/lib/data'


export default async function Shopping({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductPages(query);


  return (
    <div className='px-12'>
      <h1 className='shop_head text-center'>futura</h1>

      <div className='productNav mt-10 flex h-14 w-full items-center justify-center bg-slate-600'>
        <ul className='productNavlist flex w-full justify-evenly font-bold uppercase'>
          <li>Household</li>
          <li>Wears</li>
          <li>Gadgets</li>
          <li>Healthcare</li>
          <li>Exteriors</li>
          <li>Interiors</li>
          <li>Auto</li>
        </ul>
      </div>

      <div className='flex w-full justify-between'>
        {/* sidebar filters */}
        <div className='sideNavi flex w-1/5 flex-col'>
          {/* Searchbar  */}
          <Search placeholder='Search Products' />
          {/* Rating filters */}
          <Rating />

          {/* price filters */}
          <Pricerating />

          {/* use filter */}
          <Userating />
        </div>

        <Suspense
          key={query + currentPage}
          fallback={<ProductSkeleton />}
        >
          <ProductsTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>

      <div className=' m-4 flex items-center justify-center text-center'>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
      </div>
    </div>
  )
}
