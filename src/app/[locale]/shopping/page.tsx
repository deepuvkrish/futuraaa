import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FcPlus } from 'react-icons/fc'
import { FaStar } from 'react-icons/fa'
import { FcExpired } from 'react-icons/fc'

export default function Shopping() {
  const t = useTranslations('')
  return (
    <div className='px-12'>
      <h1 className='shop_head text-center'>{t('shopping_futura')}</h1>

      <div className='flex w-full flex-wrap'>
        <div className='product-card'>
          <div className='badge newnorm'>
            <FaStar />
          </div>
          <div className='product-tumb'>
            <Image
              src='/wat.jpg'
              alt='water bed'
              width={700}
              height={700}
              className='duration-700 hover:scale-105'
            />
          </div>
          <div className='product-details'>
            <span className='product-catagory'>Bed, Water , Bedroom</span>
            <h4>
              <a href=''>Water Bed</a>
            </h4>
            <p>
              Vinyl mattresses with a unique internal water filling, unlike most
              mattresses filled with foam, spring, or latex.
            </p>
            <div className='product-bottom-details'>
              <div className='product-price'> ₹2,850</div>
              <div className='product-links'>
                <a
                  href='https://www.amazon.in/Sportssy-Prevention-hospitalization-Patients-Antisore/dp/B0BNXFPSRT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2QSZGA8X34AIS'
                  target='__blank'
                  className='flex'
                >
                  <FcPlus /> Check Here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='product-card'>
          <div className='badge newhot'>
            <FaStar />
            <FaStar />
          </div>
          <div className='product-tumb'>
            <Image
              src='/bonsai.jpg'
              alt='bonsai tree'
              width={700}
              height={700}
              className='duration-700 hover:scale-105'
            />
          </div>
          <div className='product-details'>
            <span className='product-catagory'>Tree,Plant</span>
            <h4>
              <a href=''>Bonsai tree</a>
            </h4>
            <p>
              Ficus is a very hardy tree, that is particularly great for
              banyan-style bonsai. It can be grown indoors and outdoors with
              beautiful pads and great aerial roots.
            </p>
            <div className='product-bottom-details'>
              <div className='product-price'>₹25,00,000</div>

              <div className='product-links'>
                <a
                  href='https://www.wigertsbonsai.com/product/chinese-banyan-wigerts-specimen-tree/'
                  target='__blank'
                  className='flex'
                >
                  <FcPlus /> Check Here
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='product-card'>
          <div className='badge newhot'>
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='product-tumb'>
            <Image
              src='/polki.jpg'
              alt='Polki Diamonds tree'
              width={700}
              height={700}
              className='duration-700 hover:scale-105'
            />
          </div>
          <div className='product-details'>
            <span className='product-catagory'>
              Jewels, Diamonds, Ornamanets
            </span>
            <h4>
              <a href=''>Polki Diamonds</a>
            </h4>
            <p>
              Uncut, Non-chemical interacted Stones, Fusion Necklace, 18k Gold
              and Diamond Polki Choker Necklace with Natural Freshwater Pearls
            </p>
            <div className='product-bottom-details'>
              <div className='product-price'>₹8,00,000</div>

              <div className='product-links'>
                <a
                  href='https://www.joyalukkas.in/blossoming-beauty-floral-diamond-necklace-set-dns-hqdn000876.html'
                  target='__blank'
                  className='flex'
                >
                  <FcPlus /> Check Here
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='product-card'>
          <div className='badge newhot'>
            <FaStar />
            <FaStar />
          </div>
          <div className='product-tumb'>
            <Image
              src='/mulb.webp'
              alt='Polki Diamonds tree'
              width={700}
              height={700}
              className='duration-700 hover:scale-105'
            />
          </div>
          <div className='product-details'>
            <span className='product-catagory'>
              Bedroom, BedSheets, Silk, Mulberry
            </span>
            <h4>
              <a href=''>Mulberry Bedsheets</a>
            </h4>
            <p>
              THXSILK 19 Momme 100% mulberry silk sheet set is constructed with
              natural protein fibers.
            </p>
            <div className='product-bottom-details'>
              <div className='product-price'>₹41,000</div>

              <div className='product-links'>
                <a
                  href='https://ind-en.ubuy.com/product/8K70K1COY-thxsilk-silk-sheet-set-4-pcs-19-momme-100-top-grade-natural-mulberry-silk-bed-sheets-luxury-bedding-sets-ultra-soft-durable-1-fitted-sheet-1'
                  target='__blank'
                  className='flex'
                >
                  <FcPlus /> Check Here
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='product-card'>
          <div className='badge newcom'>
            <FaStar />
          </div>
          <div className='product-tumb'>
            <Image
              src='/eye.jpg'
              alt='Eye Masks'
              width={700}
              height={700}
              className='duration-700 hover:scale-105'
            />
          </div>
          <div className='product-details'>
            <span className='product-catagory'>Sleep, Mask, Eyes</span>
            <h4>
              <a href=''>Eye Masks</a>
            </h4>
            <p>
              High elastic straps,makes this sleeping mask not easy to fall off
              while you are sleeping.One size fits most kids,teenagers and
              adults.
            </p>
            <div className='product-bottom-details'>
              <div className='product-price'>₹500</div>

              <div className='product-links'>
                <a
                  href='https://www.amazon.in/Aniwon-Sleeping-Blindfold-Eyeshade-Unicorn/dp/B07T9CDTGY'
                  target='__blank'
                  className='flex'
                >
                  <FcPlus /> Check Here
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='product-card'>
          <div className='badge newcom'>
            <FaStar />
          </div>
          <div className='product-tumb'>
            <Image
              src='/watch.webp'
              alt='Eye Masks'
              width={700}
              height={700}
              className='duration-700 hover:scale-105'
            />
          </div>
          <div className='product-details'>
            <span className='product-catagory'>Watch, Gifts, Jewels</span>
            <h4>
              <a href=''>Watch Charms</a>
            </h4>
            <p>
              Gold Coloured Mixed Metal + Rhinestone | Imitation Plating, Set of
              3 with Lobster Clasp
            </p>
            <div className='product-bottom-details'>
              <div className='product-price'>₹1500</div>

              <div className='product-links'>
                <a
                  href='https://jokerandwitch.com/collections/watch-charms/minimal'
                  target='__blank'
                  className='flex'
                >
                  <FcPlus /> Check Here
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className=' m-4 flex items-center justify-center text-center'>
        <FcExpired />
        <p>More to come soon..!!!</p>
      </div>
    </div>
  )
}
