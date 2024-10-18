import Image from 'next/image'

import { FaCheck } from 'react-icons/fa6';
import { FaStar, FaAngleDown } from 'react-icons/fa';
import { FcPlus } from 'react-icons/fc';
import { fetchProducts } from '../../lib/data';



export default async function ProductsTable({
  query,
  currentPage
}: {
  query: string
  currentPage: number
}) {
  const products = await fetchProducts(query, currentPage)
  return (
    <div className='flex w-3/4 flex-wrap'>

        {products?.map((product)=>(
            <div key={product.id} className={product.whose}>
                <div className='product-tumb'>
                    <Image
                        src={product.image}
                        alt='product image'
                        width={700}
                        height={700}
                        className='duration-700 hover:scale-105'
                    />
                </div>
                <div className='product-details'>
                    <span className='product-catagory'>{product.subcategory}</span>
                    <h4>
                        <a href=''>{product.name}</a>
                    </h4>
                    <p>{product.details}</p>
                    <div className='product-bottom-details'>
                        <div className='product-price'>₹ {product.price}</div>
                        <div className='product-links'>
                            <a
                                href={product.links}
                                target='__blank'
                                className='flex'
                            >
                                <FcPlus /> Check Here
                            </a>
                        </div>
                        
                    </div>


                </div>
            </div>
            
        ))}

    

 


    


    </div>

  )
}
